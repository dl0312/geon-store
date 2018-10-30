import Head from "next/head";
import { withRouter } from "next/router";
import withLayout from "../lib/withLayout";

const Post = props => (
  <div>
    <Head>
      <title>{props.router.query.title} | Geon Store</title>
    </Head>
    {JSON.stringify(props)}
    <h1>blog post</h1>
  </div>
);

export default withLayout(withRouter(Post));
