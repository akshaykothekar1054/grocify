import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import ProductList from '../ProductList/ProductList';
import Cards from '../Cards/Cards';
import Button from '../Button/Button';

const Products = () => {

    const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood'];
    const [activeTab, setActiveTab] = useState('All');

    let filteredItems = activeTab === 'All' ? ProductList : ProductList.filter(item=>item.category === activeTab)

    // for rendering card in products
    const renderCard = filteredItems.slice(0,8).map(product => {
        return (
            <Cards image={product.image} name={product.name} price={product.price} />
        )
    })

    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-10 py-20'>
                <Heading highlight="Our" content="Products" />

                {/* tabs */}
                <div className='flex gap-3 justify-center mt-10'>
                    {
                        categories.map(category => {
                            return (
                                <button key={category} className={`md:px-5 px-3 md:py-2 py-2 md:text-lg text-sm rounded-lg cursor-pointer ${activeTab == category ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white' : 'bg-zinc-100'}`}
                                    onClick={() => setActiveTab(category)}
                                >
                                    {category}
                                </button>
                            )
                        })
                    }
                </div>

                {/* product listing */}
                <div className='grid md:grid-cols-4 grid-cols-2 gap-9 mt-10'>
                    {renderCard}
                </div>

                <div className='mt-10 flex justify-center'>
                    <Button content="View All"/>
                </div>


            </div>
        </section>
    )
}

export default Products