import { Field, InterfaceMode } from '@/lib/definitions';
import React from 'react';
import CustomField from './CustomField';

export default function FormFields({
    fields,
    mode,
    activeId,
    setActiveId,
    onDeleteField,
    canEdit,
}: {
    fields: Field[];
    mode: InterfaceMode;
    activeId: string;
    setActiveId: React.Dispatch<React.SetStateAction<string>>;
    onDeleteField: (id: string) => void;
    canEdit: boolean;
}) {
    return (
        <>
            {fields.map((field) => (
                <CustomField
                    key={field.id}
                    mode={mode}
                    {...field}
                    activeId={activeId}
                    setActiveId={setActiveId}
                    onDeleteField={onDeleteField}
                    canEdit={canEdit}
                />
            ))}
        </>
    );
}
