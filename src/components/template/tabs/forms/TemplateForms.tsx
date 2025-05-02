import AppTable from '@/components/app-table/AppTable';
import { TemplateFormsType, TemplateLoaderData } from '@/lib/definitions';
import { getAnswersAttributes } from '@/lib/utils';
import { useLoaderData, useParams } from 'react-router';

export default function TemplateForms() {
    const { templateForms } = useLoaderData() as TemplateLoaderData;
    const { templateId } = useParams();
    return (
        templateForms && (
            <div>
                {templateForms?.length > 0 ? (
                    <AppTable
                        data={templateForms}
                        attributes={getAnswersAttributes(
                            templateForms[0] as TemplateFormsType
                        )}
                        shouldSort={true}
                        routes={`templates/${templateId}/forms`}
                    />
                ) : (
                    <h1 className="flex justify-center p-4">No answers</h1>
                )}
            </div>
        )
    );
}
