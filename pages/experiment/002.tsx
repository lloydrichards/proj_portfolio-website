import React from 'react';
import Fetch from 'isomorphic-unfetch';
import Layout from '../../components/layout/Layout';
import { NextPage } from 'next';

type Props = {
  current: any;
  hourly: any;
};

const Experiment002: NextPage<Props> = (props) => {
  return (
    <Layout title='Experiment | 002'>
      <h2>001 - Working with API's</h2>
      <p>The current temperature is {props.current.temp}</p>
      <div></div>
    </Layout>
  );
};

Experiment002.getInitialProps = async function () {
  const res = await Fetch(
    'https://api.openweathermap.org/data/2.5/onecall?lat=47.3769&lon=8.5417&units=metric&exclude=daily&appid=02f471c66896a92cf74995432fba9e3c'
  );
  const data = await res.json();

  return {
    current: data.current,
    hourly: data.hourly,
  };
};
export default Experiment002;
