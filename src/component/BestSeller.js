import React from 'react'
import titleLine from '../asset/Images/title_line.png'
import OwlCarousel from 'react-owl-carousel3'
import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel/dist/assets/owl.theme.default.css"
import featuredVeg1 from '../asset/Images/featured_veg-1.png'
import featuredVeg2 from '../asset/Images/featured_veg-2.png'
import featuredVeg3 from '../asset/Images/featured_veg-3.png'
import featuredVeg4 from '../asset/Images/featured_veg-4.png'
import featuredVeg5 from '../asset/Images/featured_veg-5.png'
import featuredVeg6 from '../asset/Images/featured_veg-6.png'
import featuredVeg7 from '../asset/Images/featured_veg-7.png'
import { RiShoppingBag3Line } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa";


const options = {
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    items: 4,
    dots: true,
    nav: true,
    center: false,
    autoWidth: false
}
const vegetables = [
    {
        image: featuredVeg1,
        title: "Tomato",
        category: "Vegetables",
        rating: 4.5,
        price: 30.00
    },
    {
        image: featuredVeg2,
        title: "Onion",
        category: "Vegetable",
        rating: 5.0,
        price: 50.00
    },
    {
        image: featuredVeg3,
        title: "Brinjal",
        category: "Vegetables",
        rating: 4.0,
        price: 100.00
    },
    {
        image: featuredVeg4,
        title: "Cabbage",
        category: "Vegetables",
        rating: 5.0,
        price: 80.00
    },
    {
        image: featuredVeg5,
        title: "Broccoli",
        category: "Vegetables",
        rating: 5.0,
        price: 150.00
    },
    {
        image: featuredVeg6,
        title: "Cauliflower",
        category: "Vegetables",
        rating: 4.9,
        price: 100.00
    },
    {
        image: featuredVeg7,
        title: "Cucumber",
        category: "Vegetables",
        rating: 4.7,
        price: 100.00
    },
]

function BestSeller() {
  return (
    <div className='featured'>
            <h2>Best Seller</h2>
            <img src={titleLine} alt="" />
            <OwlCarousel className="owl-theme" {...options}>
                {
                    vegetables.map((item, index) => {
                        return (<div key={index} className='featured-veg'>
                            <div className="rating">
                            <FaRegStar style={{color : 'goldenrod', overflow :'hidden'}} />{item.rating}
                            </div>
                            <img src={item.image} alt="" />
                            <div className="featured-info">
                                <div className="info-text">
                                    <h4>{item.title}</h4>
                                    <p>{item.category}</p>
                                </div>
                                <div className="info-price">
                                    &#8377;{item.price}
                                </div>
                            </div>
                            <a href="/"><RiShoppingBag3Line /> &nbsp;add to cart</a>
                        </div>)
                    })
                }
            </OwlCarousel>
        </div>
  )
}

export default BestSeller
