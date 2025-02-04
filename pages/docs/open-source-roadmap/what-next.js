import Head from "next/head";

import Page from "@components/Page";

export default function DocsNext() {
  return (
    <>
      <Head>
        <title>Open Source Roadmap</title>
        <meta
          name="description"
          content="Roadmap for Open Source projects and how to contribute to them."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <h1 className="text-4xl mb-4 font-bold">
          Open Source Roadmap: What next?
        </h1>
        <p>Coming soon</p>
      </Page>
    </>
  );
}
