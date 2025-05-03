import { format } from 'date-fns';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { useLoaderData } from 'react-router';
import { FilledFormData, FormData } from '@/lib/definitions';
import { useTranslation } from 'react-i18next';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function FormHeader() {
    const { t: translate } = useTranslation();
    const { template, currentUser } = useLoaderData() as
        | FormData
        | FilledFormData;
    return (
        <>
            <div className="bg-accent py-4 px-6 flex flex-col gap-2 rounded-sm">
                <h1 className="">{template.title}</h1>
                <Markdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                >
                    {template.description}
                </Markdown>
                {template.imageUrl && (
                    <img
                        src={template!.imageUrl}
                        alt="template image"
                        className="max-h-[400px] object-cover"
                    />
                )}
            </div>
            <div className="bg-accent py-4 px-6 flex flex-col gap-2 rounded-sm">
                <h2>{translate('Credentials')}</h2>
                <div className="grid grid-cols sm:grid-cols-3 gap-6 py-2">
                    <div>
                        <Label htmlFor="name">{translate('Name')}</Label>
                        <Input
                            id="name"
                            className="!opacity-80 placeholder:text-foreground px-0 !bg-accent focus-visible:ring-0 rounded-none border-0 border-b-2"
                            value={
                                template.credentials?.name ??
                                currentUser?.name ??
                                ''
                            }
                            disabled={true}
                        />
                    </div>
                    <div>
                        <Label htmlFor="email">{translate('Email')}</Label>
                        <Input
                            id="email"
                            className="!opacity-80 placeholder:text-foreground px-0 !bg-accent focus-visible:ring-0 rounded-none border-0 border-b-2"
                            value={
                                template?.credentials?.email ??
                                currentUser?.email ??
                                ''
                            }
                            disabled
                        />
                    </div>
                    <div>
                        <Label htmlFor="date">{translate('Date')}</Label>
                        <Input
                            id="date"
                            className="!opacity-80 placeholder:text-foreground px-0 !bg-accent focus-visible:ring-0 rounded-none border-0 border-b-2"
                            placeholder={
                                template?.createdAt
                                    ? format(
                                          new Date(template.createdAt),
                                          '2025-MM-dd'
                                      )
                                    : format(new Date(), '2025-MM-dd')
                            }
                            disabled={true}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
