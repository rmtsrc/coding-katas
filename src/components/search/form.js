import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ search }) => (
  <div className="App">
    <div className="w-full max-w-md">
      <form action="" className="px-8 py-8 pt-8">
        <div className="px-4 pb-4">
          <label htmlFor="username" className="text-xl block font-bold pb-2">
            Search for a GitHub username
          </label>
          <input
            type="username"
            name="username"
            id="username"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
            placeholder={search}
          />
        </div>
        <div className="px-4 pb-4">
          <input
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            value="Search"
          />
        </div>
      </form>
    </div>
  </div>
);

SearchForm.propTypes = {
  search: PropTypes.string.isRequired
};

export default SearchForm;
