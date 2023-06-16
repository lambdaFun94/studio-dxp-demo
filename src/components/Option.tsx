import { useEffect, useState } from "react";
import { useQuestionActions } from "../hooks/useQuestionActions";
import { v4 as uuid } from "uuid";
import { useQuestionState } from "../hooks/useQuestionState";

export interface OptionProps {
  value?: string;
  // label is the text that will be displayed to the user if provided
}

const Option = ({ value }: OptionProps) => {
  const actions = useQuestionActions();
  const state = useQuestionState();

  const type = state.type;
  const checked = state.options.find((option) => option.id === value)?.selected;

  const [optionId, setOptionId] = useState(uuid());
  const [defaultValue, setDefaultValue] = useState("");

  useEffect(() => {
    console.log("id", optionId);
    setDefaultValue(`Option ${state.options.length + 1}`);

    actions.addOption({
      id: optionId,
      value: value || defaultValue,
      selected: false,
    });
  }, [optionId]);

  // TODO: useEffect that updates the value of the option in the state on prop change

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.target.checked
      ? actions.selectOption(optionId)
      : actions.deselectOption(optionId);
  };

  // TODO: label (Option 1, Option 2, etc. )
  // TODO: value

  return (
    <div className="space-y-5">
      <div className="relative flex items-start">
        <div className="flex h-6 items-center">
          <input
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            type={type === "Multiple Choice" ? "radio" : "checkbox"}
            name={value}
            onChange={handleChange}
            checked={checked}
          />
        </div>
        <div className="ml-3 text-sm leading-6">
          <label htmlFor={value} className="font-medium text-gray-900">
            {value || defaultValue}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Option;
