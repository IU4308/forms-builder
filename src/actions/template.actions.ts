export const templateAction = async ({ request }: { request: Request }) => {
    try {
        console.log('Template action');
        const formData = await request.formData();
        console.log(Object.fromEntries(formData));
    } catch (error) {
        console.log(error);
        throw new Error('Server error');
    }
};
