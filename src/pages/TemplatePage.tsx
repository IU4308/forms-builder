import Comments from '@/components/Comments';
import Template from './Template';
import { useParams } from 'react-router';

export default function TemplatePage() {
    const { formId } = useParams();
    return (
        <div className="">
            <Template />
            {!formId && <Comments />}
        </div>
    );
}
