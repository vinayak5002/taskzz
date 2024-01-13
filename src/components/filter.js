import React, { useState } from 'react';
import '../Style/filter.css';

function Filter({ filter }) {
  const [by, setBy] = useState("");
  const [query, setQuery] = useState("");

  const handleFilter = () => {
    filter(by, query);
  };

  const handleReset = () => {
    filter("", "");
  };

  return (
    <div id="filCard">
      <div>
        <label htmlFor="filterText">Search: </label>
        <input
          type="text"
          id="txt"
          name="filterText"
          onChange={(e) => setQuery(e.target.value)}
        />

        <div id='radBtns'>
          Filter by:
          <label id='radButton'>
            <input
              type="radio"
              name="filterType"
              value="name"
              onChange={() => setBy("name")}
            />
            Name
          </label>

          <label>
            <input
              type="radio"
              name="filterType"
              value="assignee"
              onChange={() => setBy("assignee")}
            />
            Assignee
          </label>
        </div>
      </div>

      <div>
        <button type="button" id='mr-l' className='btn' onClick={handleFilter}>
          Filter
        </button>
        <button type="button" className='btn' onClick={handleReset}>
          All
        </button>
      </div>
    </div>
  );
}

export default Filter;
