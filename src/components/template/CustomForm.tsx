import { useState } from 'react';
import {
    QuestionType,
    Field,
    InterfaceMode,
    TemplateLoaderData,
} from '@/lib/definitions';
import { initialFields } from '@/lib/constants';
import TemplateToolbar from './TemplateToolbar';
import { findNextPosition, getQuestionType } from '@/lib/utils';
import { Button } from '../ui/button';
import { useLoaderData } from 'react-router';
import FormHeader from './FormHeader';
import CustomField from './CustomField';

import { DndContext, closestCenter } from '@dnd-kit/core';
import {
    SortableContext,
    arrayMove,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import _ from 'lodash';

export default function CustomForm({
    mode,
    activeId,
    setActiveId,
}: {
    mode: InterfaceMode;
    activeId: string;
    setActiveId: React.Dispatch<React.SetStateAction<string>>;
}) {
    const { template, canEdit } = useLoaderData() as TemplateLoaderData;
    const [fields, setFields] = useState<Field[]>(
        template?.fields ?? initialFields
    );
    const [presentFields, absentFields] = _.partition(
        fields,
        (field) => field.isPresent
    );

    const handleAddField = (type: QuestionType) => {
        const newField = fields.find(
            (fields) => getQuestionType(fields.id) === type && !fields.isPresent
        );
        setFields((prevFields) => {
            const updatedFields = prevFields.map((field) => {
                if (field.id === newField?.id) {
                    return {
                        ...field,
                        isPresent: true,
                        question: 'No Title',
                        description: 'No description',
                        position: findNextPosition(prevFields),
                    };
                } else {
                    return field;
                }
            });

            return _.sortBy(updatedFields, 'position');
        });
    };

    const handleDeleteField = (id: string) => {
        setFields((prevFields) => {
            const updatedFields = prevFields.map((field) =>
                field.id === id
                    ? {
                          ...field,
                          isPresent: false,
                          position: -1,
                          question: '',
                          description: '',
                      }
                    : field
            );

            let position = 1;
            return updatedFields.map((field) => {
                if (field.isPresent) {
                    return {
                        ...field,
                        position: position++,
                    };
                }
                return field;
            });
        });
    };

    const handleDragEnd = (event: any) => {
        const { active, over } = event;

        if (active.id !== over.id) {
            setFields((fields) => {
                const oldIndex = fields.findIndex(
                    (field) => field.id === active.id
                );
                const newIndex = fields.findIndex(
                    (field) => field.id === over.id
                );

                return arrayMove(fields, oldIndex, newIndex);
            });
        }
    };

    return (
        <div
            key={fields.reduce(
                (accumulator, currentField) =>
                    currentField.isPresent
                        ? accumulator + currentField.position
                        : accumulator,
                0
            )}
            className="max-w-[768px] mx-auto flex flex-col gap-4 "
        >
            {mode === 'template' && (
                <TemplateToolbar onAddField={handleAddField} />
            )}
            {mode === 'form' && <FormHeader />}

            <DndContext
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <SortableContext
                    items={fields}
                    strategy={verticalListSortingStrategy}
                >
                    {presentFields.map((field, index) => (
                        <CustomField
                            key={field.id}
                            index={index}
                            mode={mode}
                            {...field}
                            activeId={activeId}
                            setActiveId={setActiveId}
                            onDeleteField={handleDeleteField}
                            canEdit={canEdit}
                        />
                    ))}
                </SortableContext>
            </DndContext>

            {absentFields.map((field) => (
                <div key={field.id} className="hidden">
                    <input
                        hidden
                        readOnly
                        name={`${field.id}State`}
                        value={'false'}
                    />
                    <input
                        hidden
                        readOnly
                        name={`${field.id}Question`}
                        value=""
                    />
                    <input
                        hidden
                        readOnly
                        name={`${field.id}Description`}
                        value=""
                    />
                    <input
                        hidden
                        readOnly
                        name={`${field.id}Position`}
                        value={100}
                    />
                </div>
            ))}

            {mode === 'form' && canEdit && (
                <div>
                    <Button type="submit">Submit</Button>
                </div>
            )}
        </div>
    );
}
