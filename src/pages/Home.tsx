import Header from '@/components/Header';
import LatestsTemplates from '@/components/LatestsTemplates';

export default function Home() {
    return (
        <main>
            <Header />
            <section className="mx-auto p-4 max-w-[1400px] border">
                <h1 className="text-2xl">Latests Templates</h1>
                <LatestsTemplates />
            </section>
        </main>
    );
}
