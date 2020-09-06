import React, { useState } from 'react';
import { BehaviorSubject, from } from 'rxjs';
import {
  distinctUntilChanged,
  filter,
  debounceTime,
  mergeMap,
} from 'rxjs/operators';
import Layout from '../../components/layout/Layout';
import {
  H2,
  H4,
  Content,
  H3,
  LinenPaper,
} from '../../components/layout/StyledLayoutComponents';
import useObservable from '../../components/helpers/useObservable';

const getPokemonByName = async (name: string) => {
  const { results: allPokemon } = await fetch(
    'https://pokeapi.co/api/v2/pokemon/?limit=10000'
  ).then((res) => res.json());
  return allPokemon.filter((i: any) => i.name.includes(name));
};

let searchSubject = new BehaviorSubject('');
let searchResultObservable = searchSubject.pipe(
  filter((val) => val.length > 2),
  debounceTime(750),
  distinctUntilChanged(),
  mergeMap((v) => from(getPokemonByName(v)))
);

const Experiment021 = () => {
  const [search, setSearch] = useState<string>();
  const [results, setResults] = useState<Array<any>>([]);

  useObservable(searchResultObservable, setResults);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearch(newValue);
    searchSubject.next(newValue);
  };
  return (
    <Layout
      title='Experiment 021'
      description='Coding task for a Frontend Dev Position.  Creating an App in 90min based on task contraints.'
      currentURL='/experiment/021'
    >
      <H2>021 - RxJS, Firestore and D3</H2>
      <H4>Date: Sept 6th 2020</H4>
      <Content>
        In this little experiment, I want to create a D3 chart using data from a
        Firebase project I'm working on, but do it using RxJS so that the data
        is updated in realtime, but without calling all the values at ones. The
        problem I've been having is that when I am calling the component before
        using GraphQL it would re-read all the documents I was querying,
        resulting in massive document reads. Instead I would like to call them
        once at the begining and then listen for when new values are added and
        then update the chart.
      </Content>
      <H3 style={{ textAlign: 'left' }}>RxJS in React (w/Hooks)</H3>
      <Content>
        Following a simple tutorial, lets stick together a simple autocomplete
        search funtion. This should take in an input and then list possible
        results:
      </Content>
      <Content
        style={{
          background: LinenPaper,
          padding: '2em',
          borderRadius: '20px',
          boxShadow: '0px 4px 8px rgba(0,0,0,.15)',
        }}
      >
        <H4>Search Pokemon Name:</H4>
        <input
          type='text'
          placeholder='Search...'
          value={search}
          onChange={handleSearchChange}
        />
        <H4>Matching Pokemon:</H4>
        <pre>{JSON.stringify(results, null, 2)}</pre>
      </Content>
      <Content>
        With that done, its now time to look at how to get infomation from
        Firestore. What I want to have is a list off all the readings for a
        certain device which will update when a new reading comes in.
      </Content>
    </Layout>
  );
};

export default Experiment021;
