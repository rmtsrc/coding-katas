import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="w-full max-w-md bg-gray-800">
        <form action="" className=" bg-white shadow-md rounded px-8 py-8 pt-8">
          <div className="px-4 pb-4">
            <label htmlFor="username" className="text-sm block font-bold  pb-2">
              Search for a GitHub user
            </label>
            <input
              type="username"
              name="username"
              id="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
              placeholder="JohnDoe"
            />
          </div>
          <div className="px-4 pb-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
