import React, { VFC } from "react";

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
export const TableButton: VFC<Props> = ({ ...props }) => {
  return (
    <button
      className="border-blue-5 bg-blue-5  rounded-lg px-2"
      onClick={props.onClick}
    >
      <span className="text-purple-50">保存</span>
    </button>
  );
};
