import CustomField from './CustomField';
import { useState } from 'react';
import { QuestionType, Field, InterfaceMode } from '@/lib/definitions';
import { initialFields } from '@/lib/constants';
import TemplateToolbar from './TemplateToolbar';
import { getQuestionType } from '@/lib/utils';
import { useLoaderData } from 'react-router';
import FormHeader from './FormHeader';

export default function CustomForm({
    mode,
    activeId,
    setActiveId,
}: {
    mode: InterfaceMode;
    activeId: string;
    setActiveId: React.Dispatch<React.SetStateAction<string>>;
}) {
    const { template } = useLoaderData();
    const [fields, setFields] = useState<Field[]>(
        template?.fields ?? initialFields
    );

    const handleAddField = (type: QuestionType) => {
        const newQuestion = fields.find(
            (fields) => getQuestionType(fields.id) === type && !fields.isPresent
        );
        setFields((prevFields) =>
            prevFields.map((question) => {
                if (question.id === newQuestion?.id) {
                    return { ...question, isPresent: true };
                } else {
                    return question;
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
                    };
                } else {
                    return question;
                }
            })
        );
    };

    return (
        <div className="flex flex-col gap-4 ">
            {mode === 'template' && (
                <TemplateToolbar onAddField={handleAddField} />
            )}
            {mode === 'form' && <FormHeader />}

            {fields.map((field) => (
                <CustomField
                    key={field.id}
                    mode={mode}
                    {...field}
                    activeId={activeId}
                    setActiveId={setActiveId}
                    onDeleteField={handleDeleteField}
                />
            ))}
        </div>
    );
}
