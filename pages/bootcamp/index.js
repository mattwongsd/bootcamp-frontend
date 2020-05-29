import Head from "next/head";
import Layout from "../../components/Layout";
import BootcampList from "../../components/BootcampList";

const BootcampPage = (props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Bootcamp</title>
        </Head>
        <main>
          <BootcampList />
        </main>
      </Layout>
    </>
  );
};

export default BootcampPage;
