import { Tag, Topic } from '@/lib/definitions';
import TemplateImage from './TemplateImage';
import TemplateDescription from './TemplateDescription';
import TemplateTopic from './TemplateTopic';
import TemplateTitle from './TemplateTitle';
import TemplateTags from './TemplateTags';

export default function GeneralSettings({
    title,
    description,
    imageUrl,
    topicId,
    topics,
    tags,
}: {
    title: string | undefined;
    description: string | undefined;
    imageUrl: string | undefined;
    topicId: number | undefined;
    topics: Topic[];
    tags: Tag[];
}) {
    return (
        <div className="flex flex-col gap-4 py-4">
            <h1>General settings</h1>
            <TemplateTitle title={title} />
            <TemplateDescription description={description} />
            <TemplateTopic topics={topics} topicId={topicId} />
            <TemplateImage key={imageUrl} imageUrl={imageUrl} />
            <TemplateTags tags={tags} />
        </div>
    );
}
