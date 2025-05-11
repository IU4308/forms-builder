import { useFetcher, useParams } from 'react-router';
import { Button } from './ui/button';

export default function ExportResults() {
    const { userId } = useParams();
    const fetcher = useFetcher();
    return (
        <fetcher.Form
            action={`/workspace/${userId}/token`}
            method="post"
            className="pb-4"
        >
            {fetcher?.data ? (
                <Button
                    className="cursor-default"
                    style={{ userSelect: 'text' }}
                    variant={'ghost'}
                >
                    {fetcher?.data.token}
                </Button>
            ) : (
                <Button>Get Token</Button>
            )}
        </fetcher.Form>
    );
}
