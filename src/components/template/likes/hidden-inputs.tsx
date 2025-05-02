export default function LikesHiddenInputs({
    action,
    userId,
    templateId,
    path,
}: {
    action: 'add' | 'remove';
    userId: string;
    templateId: string;
    path: string;
}) {
    return (
        <>
            <input hidden readOnly name="redirectTo" value={path} />
            <input hidden readOnly name="action" value={action} />
            <input hidden readOnly name="userId" value={userId} />
            <input hidden readOnly name="templateId" value={templateId} />
        </>
    );
}
