import Condition from "../condition";

export interface ILabelProps {
  required?: boolean;
  label?: string;
  name?: string;
}

const Label = ({ required, label, name }: ILabelProps) => {
  return (
    <Condition
      condition={label !== ""}
      truth={
        <label className="" htmlFor={name}>
          <div className="flex flex-row items-center gap-2">
            <p className="p-0 m-0 leading-none">{label}</p>

            <Condition
              condition={required || false}
              truth={<p className="text-red-500 p-0 m-0 leading-none">*</p>}
            />
          </div>
        </label>
      }
    />
  );
};

export default Label;
