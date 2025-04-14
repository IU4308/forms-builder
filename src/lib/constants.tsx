import { Field, QuestionType, ToolbarButton } from './definitions';
import { FiShield, FiShieldOff, FiTrash } from 'react-icons/fi';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { IoLockClosedOutline, IoLockOpenOutline } from 'react-icons/io5';

export const navMenu = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'My Workspace',
        url: '/workspace',
    },
    {
        title: 'Login',
        url: '/login',
    },
    {
        title: 'Logout',
        url: '/logout',
    },
    {
        title: 'Admin',
        url: '/admin',
    },
];

export const adminTableAttributes = [
    {
        label: 'id',
        key: 'id',
        shouldRender: false,
    },
    {
        label: 'name',
        key: 'name',
    },
    {
        label: 'email',
        key: 'email',
    },
    {
        label: 'createdAt',
        key: 'createdAt',
    },
    {
        label: 'lastLogin',
        key: 'lastLogin',
    },
    {
        label: 'isBlocked',
        key: 'isBlocked',
    },
    {
        label: 'isAdmin',
        key: 'isAdmin',
    },
];

export const templatesTableAttributes = [
    {
        label: 'id',
        key: 'id',
        shouldRender: false,
    },
    {
        label: 'title',
        key: 'title',
    },
    {
        label: 'topic',
        key: 'topic',
    },
    {
        label: 'createdAt',
        key: 'createdAt',
    },
];

export const formsTableAttributes = [
    {
        label: 'id',
        key: 'id',
        shouldRender: false,
    },
    {
        label: 'templateId',
        key: 'templateId',
        shouldRender: false,
    },
    {
        label: 'title',
        key: 'title',
    },
    {
        label: 'description',
        key: 'description',
    },
    {
        label: 'submittedAt',
        key: 'submittedAt',
    },
];

export const homeTableAttributes = [
    {
        label: 'title',
        key: 'title',
        className: '',
    },
    {
        label: 'author',
        key: 'author',
        className: '',
    },
    {
        label: 'submissions',
        key: 'submissions',
        className: 'text-right',
    },
];

export const workspaceButtons: ToolbarButton[] = [
    {
        label: 'create',
        description: 'Create a template',
        canBeDisabled: false,
        type: 'button',
        url: '/templates',
        icon: <IoIosAddCircleOutline />,
    },
    {
        label: 'delete',
        description: 'Delete template',
        variant: 'destructive',
        icon: <FiTrash />,
    },
];

export const workspaceFormsButtons: ToolbarButton[] = [
    {
        label: 'delete',
        description: 'Delete form',
        variant: 'destructive',
        icon: <FiTrash />,
    },
];

export const adminButtons: ToolbarButton[] = [
    {
        label: 'block',
        description: 'Block user',
        icon: <IoLockClosedOutline />,
    },
    {
        label: 'unblock',
        description: 'Unblock user',
        icon: <IoLockOpenOutline />,
    },
    {
        label: 'add-to-admins',
        description: 'Add user to admins',
        icon: <FiShield />,
    },
    {
        label: 'remove-from-admins',
        description: 'Remove user from admins',
        icon: <FiShieldOff />,
    },
    {
        label: 'delete',
        description: 'Delete user',
        icon: <FiTrash />,
        variant: 'destructive',
    },
];

export const templateTabButtons = [
    {
        id: 1,
        label: 'Settings',
    },
    {
        id: 2,
        label: 'Questions',
    },
    {
        id: 3,
        label: 'Answers',
    },
];

export const templates = [
    {
        title: 'Customer Feedback Form',
        description:
            'Collect valuable insights from customers to improve your products and services.',
        author: 'John Doe',
        image: '/test.png',
        topic: 'Customer Experience',
        created_at: new Date('2025-04-02').toDateString(),
        updated_at: new Date('2025-04-02').toDateString(),
        submissions: '14',
        // tags: ['feedback', 'reviews', 'customer satisfaction', 'business'],
    },
    {
        title: 'Event Registration Form',
        description:
            'Register attendees for events and collect essential details for seamless event management.',
        author: 'Jane Smith',
        image: null,
        topic: 'Event Management',
        created_at: new Date('2025-04-02').toDateString(),
        updated_at: new Date('2025-04-02').toDateString(),
        submissions: '14',
        // tags: ['event', 'registration', 'attendees', 'planning'],
    },
    {
        title: 'Job Application Form',
        description:
            'Streamline your hiring process by gathering resumes and candidate details efficiently.',
        author: 'HR Team',
        image: null,
        topic: 'Recruitment',
        created_at: new Date('2025-04-02').toDateString(),
        updated_at: new Date('2025-04-02').toDateString(),
        submissions: '14',
        // tags: ['job', 'application', 'resume', 'hiring'],
    },
    {
        title: 'Survey Form',
        description:
            'Engage your audience with structured surveys and analyze collected responses.',
        author: 'Marketing Team',
        image: null,
        topic: 'Market Research',
        created_at: new Date('2025-04-02').toDateString(),
        updated_at: new Date('2025-04-02').toDateString(),
        submissions: '14',
        // tags: ['survey', 'data collection', 'analysis', 'research'],
    },
    {
        title: 'Contact Us Form',
        description:
            'Enable users to send inquiries or support requests with ease.',
        author: 'Support Team',
        image: null,
        topic: 'Customer Support',
        created_at: new Date('2025-04-02').toDateString(),
        updated_at: new Date('2025-04-02').toDateString(),
        submissions: '14',
        // tags: ['contact', 'support', 'inquiries', 'help'],
    },
    {
        title: 'Newsletter Signup Form',
        description:
            'Allow users to subscribe to your newsletter and stay updated with the latest news.',
        author: 'Marketing Team',
        image: null,
        topic: 'Email Marketing',
        created_at: new Date('2025-04-02').toDateString(),
        updated_at: new Date('2025-04-02').toDateString(),
        submissions: '14',
        // tags: ['newsletter', 'subscription', 'email', 'marketing'],
    },
    {
        title: 'Product Order Form',
        description:
            'Simplify the purchasing process by letting customers place product orders online.',
        author: 'Sales Team',
        image: null,
        topic: 'E-commerce',
        created_at: new Date('2025-04-02').toDateString(),
        updated_at: new Date('2025-04-02').toDateString(),
        submissions: '14',
        // tags: ['order', 'product', 'purchase', 'checkout'],
    },
    {
        title: 'Bug Report Form',
        description:
            'Help users report issues or bugs in your application for faster resolution.',
        author: 'Development Team',
        image: null,
        topic: 'Software Development',
        created_at: new Date('2025-04-02').toDateString(),
        updated_at: new Date('2025-04-02').toDateString(),
        submissions: '14',
        // tags: ['bug', 'issue', 'report', 'debugging'],
    },
];

export const tags = [
    { value: 'feedback', count: 1 },
    { value: 'reviews', count: 1 },
    { value: 'customer satisfaction', count: 1 },
    { value: 'business', count: 1 },
    { value: 'event', count: 1 },
    { value: 'registration', count: 1 },
    { value: 'attendees', count: 1 },
    { value: 'planning', count: 1 },
    { value: 'job', count: 1 },
    { value: 'application', count: 1 },
    { value: 'resume', count: 1 },
    { value: 'hiring', count: 1 },
    { value: 'survey', count: 1 },
    { value: 'data collection', count: 1 },
    { value: 'analysis', count: 1 },
    { value: 'research', count: 1 },
    { value: 'contact', count: 1 },
    { value: 'support', count: 1 },
    { value: 'inquiries', count: 1 },
    { value: 'help', count: 1 },
    { value: 'newsletter', count: 1 },
    { value: 'subscription', count: 1 },
    { value: 'email', count: 1 },
    { value: 'marketing', count: 1 },
    { value: 'order', count: 1 },
    { value: 'product', count: 1 },
    { value: 'purchase', count: 1 },
    { value: 'checkout', count: 1 },
    { value: 'bug', count: 1 },
    { value: 'issue', count: 1 },
    { value: 'report', count: 1 },
    { value: 'debugging', count: 1 },
    { value: 'enrollment', count: 1 },
    { value: 'course', count: 1 },
    { value: 'student', count: 1 },
    { value: 'learning', count: 1 },
    { value: 'donation', count: 1 },
    { value: 'charity', count: 1 },
    { value: 'fundraising', count: 1 },
    { value: 'non-profit', count: 1 },
];

export const questionTypes: QuestionType[] = [
    'singleLine',
    'multipleLine',
    'integerValue',
    'checkbox',
];

export const initialFields: Field[] = [
    {
        id: 'singleLine1',
        isPresent: true,
        question: 'No title',
        description: 'No description',
    },
    {
        id: 'singleLine2',
        isPresent: false,
        question: 'No title',
        description: 'No description',
    },
    {
        id: 'singleLine3',
        isPresent: false,
        question: 'No title',
        description: 'No description',
    },
    {
        id: 'singleLine4',
        isPresent: false,
        question: 'No title',
        description: 'No description',
    },
    {
        id: 'multipleLine1',
        isPresent: false,
        question: 'No title',
        description: 'No description',
    },
    {
        id: 'multipleLine2',
        isPresent: false,
        question: 'No title',
        description: 'No description',
    },
    {
        id: 'multipleLine3',
        isPresent: false,
        question: 'No title',
        description: 'No description',
    },
    {
        id: 'multipleLine4',
        isPresent: false,
        question: 'No title',
        description: 'No description',
    },
    {
        id: 'integerValue1',
        isPresent: false,
        question: 'No title',
        description: 'No description',
    },
    {
        id: 'integerValue2',
        isPresent: false,
        question: 'No title',
        description: 'No description',
    },
    {
        id: 'integerValue3',
        isPresent: false,
        question: 'No title',
        description: 'No description',
    },
    {
        id: 'integerValue4',
        isPresent: false,
        question: 'No title',
        description: 'No description',
    },
    {
        id: 'checkbox1',
        isPresent: false,
        question: 'No title',
        description: 'No description',
    },
    {
        id: 'checkbox2',
        isPresent: false,
        question: 'No title',
        description: 'No description',
    },
    {
        id: 'checkbox3',
        isPresent: false,
        question: 'No title',
        description: 'No description',
    },
    {
        id: 'checkbox4',
        isPresent: false,
        question: 'No title',
        description: 'No description',
    },
];
