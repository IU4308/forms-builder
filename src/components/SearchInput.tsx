import { Form, useLoaderData } from 'react-router';
import { Button } from './ui/button';
import { IoIosSearch } from 'react-icons/io';
import { Input } from './ui/input';
import { useTranslation } from 'react-i18next';

export default function SearchInput({
    shouldRender,
    className,
}: {
    shouldRender: boolean;
    className: string;
}) {
    const { t: translator } = useTranslation();
    const { path } = useLoaderData();
    return (
        <Form method="get" action={path} className={className}>
            <Button
                className="absolute right-0 border-1 border-l-0 rounded-l-none"
                variant={'secondary'}
            >
                <IoIosSearch />
            </Button>
            {shouldRender && (
                <Input
                    type="text"
                    name="query"
                    className="!border-secondary"
                    placeholder={translator('placeholders.search_template')}
                />
            )}
        </Form>
    );
}
