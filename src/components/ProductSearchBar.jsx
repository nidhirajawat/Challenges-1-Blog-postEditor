import React, { useState } from "react";

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Headphones" },
  { id: 4, name: "Monitor" },
  { id: 5, name: "Keyboard" },
];

const ProductSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Product Search</h1>
      <input
        type="text"
        placeholder="Search for a product..."
        className="w-full p-2 border border-gray-300 rounded mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="list-disc list-inside">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <li key={product.id} className="text-gray-800">
              {product.name}
            </li>
          ))
        ) : (
          <p className="text-gray-600">No products found.</p>
        )}
      </ul>
    </div>
  );
};

export default ProductSearchBar;
