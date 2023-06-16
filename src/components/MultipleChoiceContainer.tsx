import { twMerge } from "tailwind-merge";
import { QuestionProvider } from "../providers/QuestionProvider";

export interface MultipleChoiceContainerProps {
  label: string;
  boldLabel?: boolean;
  italicLabel?: boolean;
  underlineLabel?: boolean;
  description?: string;
  boldDescription?: boolean;
  italicDescription?: boolean;
  underlineDescription?: boolean;
  required?: boolean;
  children?: React.ReactNode;
}

export const initialProps: MultipleChoiceContainerProps = {
  label: "Untitled Question",
};

const CheckboxContainer = ({
  label,
  boldLabel,
  italicLabel,
  underlineLabel,
  description,
  boldDescription,
  italicDescription,
  underlineDescription,
  required,
  children,
}: MultipleChoiceContainerProps) => {
  return (
    <QuestionProvider type={"Multiple Choice"}>
      <div className="col-span-full mt-10 space-y-10">
        <fieldset>
          <legend
            className={twMerge(
              "block text-sm font-medium leading-6 text-gray-900",
              boldLabel && "font-bold",
              italicLabel && "italic",
              underlineLabel && "underline"
            )}
          >
            {label}
          </legend>
          <p
            className={twMerge(
              "text-sm text-gray-500",
              boldDescription && "font-bold",
              italicDescription && "italic",
              underlineDescription && "underline"
            )}
          >
            {description}
          </p>
          <div className="mt-6 space-y-6">{children}</div>
        </fieldset>
      </div>
    </QuestionProvider>
  );
};

export default CheckboxContainer;
