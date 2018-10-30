import Head from "next/head";
import Link from "next/link";

export default () => (
  <div>
    <h1>Hello from index</h1>
    <Link href={"/about"}>
      <a>About page</a>
    </Link>
  </div>
);
