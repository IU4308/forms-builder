import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import CustomField from './CustomField';
import { useState } from 'react';
import { QuestionType, Question } from '@/lib/definitions';
import { initialQuestions } from '@/lib/constants';
import TemplateToolbar from './TemplateToolbar';

export default function CustomForm() {
    const [questions, setQuestions] = useState<Question[]>(initialQuestions);

    const handleAddQuestion = (type: QuestionType) => {
        const newQuestion = questions.find(
            (question) => question.type === type && !question.isPresent
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
    return (
        <div className="flex flex-col gap-4 ">
            <TemplateToolbar onAddQuestion={handleAddQuestion} />
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

            {questions.map((field) => (
                <CustomField key={field.id} {...field} />
            ))}
        </div>
    );
}
