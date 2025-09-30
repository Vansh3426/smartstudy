import React from 'react'


const products = [
  { id: 1, name: "Nike Air Max", price: "₹7,999", img: "https://via.placeholder.com/300" },
  { id: 2, name: "Adidas Ultraboost", price: "₹8,499", img: "https://via.placeholder.com/300" },
]
const Home1 = () => {
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map(product => (
        <div key={product.id} className="bg-white rounded-2xl shadow-md p-4">
          <img src={product.img} alt={product.name} className="w-full h-40 object-cover rounded-lg" />
          <h3 className="mt-3 font-semibold text-lg">{product.name}</h3>
          <p className="mt-2 font-bold">{product.price}</p>
          <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  )
}


export default Home1
