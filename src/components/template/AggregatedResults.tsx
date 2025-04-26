import _ from 'lodash';
import { useLoaderData } from 'react-router';
import Result from './Result';
import { TemplateData } from '@/lib/definitions';
import { chartsOptionsDarkMode, chartsOptionsLightMode } from '@/lib/constants';

export default function AggregatedResults() {
    const { results } = useLoaderData() as TemplateData;
    const options =
        localStorage.getItem('theme') === 'dark'
            ? chartsOptionsDarkMode
            : chartsOptionsLightMode;
    console.log('results', results);
    return (
        <div className="max-w-[768px] mx-auto flex flex-col gap-4">
            {results.map((result) => (
                <Result
                    key={result.question}
                    result={result}
                    options={options}
                />
            ))}
        </div>
    );
}
