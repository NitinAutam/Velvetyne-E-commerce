import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Collection = () => {
  const { products } = useContext(ShopContext);

  return (
    <div className="flex flex-col sm:flex-row  gap-1 sm:gap-10 pt-10 border-t">
      {/*Filters*/}
      <div className="mx-24 min-w-60 ">
        <p className="my-2 text-xl flex items-center cursor-pointer gap-2 ">
          FILTERS
        </p>

        <div className="mt-6 border-2 px-6 py-4 ">
          <p className="text-sm font-medium">CATEGORIES</p>
          <ul className="space-y-2 pt-2 text-sm text-gray-700">
            <li>
              <label htmlFor="Men">
                <input type="checkbox" id="Men" className="mr-2" />
                Men
              </label>
            </li>
            <li>
              <label htmlFor="Women">
                <input type="checkbox" id="Women" className="mr-2" />
                Women
              </label>
            </li>
            <li>
              <label htmlFor="Kid">
                <input type="checkbox" id="Kid" className="mr-2" />
                Kid
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
                <input type="checkbox" id="Topwear" className="mr-2" />
                Topwear
              </label>
            </li>
            <li>
              <label htmlFor="Bottomwear">
                <input type="checkbox" id="Bottomwear" className="mr-2" />
                Bottomwear
              </label>
            </li>
            <li>
              <label htmlFor="Winterwear">
                <input type="checkbox" id="Winterwear" className="mr-2" />
                Winterwear
              </label>
            </li>
          </ul>
        </div>
      </div>

      <div className="">

      </div>
    </div>
  );
};

export default Collection;
