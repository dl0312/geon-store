import Head from "next/head";
import withLayout from "../lib/withLayout";
import PostLink from "../components/PostLink";

const Index = () => (
  <div>
    <Head>
      <title>Home | Geon Store</title>
    </Head>
    <h1>Hello from index</h1>
    <ul>
      <li>
        <PostLink title={"something"} />
      </li>
      <li>
        <PostLink title={"something else"} />
      </li>
    </ul>
  </div>
);

export default withLayout(Index);
