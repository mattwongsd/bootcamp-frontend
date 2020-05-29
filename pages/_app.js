import { RecoilRoot } from "recoil";
import { ApolloProvider } from "@apollo/react-hooks";
import apolloClient from "../utils/ApolloClient";
import "../styles/app.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </RecoilRoot>
  );
};

export default MyApp;
