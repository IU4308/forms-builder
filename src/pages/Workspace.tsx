import Header from '@/components/Header';
import UserTemplates from '@/components/UserTemplates';

export default function Workspace() {
    return (
        <main>
            <Header />
            <div className="mx-auto p-4 max-w-[1400px] ">
                <UserTemplates />
            </div>
        </main>
    );
}
