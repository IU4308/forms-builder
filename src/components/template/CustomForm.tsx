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
    console.log(fields);
    const handleAddField = (type: QuestionType) => {
        const newField = fields.find(
            (fields) => getQuestionType(fields.id) === type && !fields.isPresent
        );
        setFields((prevFields) =>
            prevFields.map((field) => {
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
            })
        );
    };

    const handleDeleteField = (id: string) => {
        setFields((prevFields) =>
            prevFields.map((question) => {
                if (question.id === id) {
                    return {
                        ...question,
                        isPresent: false,
                        position: 100,
                        question: '',
                        description: '',
                    };
                } else {
                    return question;
                }
            })
        );
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
            // key={fields.reduce(
            //     (accumulator, currentField) =>
            //         currentField.isPresent
            //             ? accumulator + currentField.position
            //             : accumulator,
            //     0
            // )}
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
                    {fields.map((field, index) => (
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

            {/* {fields.map((field) => (
                <CustomField
                    key={field.id}
                    mode={mode}
                    {...field}
                    activeId={activeId}
                    setActiveId={setActiveId}
                    onDeleteField={handleDeleteField}
                    canEdit={canEdit}
                />
            ))} */}

            {mode === 'form' && canEdit && (
                <div>
                    <Button type="submit">Submit</Button>
                </div>
            )}
        </div>
    );
}
