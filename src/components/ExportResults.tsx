import { useFetcher, useParams } from 'react-router';
import { Button } from './ui/button';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Check, Copy } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ExportResults() {
    const { t } = useTranslation();
    const { userId } = useParams();
    const fetcher = useFetcher();
    const [copied, setCopied] = useState(false);

    const token = fetcher?.data?.token;
    return (
        <fetcher.Form
            action={`/workspace/${userId}/token`}
            method="post"
            className="pb-4"
        >
            {token ? (
                <div className="flex items-center gap-2">
                    <span className="truncate max-w-[300px] bg-accent border px-2 py-1 rounded text-sm font-mono">
                        {token}
                    </span>
                    <CopyToClipboard
                        text={token}
                        onCopy={() => {
                            setCopied(true);
                            setTimeout(() => setCopied(false), 1500);
                        }}
                    >
                        <Button size="sm" variant="outline">
                            {copied ? (
                                <>
                                    <Check className="h-4 w-4 mr-1" />
                                    {t('Copied')}
                                </>
                            ) : (
                                <>
                                    <Copy className="h-4 w-4 mr-1" />
                                    {t('Copy')}
                                </>
                            )}
                        </Button>
                    </CopyToClipboard>
                </div>
            ) : (
                <Button>{t('Get Token')}</Button>
            )}
        </fetcher.Form>
    );
}
