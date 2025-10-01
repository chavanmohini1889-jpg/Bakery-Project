import React from 'react';

const category = [
  {
    name: 'Cakes',
    img: 'https://theovenchef.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-11-01-at-5.39.28-PM-1-scaled-e1698841246352.jpeg',
  },
  {
    name: 'Breads',
    img: 'https://www.foodandwine.com/thmb/Z2AE53BGYP2U-kXhtbVwXZQX8sc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Perfect-Sandwich-Bread-FT-RECIPE0723-dace53e15a304942acbc880b0ae34f5a.jpg',
  },
  {
    name: 'Pastries',
    img: 'https://j6e2i8c9.delivery.rocketcdn.me/wp-content/uploads/2021/05/Eggless-Black-forest-Pastry-recipe-1.jpg',
  },
  {
    name: 'Cookies',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToyHbQK6rJqXqUCeP_mXRc7xcs1tXcUnIrLw&s',
  },
  {
    name: 'Muffins',
    img: 'https://sugargeekshow.com/wp-content/uploads/2019/10/chocolate-chip-muffins-featured.jpg',
  },
];

const Categories = () => {
  return (
    <div className="p-6 bg-red-300">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Bakery Categories</h2>
      <div className="flex flex-wrap gap-6 ml-52">
        {category.map((category, index) => (
          <div
            key={index}
            className="text-center w-[150px] flex-shrink-0 transition hover:scale-105"
          >
            <img
              src={category.img}
              alt={category.name}
              className="w-full h-[100px] object-cover rounded-md border border-gray-300 shadow-sm"
            />
            <p className="mt-2 text-gray-700 font-medium">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
