import LatestsTemplates from '@/components/LatestsTemplates';
import PopularTemplates from '@/components/PopularTemplates';
import TagSearch from '@/components/TagSearch';

export default function Home() {
    return (
        <div>
            <LatestsTemplates />
            <PopularTemplates />
            <TagSearch />
        </div>
    );
}
