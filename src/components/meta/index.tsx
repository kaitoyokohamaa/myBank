import React, { VFC } from "react";

type Props = {
  title?: string;
  image?: string;
  desctiotion?: string;
};
export const Meta: VFC<Props> = ({ title, image, desctiotion }) => {
  console.log(image);
  return (
    <head>
      <meta http-equiv="x-ua-compatible" content="ie=edge" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mj3PBy4ayqxfy14" />
      <meta property="og:site_name" content="家計簿アプリ" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title ? title : "家計簿アプリ"} />
      <meta property="og:locale" content="ja" />

      <meta
        name="description"
        content={
          desctiotion ? desctiotion : "自分が使った支出をグラフで見える化します"
        }
      />
      <meta
        property="og:description"
        content={
          desctiotion ? desctiotion : "自分が使った支出をグラフで見える化します"
        }
      />
      <meta name="twitter:image" content={image ? image : "/img/pig.jpeg"} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:url" content="https://ogp-kaitoyokohamaa.vercel.app" />
      <link rel="canonical" href="https://ogp-kaitoyokohamaa.vercel.app" />
      <meta property="og:image" content={image ? image : "/img/pig.jpeg"} />
      <title>{title}</title>
    </head>
  );
};
