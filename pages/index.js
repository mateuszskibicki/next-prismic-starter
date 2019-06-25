//import PropTypes from "prop-types";
import Prismic from "prismic-javascript";
import { MainLayout } from "../components/layout/MainLayout";
//import { Link } from "../server/next-routes/routesFrontEnd";

// Front-end
const Homepage = () => {
  return (
    <MainLayout>
      <h1 className="my-5 display-3">
        This page is temporary just to list ready pages and test prismic
        connection.
      </h1>
    </MainLayout>
  );
};

// Back-end
Homepage.getInitialProps = async ({ req, res, query }) => {
  //Prismic connection
  const prismicConnection = await Prismic.getApi(
    process.env.PRISMIC_API_ENDPOINT,
    {
      accessToken: process.env.PRISMIC_ACCESS_TOKEN
    }
  );

  console.log(prismicConnection);
  return {};
};

export default Homepage;
