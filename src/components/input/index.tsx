import React, { VFC } from "react";

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  type?: string;
};
export const TextInput: VFC<Props> = ({ ...props }) => {
  return (
    <input
      required
      autoFocus
      className="w-20 mr-1 rounded-lg border-2 border-blue-5 outline-none focus:border-blue-5"
      {...props}
    ></input>
  );
};
