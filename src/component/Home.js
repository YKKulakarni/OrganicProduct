import React from 'react'
import homeBanner from '../asset/Images/OrganicProduct.jpg'
import Owl from './Owl';
import FeaturedProduct from './FeaturedProduct';
import Category from './Category';
import BestSeller from './BestSeller';
import SecondaryNav from './SecondaryNav';
import Nav from './Nav'
import RecentBlog from './RecentBlog';

function Home() {
  return (
    <>
      <Nav />
      <SecondaryNav />
      <div className='home'>
      <img src={homeBanner} alt="Organic products banner" loading='lazy' />
        <div className="home-text">
          <h4>Its All Organic & Natural Here</h4>
          <p className='primary-para'>Organic Products</p>
          <h2 className='secondary-heading'>for a better world</h2>
          <button>Read More</button>
        </div>
      </div>
      <Owl />
      <FeaturedProduct />
      <Category />
      <BestSeller />
      <RecentBlog />
    </>
  )
}

export default Home
