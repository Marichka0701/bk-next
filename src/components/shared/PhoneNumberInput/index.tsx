import { useMask } from "@/src/hooks/useMask";
import { cn } from "@/src/lib/cn";
import { format } from "@react-input/mask";
import {
  ChangeEvent,
  FC,
  InputHTMLAttributes,
  useCallback,
} from "react";

export type Props = {
  id: string;
  mask?: string;
  onChange: (value: string) => void;
  value: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "value" | "onChange">;

export const PhoneNumberInput: FC<Props> = ({
  id,
  mask = "______________",
  onChange,
  value: valueProp,
  className,
  ...rest
}) => {
  const { options, hasEmptyMask, inputRef } = useMask({ mask });

  const value = format(valueProp, options);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange(format(event.target.value, options));
    },
    [onChange, options]
  );

  return (
    <input
      id={id}
      ref={inputRef}
      type="tel"
      placeholder={hasEmptyMask ? "Telefonnummer" : mask}
      className={cn(
        "w-full p-4 text-base text-gray-900 placeholder:text-gray-600 border rounded-md outline-none transition-colors duration-300",
        "border-border focus:border-gray-900",
        className
      )}
      value={value}
      onChange={handleChange}
      {...rest} // autoComplete, aria-invalid, aria-describedby osv. havner her
    />
  );
};
