import { ChangeEvent, FC, useState } from "react";

export const Form: FC = () => {
  const [value, setValue] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <div>
      <label id="a-number">Alien Registration Number</label>
      <input
        id="a-number"
        type="text"
        placeholder="Enter..."
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
