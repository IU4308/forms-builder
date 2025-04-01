import Header from '@/components/Header';
import LatestsTemplates from '@/components/LatestsTemplates';
import PopularTemplates from '@/components/PopularTemplates';

export default function Home() {
    return (
        <main>
            <Header />
            <div className="mx-auto p-4 max-w-[1400px] ">
                <LatestsTemplates />
                <PopularTemplates />
            </div>
        </main>
    );
}
