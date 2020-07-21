import React from "react";
import Layout from "../../components/layout/Layout";

import { GroundFactories } from "../../components/LifePlastic/GroundFactories";
import { SkyFactories } from "../../components/LifePlastic/SkyFactories";
import { Bins } from "../../components/LifePlastic/Bins";
import { Routes } from "../../components/LifePlastic/Routes";
import { GroundPipesBackground } from "../../components/LifePlastic/GroundPipesBackground";
import { GroundPipesForeground } from "../../components/LifePlastic/GroundPipesForeground";
import { SkyPipesBackground } from "../../components/LifePlastic/SkyPipesBackground";
import { SkyPipesForeground } from "../../components/LifePlastic/SkyPipesForeground";
import { Processes } from "../../components/LifePlastic/Processes";

const Experiment009: React.FC = () => {
  return (
    <Layout title="Experiment | 009">
      <h2>009 - Importing the Plastic Illistration </h2>
      <h4>Date: June 16th 2020</h4>
      <p>
        After a week of sketching and many many iterations i'm finally ready to
        impliment the SVG base for the Life of Plastic Data Visualization. I've
        split up all the SVG's into several Typescript components to help with
        organizing and later customizing them.
      </p>
      <p>
        First challenge is figuring out how to get the SVG to load on this page.
        Something with Typescript is creating problems importing the JSX. And
        ofcourse it turns out that I forgot to capitalize the component.
      </p>
      <div>
        <GroundFactories />
        <SkyFactories />
        <Bins />
        <Routes />
        <GroundPipesBackground />
        <GroundPipesForeground />
        <SkyPipesBackground />
        <SkyPipesForeground />
        <Processes />
      </div>
    </Layout>
  );
};

export default Experiment009;
