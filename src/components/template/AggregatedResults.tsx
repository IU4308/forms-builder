import _ from 'lodash';
import { useLoaderData } from 'react-router';
import Result from './Result';
import { TemplateData } from '@/lib/definitions';

export default function AggregatedResults() {
    const { results } = useLoaderData() as TemplateData;
    console.log(results);
    return (
        <div className="max-w-[768px] mx-auto flex flex-col gap-4">
            {results.map((result) => (
                <Result key={result.question} result={result} />
            ))}
        </div>
    );
}
