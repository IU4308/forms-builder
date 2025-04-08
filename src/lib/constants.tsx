import { JSX } from 'react';
import { ButtonVariant, Question } from './definitions';
import { FiShield, FiShieldOff, FiTrash } from 'react-icons/fi';
import { IoLockClosedOutline, IoLockOpenOutline } from 'react-icons/io5';

export const navMenu = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'My Workspace',
        url: '/workspaces/1',
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
        shouldRender: false,
    },
    {
        label: 'name',
    },
    {
        label: 'email',
    },
    {
        label: 'createdAt',
    },
    {
        label: 'lastLogin',
    },
    {
        label: 'isBlocked',
    },
    {
        label: 'isAdmin',
    },
];

// export type TableAttributes = typeof adminTableAttributes;

export const templatesTableAttributes = [
    {
        label: 'title',
        className: '',
    },
    {
        label: 'created_at',
        className: '',
    },
    {
        label: 'updated_at',
        className: '',
    },
    {
        label: 'submissions',
        className: 'text-right',
    },
];

export const homeTableAttributes = [
    {
        label: 'title',
        className: '',
    },
    {
        label: 'author',
        className: '',
    },
    {
        label: 'submissions',
        className: 'text-right',
    },
];

export const adminButtons: {
    description: string;
    label: string;
    icon: JSX.Element;
    variant?: ButtonVariant;
}[] = [
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

export const initialQuestions: Question[] = [
    {
        id: 1,
        isPresent: false,
        title: 'No title',
        description: 'No description',
        type: 'single-line',
    },
    {
        id: 2,
        isPresent: false,
        title: 'No title',
        description: 'No description',
        type: 'single-line',
    },
    {
        id: 3,
        isPresent: false,
        title: 'No title',
        description: 'No description',
        type: 'single-line',
    },
    {
        id: 4,
        isPresent: false,
        title: 'No title',
        description: 'No description',
        type: 'single-line',
    },
    {
        id: 5,
        isPresent: false,
        title: 'No title',
        description: 'No description',
        type: 'multiple-line',
    },
    {
        id: 6,
        isPresent: false,
        title: 'No title',
        description: 'No description',
        type: 'multiple-line',
    },
    {
        id: 7,
        isPresent: false,
        title: 'No title',
        description: 'No description',
        type: 'multiple-line',
    },
    {
        id: 8,
        isPresent: false,
        title: 'No title',
        description: 'No description',
        type: 'multiple-line',
    },
    {
        id: 9,
        isPresent: false,
        title: 'No title',
        description: 'No description',
        type: 'integer-value',
    },
    {
        id: 10,
        isPresent: false,
        title: 'No title',
        description: 'No description',
        type: 'integer-value',
    },
    {
        id: 11,
        isPresent: false,
        title: 'No title',
        description: 'No description',
        type: 'integer-value',
    },
    {
        id: 12,
        isPresent: false,
        title: 'No title',
        description: 'No description',
        type: 'integer-value',
    },
    {
        id: 13,
        isPresent: false,
        title: 'No title',
        description: 'No description',
        type: 'checkbox',
    },
    {
        id: 14,
        isPresent: false,
        title: 'No title',
        description: 'No description',
        type: 'checkbox',
    },
    {
        id: 15,
        isPresent: false,
        title: 'No title',
        description: 'No description',
        type: 'checkbox',
    },
    {
        id: 16,
        isPresent: false,
        title: 'No title',
        description: 'No description',
        type: 'checkbox',
    },
];
