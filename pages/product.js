import Head from "next/head";
import { withRouter } from "next/router";
import Axios from "axios";

const Movie = props => (
  <div>
    <Head>
      <title>{props.movie.title} | Geon Store</title>
    </Head>
    <h1>{props.movie.title}</h1>
    <p>{props.movie.description_intro}</p>
  </div>
);

export default withRouter(Movie);
