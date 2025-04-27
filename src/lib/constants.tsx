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
        key: 'id',
        shouldRender: false,
    },
    {
        label: 'Name',
        key: 'name',
    },
    {
        label: 'Email',
        key: 'email',
    },
    {
        label: 'Registered at',
        key: 'createdAt',
    },
    {
        label: 'Last Login',
        key: 'lastLogin',
    },
    {
        label: 'is blocked',
        key: 'isBlocked',
    },
    {
        label: 'is admin',
        key: 'isAdmin',
    },
];

export const templatesTableAttributes = [
    {
        key: 'id',
        shouldRender: false,
    },
    {
        label: 'Title',
        key: 'title',
    },
    {
        label: 'Topic',
        key: 'topic',
    },
    {
        label: 'Created at',
        key: 'createdAt',
    },
];

export const formsTableAttributes = [
    {
        key: 'id',
        shouldRender: false,
    },
    {
        key: 'templateId',
        shouldRender: false,
    },
    {
        label: 'Title',
        key: 'title',
    },
    {
        label: 'Author',
        key: 'author',
    },
    {
        label: 'Topic',
        key: 'topic',
    },
    {
        label: 'Submitted at',
        key: 'submittedAt',
    },
];

export const popularTemplatesAttributes = [
    {
        key: 'id',
        className: '',
        shouldRender: false,
    },
    {
        label: 'Title',
        key: 'title',
        className: '',
    },
    {
        label: 'Topic',
        key: 'topic',
        className: '',
    },
    {
        label: 'Author',
        key: 'author',
        className: '',
    },
    {
        label: 'Submissions',
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

export const workspaceTabButtons = [
    {
        id: 1,
        label: 'Templates',
    },
    {
        id: 2,
        label: 'Forms',
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
    {
        id: 4,
        label: 'Aggregated Results',
    },
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
        position: 1,
    },
    {
        id: 'singleLine2',
        isPresent: false,
        question: 'No title',
        position: -1,
        description: 'No description',
    },
    {
        id: 'singleLine3',
        isPresent: false,
        question: 'No title',
        position: -1,
        description: 'No description',
    },
    {
        id: 'singleLine4',
        isPresent: false,
        question: 'No title',
        position: -1,
        description: 'No description',
    },
    {
        id: 'multipleLine1',
        isPresent: false,
        question: 'No title',
        position: -1,
        description: 'No description',
    },
    {
        id: 'multipleLine2',
        isPresent: false,
        question: 'No title',
        position: -1,
        description: 'No description',
    },
    {
        id: 'multipleLine3',
        isPresent: false,
        question: 'No title',
        position: -1,
        description: 'No description',
    },
    {
        id: 'multipleLine4',
        isPresent: false,
        question: 'No title',
        position: -1,
        description: 'No description',
    },
    {
        id: 'integerValue1',
        isPresent: false,
        question: 'No title',
        position: -1,
        description: 'No description',
    },
    {
        id: 'integerValue2',
        isPresent: false,
        question: 'No title',
        position: -1,
        description: 'No description',
    },
    {
        id: 'integerValue3',
        isPresent: false,
        question: 'No title',
        position: -1,
        description: 'No description',
    },
    {
        id: 'integerValue4',
        isPresent: false,
        question: 'No title',
        position: -1,
        description: 'No description',
    },
    {
        id: 'checkbox1',
        isPresent: false,
        question: 'No title',
        position: -1,
        description: 'No description',
    },
    {
        id: 'checkbox2',
        isPresent: false,
        question: 'No title',
        position: -1,
        description: 'No description',
    },
    {
        id: 'checkbox3',
        isPresent: false,
        question: 'No title',
        position: -1,
        description: 'No description',
    },
    {
        id: 'checkbox4',
        isPresent: false,
        question: 'No title',
        position: -1,
        description: 'No description',
    },
];

export const reactSelectStyles = {
    control: (base: any, state: any) => ({
        ...base,
        backgroundColor: 'var(--background)',
        borderColor: state.isFocused ? 'var(--ring)' : 'var(--input)',
        boxShadow: state.isFocused ? '0 0 0 2px var(--ring)' : 'none',
        padding: '2px',
        borderRadius: '0.375rem', // rounded-md
        minHeight: '2.5rem',
        '&:hover': {
            borderColor: 'var(--ring)',
        },
    }),
    menu: (base: any) => ({
        ...base,
        backgroundColor: 'var(--popover)',
        zIndex: 50,
        position: 'absolute',
    }),
    menuList: (base: any) => ({
        ...base,
        backgroundColor: 'var(--secondary)',
        padding: 0,
        zIndex: 50,
    }),
    option: (base: any, state: any) => ({
        ...base,
        backgroundColor: state.isFocused
            ? 'var(--accent)'
            : 'var(--background)',
        color: 'var(--foreground)',
        cursor: 'pointer',
        fontSize: '0.875rem', // text-sm
        padding: '0.5rem 0.75rem',
        zIndex: 50,
    }),
    multiValue: (base: any) => ({
        ...base,
        backgroundColor: 'var(--muted)',
        color: 'var(--foreground)',
    }),
    multiValueLabel: (base: any) => ({
        ...base,
        color: 'var(--foreground)',
    }),
    multiValueRemove: (base: any) => ({
        ...base,
        ':hover': {
            backgroundColor: 'var(--ring)',
            color: 'white',
        },
    }),
    placeholder: (base: any) => ({
        ...base,
        color: 'var(--muted-foreground)',
        fontSize: '0.875rem',
    }),
    input: (base: any) => ({
        ...base,
        color: 'var(--foreground)',
        fontSize: '0.875rem',
    }),
};

export const chartsOptionsDarkMode = {
    backgroundColor: '#121212',
    hAxis: {
        title: 'Answer',
        textStyle: { color: '#ffffff' },
        titleTextStyle: { color: '#ffffff' },
    },
    vAxis: {
        title: 'Count',
        textStyle: { color: '#ffffff' },
        titleTextStyle: { color: '#ffffff' },
    },
    titleTextStyle: {
        color: '#ffffff',
    },
    legend: 'none',
    pieSliceText: 'label',
};

export const chartsOptionsLightMode = {
    backgroundColor: '#f2f2f2',
    hAxis: {
        title: 'Answer',
    },
    vAxis: {
        title: 'Count',
    },
    legend: 'none',
    pieSliceText: 'label',
};
