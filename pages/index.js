import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";

const Index = (props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Bootcamp</title>
        </Head>
        <main>
          <Link href="/bootcamp/create">
            <a>Create Bootcamp</a>
          </Link>
        </main>
      </Layout>
    </>
  );
};

export default Index;
