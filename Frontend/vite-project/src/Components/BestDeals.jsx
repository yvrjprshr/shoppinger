import React, { useState } from 'react'
import { useEffect } from 'react'
import { productData } from '../Static/data'
import styles from '../Styles/styles'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'
const BestDeals = () => {
    const [data, setData] = useState([])
    const { allProducts } = useSelector((state) => state.product)
    useEffect(() => {
        const allProductsData = allProducts ? [...allProducts] : [];
        const sortedData = allProductsData?.sort((a, b) => b.sold_out - a.sold_out);
        const firstFive = sortedData && sortedData.slice(0, 5);
        setData(firstFive);
    }, [])
    // console.log(allProduct)
    return (
        <div>
            <div className={`${styles.section}`}>
                <div className={`${styles.heading}`}>
                    <h1>Best Deals</h1>
                </div>
                <div className='grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0'>
                    {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
                </div>
            </div>
        </div>
    )
}

export default BestDeals