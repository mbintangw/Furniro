import React, { useState, useEffect } from 'react';
import data from '../../../data.json';
import share from '../../image/icon/share-white.svg';
import like from '../../image/icon/heart-white.svg';
import compare from '../../image/icon/compare-white.svg';


const ShuffleItems = (items) => {
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }

  return items
}
const ListProducts = ({ viewMode, itemsPerPage, sortOrder, selectedCategories }) => {
  const [products, setProducts] = useState(ShuffleItems([...data]));
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let filteredProducts = [...data];

    if (selectedCategories.length > 0 && !selectedCategories.includes('all')) {
      filteredProducts = filteredProducts.filter(product => 
        selectedCategories.some(category => product.category === category)
      );
    }

    if (sortOrder === 'asc') {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    setProducts(ShuffleItems(filteredProducts));
  }, [sortOrder, selectedCategories]);

  const totalItems = products.length;
  const itemsPerPageInt = itemsPerPage === 'all' ? totalItems : parseInt(itemsPerPage);
  const totalPages = Math.ceil(totalItems / itemsPerPageInt);
  const startIndex = (currentPage - 1) * itemsPerPageInt;
  const displayedProducts = products.slice(startIndex, startIndex + itemsPerPageInt);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='flex flex-col justify-center items-center gap-8 mt-[46px] '>
      <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-4 gap-8' : 'flex flex-col w-screen lg:w-auto  gap-10 '}>
        {displayedProducts.map((item, index) => (
          <div className={viewMode === 'grid' ? 'card-product' : 'flex flex-row w-full px-5'} key={index}>
            <img src={item.image} alt={item.name} className={viewMode === 'grid' ? '' : 'h-1/2 w-1/2 '} />
            <div className={viewMode === 'grid' ? '' : 'w-[400px] h-full ml-4 flex flex-col gap-5 px-2'}>
              <h3>{item.name}</h3>
              <p className='font-medium text-gray-500 line-clamp-1 lg:line-clamp-none'>{item['additional-information']}</p>
              <h4>Rp. {item.price}</h4>
              <div className={viewMode === 'grid' ? 'overlay' : ''}>
                <div className='flex flex-col items-center gap-6'>
                  <button className='outline outline-none'>Add to Cart</button>
                  <div className='hidden lg:flex flex-row text-white justify-center items-center gap-[10px]'>
                    <img src={share} alt='share' />
                    <p className='text-sm'>Share</p>
                    <img src={compare} alt='compare' />
                    <p>Compare</p>
                    <img src={like} alt='like' />
                    <p>Like</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-center mt-4'>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`mx-1 px-3 py-1 border rounded ${currentPage === index + 1 ? 'bg-primary text-white' : 'bg-[#F9F1E7]'}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ListProducts;
