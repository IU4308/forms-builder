import { useState } from 'react';
import {
    QuestionType,
    Field,
    InterfaceMode,
    TemplateLoaderData,
} from '@/lib/definitions';
import { initialFields } from '@/lib/constants';
import TemplateToolbar from './TemplateToolbar';
import {
    cn,
    enumerateFields,
    getQuestionType,
    translateData,
} from '@/lib/utils';
import { Button } from '../../../ui/button';
import { useLoaderData } from 'react-router';
import CustomField from './CustomField';

import { DndContext, closestCenter } from '@dnd-kit/core';
import {
    SortableContext,
    arrayMove,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import _ from 'lodash';
import FormHeader from './FormHeader';
import FieldHiddenInputs from './hidden-inputs';
import { useTranslation } from 'react-i18next';

export default function CustomForm({
    tabId,
    mode,
    activeId,
    setActiveId,
}: {
    tabId: number;
    mode: InterfaceMode;
    activeId: string;
    setActiveId: React.Dispatch<React.SetStateAction<string>>;
}) {
    const { t: translator } = useTranslation();
    const { template, canEdit } = useLoaderData() as TemplateLoaderData;
    const [fields, setFields] = useState<Field[]>(
        template?.fields ??
            translateData(
                initialFields,
                ['question', 'description'],
                translator
            )
    );
    const [presentFields, absentFields] = _.partition(
        fields,
        (field) => field.isPresent
    );

    const handleAddField = (type: QuestionType) => {
        const newField = absentFields.find(
            (field) => getQuestionType(field.id) === type
        );
        if (!newField) return;

        setFields((prevFields) => {
            const newFields = prevFields.filter(
                (field) => field.id !== newField.id
            );

            const updatedFields = [
                ...newFields,
                {
                    id: newField.id,
                    isPresent: true,
                    question: 'No Title',
                    description: 'No description',
                    position: 100,
                },
            ];

            return enumerateFields(updatedFields);
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

            return enumerateFields(updatedFields);
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
            className={cn(
                'max-w-[768px] mx-auto flex flex-col gap-4 visible',
                tabId !== 2 && 'hidden'
            )}
        >
            {mode === 'template' && (
                <TemplateToolbar
                    onAddField={handleAddField}
                    absentFields={absentFields}
                />
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

            <FieldHiddenInputs absentFields={absentFields} />

            {mode === 'form' && canEdit && (
                <div>
                    <Button type="submit">Submit</Button>
                </div>
            )}
        </div>
    );
}
