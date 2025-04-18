import { Tag, TemplateType, Topic } from '@/lib/definitions';
import TemplateImage from './TemplateImage';
import TemplateDescription from './TemplateDescription';
import TemplateTopic from './TemplateTopic';
import TemplateTitle from './TemplateTitle';
import TemplateTags from './TemplateTags';

export default function GeneralSettings({
    template,
    topics,
    tags,
}: {
    template: TemplateType | undefined;
    topics: Topic[];
    tags: Tag[];
}) {
    return (
        <div className="flex flex-col gap-4 py-4">
            <h1>General settings</h1>
            <TemplateTitle title={template?.title} />
            <TemplateDescription description={template?.description} />
            <TemplateTopic topics={topics} topicId={template?.topicId} />
            <TemplateImage
                key={template?.imageUrl}
                imageUrl={template?.imageUrl}
            />
            <TemplateTags tags={tags} />
        </div>
    );
}
