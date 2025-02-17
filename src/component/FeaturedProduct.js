import React, { useState, memo, useEffect } from 'react';
import titleLine from '../asset/Images/title_line.png';
import OwlCarousel from 'react-owl-carousel3';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { RiShoppingBag3Line } from "react-icons/ri";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";

const options = {
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    items: 4,
    dots: true,
    center: false,
    autoWidth: false
};

const vegetables = [
    { id: 1, image: require('../asset/Images/featured_veg-1.png'), title: "Tomato", category: "Vegetables", rating: 4.5, price: 30.00 },
    { id: 2, image: require('../asset/Images/featured_veg-2.png'), title: "Onion", category: "Vegetable", rating: 5.0, price: 50.00 },
    { id: 3, image: require('../asset/Images/featured_veg-3.png'), title: "Brinjal", category: "Vegetables", rating: 4.0, price: 100.00 },
    { id: 4, image: require('../asset/Images/featured_veg-4.png'), title: "Cabbage", category: "Vegetables", rating: 5.0, price: 80.00 },
    { id: 5, image: require('../asset/Images/featured_veg-5.png'), title: "Broccoli", category: "Vegetables", rating: 5.0, price: 150.00 },
    { id: 6, image: require('../asset/Images/featured_veg-6.png'), title: "Cauliflower", category: "Vegetables", rating: 4.9, price: 100.00 },
    { id: 7, image: require('../asset/Images/featured_veg-7.png'), title: "Cucumber", category: "Vegetables", rating: 4.7, price: 100.00 }
];

const FeaturedProduct = memo(() => {
    const [addedItems, setAddedItems] = useState(() => {
        const savedItems = localStorage.getItem("addedItems");
        return savedItems ? JSON.parse(savedItems) : {};
    });
    useEffect(() => {
        localStorage.setItem("addedItems", JSON.stringify(addedItems));
    }, [addedItems]);

    const handleCartText = (itemId, e) => {
        e.preventDefault(); //prevent unncessary page loading
        setAddedItems(prev => ({ ...prev, [itemId]: !prev[itemId] }));
    };

    return (
        <div className='featured sub-featured'>
            <h2>Featured Product</h2>
            <img src={titleLine} alt="" />
            <OwlCarousel className="owl-theme" {...options}>
                {
                    vegetables.map((item) => (
                        <div key={item.id} className='featured-veg'>
                            <div className="rating">
                                <FaRegStar style={{ color: 'goldenrod' }} /> {item.rating}
                            </div>
                            <img src={item.image} alt={item.title} loading="lazy" />
                            <div className="featured-info">
                                <div className="info-text">
                                    <h4>{item.title}</h4>
                                    <p>{item.category}</p>
                                </div>
                                <div className="info-price">
                                    &#8377;{item.price}
                                </div>
                            </div>
                            <a href="/" onClick={(e) => handleCartText(item.id, e)}>
                                {addedItems[item.id] ? <IoBagCheckOutline /> : <RiShoppingBag3Line />} &nbsp;
                                {addedItems[item.id] ? "Added" : "Add to Cart"}
                            </a>
                        </div>
                    ))
                }
            </OwlCarousel>
        </div>
    );
});

export default FeaturedProduct;
