import React, { useState, useContext, useEffect, useMemo } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { search, setSearch, showSearch, setshowSearch, products } =
    useContext(ShopContext);

  const [sortOption, setsortOption] = useState("");
  const [selectedCategories, setSelectedCategories] = useState({
    Men: false,
    Women: false,
    Kids: false,
  });
  const [selectedTypes, setSelectedTypes] = useState({
    Topwear: false,
    Bottomwear: false,
    Winterwear: false,
  });
  //prev here is the object making copy of prev, changing category specific
  const HandleCategory = (category) => {
    setSelectedCategories((prev) => {
      return { ...prev, [category]: !prev[category] };
    });
  };

  const HandleTypes = (types) => {
    setSelectedTypes((prev) => ({
      ...prev,
      [types]: !prev[types],
    }));
  };
  //.some() → Checks if at least one value is true.
  //Object.entries() → Helps loop over keys and values of an object.
  const filtering = useMemo(() => {
    const hasCategorySelected = Object.values(selectedCategories).some(
      (value) => value
    );
    const hasTypeSelected = Object.values(selectedTypes).some((value) => value);

    if (!hasCategorySelected && !hasTypeSelected) return products; // Return all products if nothing is selected

    return products.filter((item) => {
      const hasCategory = Object.entries(selectedCategories).some(
        ([key, value]) => value && item.category === key
      );
      const hasType = Object.entries(selectedTypes).some(
        ([key, value]) => value && item.subCategory === key
      );
      // If both category & type are selected  match both
      if (hasCategorySelected && hasTypeSelected) return hasCategory && hasType;

      // If only category is selected  match category
      if (hasCategorySelected) return hasCategory;

      // If only type is selected  match type
      if (hasTypeSelected) return hasType;
    });
  }, [products, selectedCategories, selectedTypes]);

  const sortedProducts = useMemo(() => {
    {
      /*useMemo for sorting Ensures sorting runs only when needed, improving performance */
    }
    if (sortOption === "lowhigh") {
      return [...filtering].sort((a, b) => a.price - b.price);
    }
    if (sortOption === "highlow") {
      return [...filtering].sort((a, b) => b.price - a.price);
    }
    return filtering;
  }, [filtering, sortOption]);

  const searchedProducts = useMemo(() => {
    return sortedProducts.filter((item) => {
      const searchMatch = item.name.toLowerCase().replace(/\s/g, "");
      return searchMatch.includes(search.toLowerCase().replace(/\s/g, ""));
    });
  }, [sortedProducts, search]);

  return (
    <div className="flex flex-col sm:flex-row  gap-1 sm:gap-10 pt-10">
      {/*Filters*/}
      <div className="ml-24 mr-3 min-w-60 ">
        <p className="my-2 text-xl flex items-center cursor-pointer gap-2 ">
          FILTERS
        </p>
        {/* Categories*/}
        <div className="mt-6 border-2 px-6 py-4 ">
          <p className="text-sm font-medium">CATEGORIES</p>
          <ul className="space-y-2 pt-2 text-sm text-gray-700">
            <li>
              <label htmlFor="Men">
                <input
                  type="checkbox"
                  id="Men"
                  className="mr-2"
                  checked={selectedCategories["Men"]}
                  onChange={() => HandleCategory("Men")}
                />
                Men
              </label>
            </li>
            <li>
              <label htmlFor="Women">
                <input
                  type="checkbox"
                  id="Women"
                  className="mr-2"
                  checked={selectedCategories["Women"]}
                  onChange={() => HandleCategory("Women")}
                />
                Women
              </label>
            </li>
            <li>
              <label htmlFor="Kids">
                <input
                  type="checkbox"
                  id="Kids"
                  className="mr-2"
                  checked={selectedCategories["Kids"]}
                  onChange={() => HandleCategory("Kids")}
                />
                kids
              </label>
            </li>
          </ul>
        </div>

        {/*Bottom,top*/}
        <div className="mt-4 border-2 px-6 py-4">
          <p className="text-sm font-medium">TYPE</p>
          <ul className="space-y-2 pt-2 text-sm text-gray-700">
            <li>
              <label htmlFor="Topwear">
                <input
                  type="checkbox"
                  id="Topwear"
                  className="mr-2"
                  checked={selectedTypes["Topwear"]}
                  onChange={() => HandleTypes("Topwear")}
                />
                Topwear
              </label>
            </li>
            <li>
              <label htmlFor="Bottomwear">
                <input
                  type="checkbox"
                  id="Bottomwear"
                  className="mr-2"
                  checked={selectedTypes["Bottomwear"]}
                  onChange={() => HandleTypes("Bottomwear")}
                />
                Bottomwear
              </label>
            </li>
            <li>
              <label htmlFor="Winterwear">
                <input
                  type="checkbox"
                  id="Winterwear"
                  className="mr-2"
                  checked={selectedTypes["Winterwear"]}
                  onChange={() => HandleTypes("Winterwear")}
                />
                Winterwear
              </label>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-2xl w-full">
        <div className="flex justify-between mr-24 mb-4">
          <Title text1={"All"} text2={"Collections"} />
          <select
            className="text-sm border-gray-500 border rounded-sm"
            value={sortOption}
            onChange={(e) => setsortOption(e.target.value)}
          >
            <option value="">Sort by: Relevance</option>
            <option value="lowhigh">Sort by: Low to high</option>
            <option value="highlow">Sort by: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-6 mr-24">
          {/*Rendering all products{array.map(...)} → Loop over an array
           <Component /> → Render each item
            key={index} → Unique key (for React optimization)
            prop={item.value} → Passing data*/}
          {searchedProducts.map((item, index) => (
            <ProductItem
              key={item._id}
              name={item.name}
              id={item._id}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
