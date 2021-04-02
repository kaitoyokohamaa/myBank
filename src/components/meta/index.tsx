import React, { VFC } from "react";

type Props = {
  title?: string;
  image?: string;
};
export const Meta: VFC<Props> = ({ title, image }) => {
  console.log(image);
  return (
    <head>
      <title>{title}</title>
      <meta property="og:image" content={image ? image : "/img/pig.jpeg"} />
    </head>
  );
};
