import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Home | Lloyd's Working Portfolio">
    <h1>Lloyd's Working Portfolio</h1>
    <ul>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/experiment/001">
          <a>001 - Setting Up with Next.js</a>
        </Link>
      </li>
    </ul>
  </Layout>
);

export default IndexPage;
