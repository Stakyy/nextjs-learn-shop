import Head from "next/head";
import Link from "next/link";

interface IProps {
  children: JSX.Element | JSX.Element[];
  keywords: string;
  title: string;
}

export const MainContainer = ({ children, keywords, title }: IProps) => {
  return (
    <>
      <Head>
        {/* @ts-ignore */}
        <meta keywords={`shop, nextjs` + keywords}></meta>
        <title>{title}</title>
      </Head>
      <div>{children}</div>
    </>
  );
};
