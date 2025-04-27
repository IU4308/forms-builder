import { TemplateLoaderData } from '@/lib/definitions';
import { useLoaderData } from 'react-router';
import AggregatedResults from './AggregatedResults';

export default function TemplateResults() {
    const { results } = useLoaderData() as TemplateLoaderData;
    return (
        results && (
            <div>
                {results.length > 0 ? (
                    <AggregatedResults />
                ) : (
                    <h1 className="flex justify-center p-4">No results</h1>
                )}
            </div>
        )
    );
}
