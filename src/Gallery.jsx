import React from "react";
import axios from "axios";

import { useGlobalContext } from "./Context";
import { useQuery } from "@tanstack/react-query";

const url = `https://api.unsplash.com/search/photos/?client_id=${import.meta.env.VITE_API_KEY }`;
//Make sure your environment variable (API_KEY) is correctly defined in a .env file, and its name should match exactly (VITE_API_KEY for Vite, since Vite automatically prefixes environment variables with VITE_). So, import.meta.env.VITE_API_KEY would replace import.meta.env.API_KEY.

const Gallery = () => {
  const { searchTerm } = useGlobalContext();

  const response = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);

      return result.data;
    },
  });

  if (response.isLoading) {
    return (
      <section>
        <h4>Loading....</h4>
      </section>
    );
  }
  if (response.isError) {
    return (
      <section className="image-container">
        <h4>There was an error</h4>
      </section>
    );
  }

  const results = response.data.results;
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found</h4>
      </section>
    );
  }
  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img src={url} alt={item.description} key={item.id} className="img" />
        );
      })}
    </section>
  );
};

export default Gallery;

// useQuery is an alternative for useeffect to use useQuery we need to wrape it to the entire application i.e App in main.js similar to context api
// querkey same like dependency in useeffect and queryfn same like fn in useeffect