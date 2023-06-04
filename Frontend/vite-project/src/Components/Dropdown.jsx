import React from 'react'
import styles from '../Styles/styles'
import { useNavigate } from 'react-router-dom'
const Dropdown = ({ categoriesData, setDropDown }) => {
    const navigate = useNavigate()
    const submitHandler = (i) => {
        navigate(`/products?category=${i.title}`)
        setDropDown(false)
        window.location.reload()
    }
    return (
        <div className='pb-4 w-[270px] bg-[#fff] absolute z-30 rounded-b-md shadow-sm'>
            {
                categoriesData && categoriesData.map((i, index) => (
                    <div key={index} className={`${styles.noramlFlex}`} onClick={() => submitHandler(i)}>
                        <img src={i.image_Url}
                            style={{
                                width: "25px",
                                height: "25px",
                                objectFit: "contain",
                                marginLeft: "10px",
                                userSelect: "none",
                            }} />
                        <h3 className='m-3 cursor-pointer select-none'>{i.title}</h3>
                    </div>

                ))
            }
        </div>
    )
}

export default Dropdown