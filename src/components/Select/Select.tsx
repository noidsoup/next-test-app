import React, { useState, ChangeEvent } from "react";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  options: Option[];
  onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    // place into context here;
    onChange(value);
  };

  return (
    <div className="custom-select">
      <select value={selectedOption} onChange={handleSelectChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
