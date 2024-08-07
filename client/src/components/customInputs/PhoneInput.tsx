import { PhoneInputProps } from "../../../types/index.types";

export const PhoneInput: React.FC<PhoneInputProps> = ({
    name,
    register,
    placeholder,
    rules,
    setValue,
    error,
    ...rest
}) => {
    const errorDetails = error && error[name];
    const errorMessage = errorDetails?.message;
    const inputClasses = error?.[name] ? `input-error ${name}` : name;

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;

        // Strip all non-numeric characters
        const numbers = value.replace(/\D/g, "");

        if (numbers.length <= 3) {
            value = numbers; // Up to 3 digits, just display the digits
        } else if (numbers.length <= 6) {
            value = `(${numbers.substring(0, 3)}) ${numbers.substring(3, 6)}`; // Format as (XXX) XXX
        } else if (numbers.length <= 10) {
            value = `(${numbers.substring(0, 3)}) ${numbers.substring(
                3,
                6
            )}-${numbers.substring(6, numbers.length)}`; // Format as (XXX) XXX-XXXX
        } else {
            const addtNumbers = numbers.length - 10;
            if (addtNumbers <= 3) {
                value = `+${numbers.substring(
                    0,
                    addtNumbers
                )} ${numbers.substring(
                    addtNumbers,
                    addtNumbers + 3
                )}-${numbers.substring(
                    addtNumbers + 3,
                    addtNumbers + 6
                )}-${numbers.substring(addtNumbers + 6, numbers.length)}`;
            } else {
                value = `+${numbers.substring(0, 3)} ${numbers.substring(
                    3,
                    6
                )}-${numbers.substring(6, 10)}-${numbers.substring(
                    10,
                    numbers.length
                )}`;
            }
        }

        setValue(name, value);
    };

    return (
        <div className="w-full mb-4 rounded-md">
            <input
                className={`w-full px-4 py-2 bg-gray-50 bg-opacity-50 shadow-inner border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600 ${inputClasses}`}
                placeholder={placeholder}
                {...register(name, rules)}
                onChange={handlePhoneChange}
            />
            {errorMessage && typeof errorMessage === "string" && (
                <span className="error-message">{errorMessage}</span>
            )}
        </div>
    );
};
