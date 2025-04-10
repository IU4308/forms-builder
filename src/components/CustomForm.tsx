import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import CustomField from './CustomField';
import { useState } from 'react';
import { QuestionType, Question, InterfaceMode } from '@/lib/definitions';
import { initialQuestions } from '@/lib/constants';
import TemplateToolbar from './TemplateToolbar';
import { getQuestionType } from '@/lib/utils';
import { useLoaderData } from 'react-router';

export default function CustomForm({
    mode,
    activeId,
    setActiveId,
}: {
    mode: InterfaceMode;
    activeId: string;
    setActiveId: React.Dispatch<React.SetStateAction<string>>;
}) {
    const { templateQuestions } = useLoaderData();
    const [questions, setQuestions] = useState<Question[]>(
        templateQuestions ?? initialQuestions
    );
    // const [activeId, setActiveId] = useState('');

    const handleAddQuestion = (type: QuestionType) => {
        const newQuestion = questions.find(
            (question) =>
                getQuestionType(question.id) === type && !question.isPresent
        );
        setQuestions((prevQuestions) =>
            prevQuestions.map((question) => {
                if (question.id === newQuestion?.id) {
                    return { ...question, isPresent: true };
                } else {
                    return question;
                }
            })
        );
    };

    const handleDeleteQuestion = (id: string) => {
        setQuestions((prevQuestions) =>
            prevQuestions.map((question) => {
                if (question.id === id) {
                    return {
                        ...question,
                        isPresent: false,
                        question: 'No title',
                        description: 'No description',
                    };
                } else {
                    return question;
                }
            })
        );
    };

    console.log(questions);

    return (
        <div className="flex flex-col gap-4 ">
            {mode === 'template' && (
                <TemplateToolbar onAddQuestion={handleAddQuestion} />
            )}
            {mode === 'form' && (
                <>
                    <div className="bg-accent py-4 px-6 flex flex-col gap-2 rounded-sm">
                        <h1 className="">New Form</h1>
                        <h2>Description</h2>
                    </div>
                    <div className="bg-accent py-4 px-6 flex flex-col gap-2 rounded-sm">
                        <h2>Credentials</h2>
                        <div className="grid grid-cols sm:grid-cols-3 gap-6 py-2">
                            <div>
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    className="!opacity-80 placeholder:text-foreground px-0 !bg-accent focus-visible:ring-0 rounded-none border-0 border-b-2"
                                    placeholder={'John Doe'}
                                    disabled={true}
                                />
                            </div>
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    className="!opacity-80 placeholder:text-foreground px-0 !bg-accent focus-visible:ring-0 rounded-none border-0 border-b-2"
                                    placeholder={'john@email.com'}
                                    disabled
                                />
                            </div>
                            <div>
                                <Label htmlFor="date">Date</Label>
                                <Input
                                    id="date"
                                    className="!opacity-80 placeholder:text-foreground px-0 !bg-accent focus-visible:ring-0 rounded-none border-0 border-b-2"
                                    placeholder={new Date().toDateString()}
                                    disabled={true}
                                />
                            </div>
                        </div>
                    </div>
                </>
            )}

            {questions.map((field) => (
                <CustomField
                    key={field.id}
                    mode={mode}
                    {...field}
                    activeId={activeId}
                    setActiveId={setActiveId}
                    onDeleteQuestion={handleDeleteQuestion}
                />
            ))}
        </div>
    );
}
