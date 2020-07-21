import React from "react";
import { useFormik } from "formik";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  connectAutoComplete,
  Configure,
} from "react-instantsearch-dom";
import { components, OptionProps } from "react-select";
import AsyncSelect from "react-select/async";
import Layout from "../../components/layout/Layout";

const searchClient = algoliasearch(
  "7IQ427UHJY",
  "14257128a2c97aae21c06e9eb82d889f"
);
const index = searchClient.initIndex("mimirSpecies");

const Experiment016 = () => {
  const [species, setSpecies] = React.useState<string>("");
  const formik = useFormik({
    initialValues: { plantName: "", speciesId: "" },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const promiseOptions = async (inputValue: string) => {
    const resp = await index.search(inputValue).then(({ hits }) => hits);
    const result = await Object.values(resp).map((item: any) => ({
      label: item.display_pid,
      value: item.pid,
      image: item.image,
    }));
    console.log(result);
    return result;
  };

  const CustomOption = (props: OptionProps<any>) => {
    const { data } = props;
    return (
      <components.Option {...props}>
        <img style={{ width: 30 }} src={data.image} />
        {data.label}test
      </components.Option>
    );
  };
  return (
    <Layout title="Experiment | 016">
      <h2>016 - Autocomplete Species w/ Algolia</h2>
      <h4>Date: June 29th 2020</h4>
      <p>
        One of my side projects currently involves building a large registration
        system that includes linking plants that people own with the species.
        Both are stored in seperate databases and linked using IDs and graphQL.
        My current challenge is to make the registration form for the plants
        that has an autocomplete search function for the species. Currently I'm
        trying to use Algolia and its React-InstantSearch to create this effect,
        and while I can get it to search and display the results of my database,
        i"m currently stuck trying to link this data into my Formik form.
      </p>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="plantName">Plant Name</label>
        <input
          id="plantName"
          name="plantName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.plantName}
        />
        <label htmlFor="speciesId">Species Name</label>
        <input
          id="speciesId"
          name="speciesId"
          type="text"
          onChange={formik.handleChange}
          value={species}
        />
        <InstantSearch
          indexName="mimirSpecies"
          searchClient={searchClient}
          onSearchStateChange={(ref) => setSpecies(ref.query)}
        >
          <AutoSuggest />
          <Configure hitsPerPage={4} />
        </InstantSearch>
        <button type="submit">Submit</button>
      </form>
      <hr />
      <p>
        So after some more experimenting, I've been suggested to try
        react-select. Hopefully this will be a bit cleaner and get what I want.
      </p>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="plantName">Plant Name</label>
          <input
            id="plantName"
            name="plantName"
            placeholder="Name Plant..."
            type="text"
            onChange={formik.handleChange}
            value={formik.values.plantName}
          />
        </div>
        <AsyncSelect
          cacheOptions
          components={{ Option: CustomOption }}
          loadOptions={promiseOptions}
          onChange={(option) => formik.setFieldValue("speciesId", option.value)}
          placeholder="Select Species..."
        />
        <button type="submit">Submit</button>
      </form>
      <hr />
      <p>
        Success! I now have a searchable bar which will update a Formik form 😎
        The trick to this was to the create an Async Select using React-Select
        and then populate the options using a callback to the algolia index
        using algoliasearch.js. During the callback function, I could shape the
        hits to match react-select as well as add additional information such as
        the image. Then back in the AsyncSelect I could make a custom options
        that showed the image alongside the selections. Perfect!
      </p>
    </Layout>
  );
};

export default Experiment016;

const AutoSuggest = connectAutoComplete(
  ({ currentRefinement, hits, refine }) => {
    return (
      <div>
        <ul>
          <li>
            <input
              value={currentRefinement}
              name="speciesId"
              onChange={(event) => {
                console.log();
                refine(event.currentTarget.value);
              }}
            />
          </li>
          {hits.map((i) => (
            <li onClick={() => refine(i.pid)}>
              <img style={{ width: 50 }} src={i.image} alt={i.display_pid} />
              {i.pid}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);
