import React from "react";

type Product = {
  id: string;
  pName: string;
  color: string;
  category: string;
  price: number;
};

const PorductList = (props: Product) => {
  const { pName, color, category, price } = props;
  return (
    <div className="px-20">
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Product name
              </th>
              <th scope="col" className="py-3 px-6">
                Color
              </th>
              <th scope="col" className="py-3 px-6">
                Category
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {pName}
              </th>
              <td className="py-4 px-6">{color}</td>
              <td className="py-4 px-6">{category}</td>
              <td className="py-4 px-6">${price}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PorductList;
