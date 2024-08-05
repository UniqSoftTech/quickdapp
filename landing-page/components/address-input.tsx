import { useEffect, useState } from "react";

export default function AddressInput({
  disabled = false,
  onChange,
  placeholder = "0x0000000000000000000000000000000000000000",
}: {
  disabled?: boolean;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    if (value.length === 42) {
      onChange(value);
    }
  }, [value]);

  return (
    <div className="relative">
      <input
        required
        type="text"
        value={value}
        maxLength={42}
        minLength={42}
        id="default-search"
        disabled={disabled}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        className="block w-full px-4 py-2 text-sm font-normal shadow-xs text-gray-900 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none leading-relaxed"
      />
    </div>
  );
}
