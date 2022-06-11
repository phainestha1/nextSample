import React from "react";
import Head from "next/head";

interface SeoProps {
  title: String;
}

export default function Seo({ title }: SeoProps) {
  return (
    <Head>
      <title>{title} | Tiny Test</title>
    </Head>
  );
}
