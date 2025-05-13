import React, { useContext } from 'react';
import SearchBar from '../components/SearchBar';
import Collection from './Collection';
import { ShopContext } from '../context/ShopContext';

const SearchPage = () => {
  const { showSearch } = useContext(ShopContext);

  return (
    <div>
      {showSearch ? (
        <>
          <SearchBar />
          <Collection />
        </>
      ) : (
        <Collection />
      )}
    </div>
  );
};

export default SearchPage;
