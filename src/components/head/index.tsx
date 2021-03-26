import Head from "next/head";

interface Props {
  title?: string;
  description?: string;
  keyword?: string;
  image?: string;
  lang?: string;
}

export const Heads = ({ keyword }: Props): JSX.Element => {
  return (
    <>
      <html lang="ja" />
      <Head>
        <title>Bank App</title>
        {/* SEO */}
        {keyword && <meta name="keywords" content={keyword} />}
      </Head>
    </>
  );
};
