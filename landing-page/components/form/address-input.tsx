import Image from "next/image";
import { IFieldProps } from "./index";

const AddressInput = (props: IFieldProps) => {
  return (
    <div className="relative">
      <input
        type="text"
        id={props?.name}
        value={props?.value}
        name={props?.name}
        onBlur={props?.onBlur}
        onChange={props?.onChange}
        placeholder={props?.placeholder}
        disabled={props?.disabled || false}
        className={`block w-full px-4 pl-[90px] py-3 text-sm font-normal shadow-xs text-gray-100 bg-transparent border rounded-[10px] placeholder-gray-400 focus:outline-none leading-relaxed ${props?.errClass}`}
      />

      <Image
        src={"/base-logo.webp"}
        height={10}
        width={78}
        title="Base contract"
        alt={"base"}
        className="absolute top-0 left-0 rounded-l-[10px] userselect-none"
      />
    </div>
  );
};
export default AddressInput;
