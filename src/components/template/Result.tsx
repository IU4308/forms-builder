import { AggregatedResult } from '@/lib/definitions';
import Chart from 'react-google-charts';

export default function Result({ result }: { result: AggregatedResult }) {
    const options = {
        title: result.question,
        backgroundColor: '#0a0a0a',
        colors: ['#216e0c'],
        hAxis: {
            title: 'Answer',
            textStyle: { color: '#ffffff' },
            titleTextStyle: { color: '#ffffff' },
        },
        vAxis: {
            title: 'Count',
            textStyle: { color: '#ffffff' },
            titleTextStyle: { color: '#ffffff' },
        },
        titleTextStyle: {
            color: '#ffffff',
        },
        legend: 'none',
    };
    return (
        result.type !== 'multiple_line' && (
            <Chart
                chartType={
                    result.type === 'single_line' ||
                    result.type === 'integer_value'
                        ? 'ColumnChart'
                        : 'PieChart'
                }
                width="100%"
                height="400px"
                data={[['Answer', 'Count'], ...result.answers]}
                options={options}
            />
        )
    );
}
