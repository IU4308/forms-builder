import { useState } from 'react';
import { QuestionType, Field, InterfaceMode } from '@/lib/definitions';
import { initialFields } from '@/lib/constants';
import TemplateToolbar from './TemplateToolbar';
import { getQuestionType } from '@/lib/utils';
import { useLoaderData } from 'react-router';
import FormHeader from './FormHeader';
import { Button } from './ui/button';
import FormFields from './FormFields';

export default function CustomForm({
    mode,
    activeId,
    setActiveId,
}: {
    mode: InterfaceMode;
    activeId: string;
    setActiveId: React.Dispatch<React.SetStateAction<string>>;
}) {
    const { template, canEdit } = useLoaderData();
    const [fields, setFields] = useState<Field[]>(
        template?.fields ?? initialFields
    );

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
                        question: '',
                        description: '',
                    };
                } else {
                    return question;
                }
            })
        );
    };

    return (
        <div className="max-w-[768px] mx-auto flex flex-col gap-4 ">
            {mode === 'template' && (
                <TemplateToolbar onAddField={handleAddField} />
            )}
            {mode === 'form' && <FormHeader />}

            <FormFields
                fields={fields}
                mode={mode}
                activeId={activeId}
                setActiveId={setActiveId}
                onDeleteField={handleDeleteField}
                canEdit={canEdit}
            />

            {mode === 'form' && canEdit && (
                <div>
                    <Button type="submit">Submit</Button>
                </div>
            )}
        </div>
    );
}
