import Cloud from '@/components/Cloud';
import LatestsTemplates from '@/components/LatestsTemplates';
import PopularTemplates from '@/components/PopularTemplates';

export default function Home() {
    return (
        <div>
            <LatestsTemplates />
            <PopularTemplates />
            <Cloud />
        </div>
    );
}
