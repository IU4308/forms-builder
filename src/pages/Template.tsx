import CustomForm from '@/components/CustomForm';
import FormSettings from '@/components/FormSettings';

export default function Template() {
    return (
        <div className="max-w-[768px] mx-auto">
            <FormSettings />
            <CustomForm />
        </div>
    );
}
