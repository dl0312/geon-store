import Head from "next/head";
import withLayout from "../lib/withLayout";
import PostLink from "../components/PostLink";

export default () => (
  <div>
    <Head>
      <title>Home | Geon Store</title>
    </Head>
    <h1>Hello from index</h1>
    <ul>
      <li>
        <PostLink title={"something"} id={"0"} />
      </li>
      <li>
        <PostLink title={"something else"} id={"1"} />
      </li>
    </ul>
  </div>
);
