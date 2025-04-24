import { Tag, Topic } from '@/lib/definitions';
import TemplateImage from './image';
import TemplateTopic from './topic';
import TemplateTitle from './title';
import TemplateTags from './tags';
import TemplateDescription from './description';

export default function GeneralSettings({
    title,
    description,
    imageUrl,
    topicId,
    topics,
    tags,
    templateTagIds,
}: {
    title: string | undefined;
    description: string | undefined;
    imageUrl: string | undefined;
    topicId: number | undefined;
    topics: Topic[];
    tags: Tag[];
    templateTagIds?: number[] | undefined;
}) {
    return (
        <div className="flex flex-col gap-4 py-4">
            <h1>General settings</h1>
            <TemplateTitle title={title} />
            <TemplateDescription description={description} />
            <TemplateTopic topics={topics} topicId={topicId} />
            <TemplateImage key={imageUrl} imageUrl={imageUrl} />
            <TemplateTags
                key={templateTagIds?.reduce((acc, curr) => acc + curr, 0)}
                tags={tags}
                templateTagIds={templateTagIds}
            />
        </div>
    );
}
