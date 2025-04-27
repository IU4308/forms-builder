import { Field } from '@/lib/definitions';

export default function FieldHiddenInputs({
    absentFields,
}: {
    absentFields: Field[];
}) {
    return absentFields.map((field) => (
        <div key={field.id} className="hidden">
            <input hidden readOnly name={`${field.id}State`} value={'false'} />
            <input hidden readOnly name={`${field.id}Question`} value="" />
            <input hidden readOnly name={`${field.id}Description`} value="" />
            <input hidden readOnly name={`${field.id}Position`} value={-1} />
        </div>
    ));
}
