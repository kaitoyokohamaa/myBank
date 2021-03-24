import Head from "next/head";

interface Props {
  title?: string;
  description?: string;
  keyword?: string;
  image?: string;
  lang?: string;
}

export const Heads = ({
  title,
  description,
  keyword,
  image,
}: Props): JSX.Element => {
  return (
    <>
      <html lang="ja" />
      <Head>
        <title>Bank App</title>
        {/* SEO */}
        {title ? (
          <meta property="og:title" content={title} />
        ) : (
          <meta property="og:title" content="家計簿アプリです。" />
        )}

        {description ? (
          <meta
            name="Description"
            property="og:description"
            content={description}
          />
        ) : (
          <meta
            name="Description"
            property="og:description"
            content="こちらは家計簿アプリです。グラフで自分が使ったお金を見える化します。"
          />
        )}
        {image ? (
          <meta property="og:image" content={image} />
        ) : (
          <meta property="og:image" content="/img/pig.jpeg" />
        )}
        <meta property="og:site_name" content="kaibank" />
        <meta property="og:type" content="website" />
        {keyword && <meta name="keywords" content={keyword} />}

        {/* twitterで拡散 */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@mj3PBy4ayqxfy14" />
        {/* fabicon */}
        <link rel="shortcut icon" href="/img/pig.jpeg" />
        <link rel="apple-touch-icon" href="/img/pig.jpeg" />
      </Head>
    </>
  );
};
