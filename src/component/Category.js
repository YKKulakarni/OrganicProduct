import React from 'react'
import titleLine from '../asset/Images/title_line.png'
import categoryFruit from '../asset/Images/category1.png'
import categoryVegs from '../asset/Images/category2.png'
import categoryBeverages from '../asset/Images/category3.png'
import categoryDairy from '../asset/Images/category4.png'
import categoryPackedFood from '../asset/Images/category5.png'
import categoryHealthFitness from '../asset/Images/category6.png'

const allCategory = [
  {
    icon: categoryFruit,
    title: 'Fruits',
    desc: 'Fresh, pesticide-free fruits cultivated through natural farming practices for healthier living.'
  },
  {
    icon: categoryVegs,
    title: 'Vegetables',
    desc: 'cultivated naturally, free from chemicals, offering a wholesome.'
  },
  {
    icon: categoryBeverages,
    title: 'Beverages',
    desc: 'A wide variety of drinks, from refreshing sodas to nourishing teas and juices.'
  },
  {
    icon: categoryDairy,
    title: 'Dairy',
    desc: 'Milk, cheese, yogurt, and dairy products, provides essential nutrients and a rich, creamy taste.'
  },
  {
    icon: categoryPackedFood,
    title: 'Packed Food',
    desc: 'ready-to-eat or easy-to-prepare meals and snacks, offering both comfort and long shelf life.'
  },
  {
    icon: categoryHealthFitness,
    title: 'Health & Fittness',
    desc: 'supplements and protein powders to workout gear and wellness essentials.'
  }
]
function Category() {
  return (
    <div className='category'>
      <h2>Categories</h2>
      <img src={titleLine} alt="Category Banner" loading='lazy' />
      <div className='all-category'>
        {
          allCategory.map((item,index) => {
            return (
              <div className="card" key={index}>
                <img src={item.icon} alt="" />
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Category
