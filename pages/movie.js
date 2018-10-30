import Head from "next/head";
import { withRouter } from "next/router";

const Movie = props => (
  <div>
    <Head>
      <title>{props.router.query.title} | Geon Store</title>
    </Head>
    <h1>{props.router.query.title}</h1>
    <h1>movie</h1>
  </div>
);

export default withRouter(Movie);
