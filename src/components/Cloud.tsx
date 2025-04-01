import { tags } from '@/lib/constants';
import { TagCloud } from 'react-tagcloud';
import { Button } from './ui/button';

type Tag = {
    value: string;
};

const customRenderer = (tag: Tag) => (
    <Button key={tag.value} variant={'ghost'}>
        {tag.value}
    </Button>
);

export default function Cloud() {
    return (
        <div className="py-4">
            <h1>Search by tag</h1>
            <TagCloud
                minSize={12}
                maxSize={35}
                tags={tags}
                disableRandomColor={true}
                renderer={customRenderer}
                onClick={(tag) => alert(`'${tag.value}' was selected!`)}
            />
        </div>
    );
}
