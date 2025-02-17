import React from 'react'
import titleLine from '../asset/Images/title_line.png'

const allBlogs = [
    {
        image : require("../asset/Images/latest-news1.png"),
        title : "Embrace Nature: The Benefits of Choosing Organic Products for a Healthier Life",
        admin : 'Yalaguresh',
        desc : 'Discover the transformative benefits of organic products and how they contribute to a healthier, more sustainable lifestyle. Embrace nature’s purity for a cleaner, toxin-free way of living.'
    },
    {
        image : require("../asset/Images/latest-news2.png"),
        title : "Going Green: Why Organic Products Are the Key to a Sustainable Future",
        admin : 'Yalaguresh',
        desc : 'Explore how choosing organic products can reduce environmental impact and promote sustainability. Going green is not just a trend—it’s a step towards a healthier planet and future.'
    },
    {
        image : require("../asset/Images/latest-news3.png"),
        title : "Pure and Simple: Discover the Power of Organic Products for Your Lifestyle",
        admin : 'Yalaguresh',
        desc : 'Uncover the simplicity and purity of organic products, and how they can enhance your daily life. Make the switch to a healthier, more natural way of living with ease.'
    },
    {
        image : require("../asset/Images/latest-news4.png"),
        title : "From Farm to Table: The Rise of Organic Products and Their Impact on Your Health",
        admin : 'Yalaguresh',
        desc : 'Explore the journey of organic products from farm to table and how they positively impact your health. Discover the difference that fresh, chemical-free food can make in your well-being.'
    }
]

function RecentBlog() {
  return (
    <div className='recentBlog'>
      <h2 className='primary-heading'>Recent Blog</h2>
      <img src={titleLine} alt="" loading='lazy' />
    </div>
  )
}

export default RecentBlog
