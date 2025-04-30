import { CurrentUser, Field, QuestionType, ToolbarButton } from './definitions';
import { FiShield, FiShieldOff, FiTrash } from 'react-icons/fi';
import { IoIosAddCircleOutline } from 'react-icons/io';
import {
    IoLockClosedOutline,
    IoLockOpenOutline,
    IoRemoveCircleOutline,
} from 'react-icons/io5';

export const getNavMenu = (currentUser: CurrentUser | null) => [
    {
        title: 'nav.home',
        shouldRender: true,
        url: '/',
    },
    {
        title: 'nav.workspace',
        shouldRender: !!currentUser,
        url: '/workspace',
    },
    {
        title: 'nav.login',
        shouldRender: !currentUser,
        url: '/login',
    },
    {
        title: 'nav.logout',
        prefix: currentUser?.name,
        shouldRender: !!currentUser,
        url: '/logout',
    },
    {
        title: 'nav.admin',
        shouldRender: currentUser?.isAdmin ?? false,
        url: '/admin',
    },
];

export const adminTableAttributes = [
    {
        key: 'id',
        shouldRender: false,
    },
    {
        label: 'user.name',
        key: 'name',
    },
    {
        label: 'user.email',
        key: 'email',
    },
    {
        label: 'user.created_at',
        key: 'createdAt',
    },
    {
        label: 'user.last_login',
        key: 'lastLogin',
    },
    {
        label: 'user.is_blocked',
        key: 'isBlocked',
    },
    {
        label: 'user.is_admin',
        key: 'isAdmin',
    },
];

export const templatesTableAttributes = [
    {
        key: 'id',
        shouldRender: false,
    },
    {
        label: 'template.title',
        key: 'title',
    },
    {
        label: 'template.topic',
        key: 'topic',
    },
    {
        label: 'template.created_at',
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
        label: 'template.title',
        key: 'title',
    },
    {
        label: 'template.author',
        key: 'author',
    },
    {
        label: 'template.topic',
        key: 'topic',
    },
    {
        label: 'form.created_at',
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
        label: 'template.title',
        key: 'title',
        className: '',
    },
    {
        label: 'template.topic',
        key: 'topic',
        className: '',
    },
    {
        label: 'template.author',
        key: 'author',
        className: '',
    },
    {
        label: 'template.submissions',
        key: 'submissions',
        className: 'text-right',
    },
];

export const workspaceTemplateButtons: ToolbarButton[] = [
    {
        label: 'buttons.create',
        description: 'tooltips.create_template',
        canBeDisabled: false,
        type: 'button',
        url: '/templates',
        icon: <IoIosAddCircleOutline />,
    },
    {
        label: 'buttons.delete',
        description: 'tooltips.delete_template',
        variant: 'destructive',
        icon: <FiTrash />,
    },
];

export const workspaceFormsButtons: ToolbarButton[] = [
    {
        label: 'buttons.delete',
        description: 'tooltips.delete_form',
        variant: 'destructive',
        icon: <FiTrash />,
    },
];

export const adminButtons: ToolbarButton[] = [
    {
        label: 'buttons.block',
        description: 'tooltips.block',
        icon: <IoLockClosedOutline />,
    },
    {
        label: 'buttons.unblock',
        description: 'tooltips.unblock',
        icon: <IoLockOpenOutline />,
    },
    {
        label: 'buttons.add_admin',
        description: 'tooltips.add_admin',
        icon: <FiShield />,
    },
    {
        label: 'buttons.remove_admin',
        description: 'tooltips.remove_admin',
        icon: <FiShieldOff />,
    },
    {
        label: 'buttons.delete',
        description: 'tooltips.delete_user',
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
        label: 'Aggregation',
    },
];

export const templateUsersTableAttributes = [
    {
        key: 'id',
        shouldRender: false,
    },
    {
        label: 'user.name',
        key: 'name',
        shouldRender: true,
    },
    {
        label: 'user.email',
        key: 'email',
        shouldRender: true,
    },
];
export const templateUsersButtons: ToolbarButton[] = [
    {
        label: 'Remove',
        type: 'button',
        description: 'tooltips.remove_user',
        variant: 'destructive',
        icon: <IoRemoveCircleOutline />,
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
        question: 'question.default_title',
        description: 'question.default_description',
        position: 1,
    },
    {
        id: 'singleLine2',
        isPresent: false,
        question: 'question.default_title',
        position: -1,
        description: 'question.default_description',
    },
    {
        id: 'singleLine3',
        isPresent: false,
        question: 'question.default_title',
        position: -1,
        description: 'question.default_description',
    },
    {
        id: 'singleLine4',
        isPresent: false,
        question: 'question.default_title',
        position: -1,
        description: 'question.default_description',
    },
    {
        id: 'multipleLine1',
        isPresent: false,
        question: 'question.default_title',
        position: -1,
        description: 'question.default_description',
    },
    {
        id: 'multipleLine2',
        isPresent: false,
        question: 'question.default_title',
        position: -1,
        description: 'question.default_description',
    },
    {
        id: 'multipleLine3',
        isPresent: false,
        question: 'question.default_title',
        position: -1,
        description: 'question.default_description',
    },
    {
        id: 'multipleLine4',
        isPresent: false,
        question: 'question.default_title',
        position: -1,
        description: 'question.default_description',
    },
    {
        id: 'integerValue1',
        isPresent: false,
        question: 'question.default_title',
        position: -1,
        description: 'question.default_description',
    },
    {
        id: 'integerValue2',
        isPresent: false,
        question: 'question.default_title',
        position: -1,
        description: 'question.default_description',
    },
    {
        id: 'integerValue3',
        isPresent: false,
        question: 'question.default_title',
        position: -1,
        description: 'question.default_description',
    },
    {
        id: 'integerValue4',
        isPresent: false,
        question: 'question.default_title',
        position: -1,
        description: 'question.default_description',
    },
    {
        id: 'checkbox1',
        isPresent: false,
        question: 'question.default_title',
        position: -1,
        description: 'question.default_description',
    },
    {
        id: 'checkbox2',
        isPresent: false,
        question: 'question.default_title',
        position: -1,
        description: 'question.default_description',
    },
    {
        id: 'checkbox3',
        isPresent: false,
        question: 'question.default_title',
        position: -1,
        description: 'question.default_description',
    },
    {
        id: 'checkbox4',
        isPresent: false,
        question: 'question.default_title',
        position: -1,
        description: 'question.default_description',
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
