import { useState, useEffect } from 'react';

const SearchForm = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useState('');
  const [searchOption, setSerachOption] = useState('shows');

  useEffect(() => {
    console.log('COMPONENT MOUNTS');

    // return () => {};
  }, []);

  const onSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onRadioChange = ev => {
    setSerachOption(ev.target.value);
  };

  const onSubmit = ev => {
    ev.preventDefault();
    const options = {
      q: searchStr,
      searchOption,
    };

    onSearch(options);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={searchStr} onChange={onSearchInputChange} />
      <label>
        Shows
        <input
          type="radio"
          name="search-option"
          value="shows"
          checked={searchOption === 'shows'}
          onChange={onRadioChange}
        ></input>
      </label>
      <label>
        Actors
        <input
          type="radio"
          name="search-option"
          value="actors"
          checked={searchOption === 'actors'}
          onChange={onRadioChange}
        ></input>
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
