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
      <meta name="twitter:image" content={image ? image : "/img/pig.jpeg"} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="og:image"
        className="w-full h-full"
        content={image ? image : "/img/pig.jpeg"}
      />
    </head>
  );
};
