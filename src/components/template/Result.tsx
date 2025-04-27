import { AggregatedResult } from '@/lib/definitions';
import Chart, { GoogleChartOptions } from 'react-google-charts';

export default function Result({
    result,
    options,
}: {
    result: AggregatedResult;
    options: GoogleChartOptions;
}) {
    return result.type !== 'multiple_line' ? (
        <Chart
            chartType={
                result.type === 'single_line' || result.type === 'integer_value'
                    ? 'ColumnChart'
                    : 'PieChart'
            }
            width="100%"
            height="400px"
            data={[['Answer', 'Count'], ...result.answers]}
            options={{
                ...options,
                title: result.question,
            }}
        />
    ) : (
        <div className="bg-accent p-4">
            <h2 className="text-lg font-semibold mb-2">{result.question}</h2>
            <div className="flex flex-col gap-2">
                {result.answers.map(([answer, count]) => (
                    <div key={answer} className="flex gap-2 items-center">
                        <div>{count}</div>
                        <div
                            key={answer}
                            className="flex items-center justify-between p-4 border rounded-md"
                        >
                            <span>{answer}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
