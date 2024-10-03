// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function ProductList() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const res = await axios.get('http://localhost:5000/api/products');
//       setProducts(res.data);
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="min-h-screen p-6 bg-gray-100">
//       <h1 className="text-3xl font-bold mb-6 text-center">Product Listing</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map(product => (
//           <div key={product.id} className="p-4 bg-white shadow-md rounded-md">
//             <img src={product.image} alt={product.title} className="w-full h-64 object-cover mb-4" />
//             <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
//             <p className="text-gray-700">${product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductList;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products');
        setProducts(res.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Function to handle profile button click
  const handleProfileClick = () => {
    navigate('/profile'); // Redirect to profile page
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">Product Listing</h1>
      <button
        onClick={handleProfileClick} // Add click handler for profile button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-4"
      >
        Go to Profile
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="p-4 bg-white shadow-md rounded-md">
            <img src={product.image} alt={product.title} className="w-full h-64 object-contain mb-4 " />
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-700">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
