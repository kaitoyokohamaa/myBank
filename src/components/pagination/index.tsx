import React, { useState } from "react";
import { Pagination } from "antd";

interface Props {
  onChange: (page: number, pageSize?: number | undefined) => void;
  numEachPage: number;
  maxNum: number;
}

export default function Index(props: Props) {
  return (
    <div>
      <Pagination
        defaultCurrent={1}
        total={props.maxNum}
        onChange={props.onChange}
        defaultPageSize={props.numEachPage}
      />
    </div>
  );
}
