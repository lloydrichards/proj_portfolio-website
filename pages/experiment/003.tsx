import React, { Component } from "react";

import Layout from "../../components/Layout";

class Experiment003 extends Component {
  render() {
    return (
      <Layout title="Experiment | 003">
        <h2>003 - Working with Netlify</h2>
        <h4>Date: May 20th 2020</h4>
        <p>
          After setting up a basic website, I wanted to have it continuabously
          deploy to my domain from the Master branch. This would allow me to
          update and test features while keeping experiments and tests off to
          side branches. Using Netlify this was easy to conenct to my Github
          Repo which could then be updated with a single click.
        </p>
        <p>I created a netflify.toml file in the root directory with:</p>
        <code>
          [build] command = "npm run build && npm run export" publish = "out"
        </code>
        <p>
          With this, each time I push a commit to my Git Repo it is
          automatically updated on netlify.
        </p>

        <div></div>
      </Layout>
    );
  }
}
export default Experiment003;
