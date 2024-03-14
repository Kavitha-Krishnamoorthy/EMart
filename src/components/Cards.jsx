/* eslint-disable no-unused-vars */
import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these products!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              //src='images/img-9.jpg'
              text='Stay ahead of the trends with our stylish collection of clothing, shoes, and accessories for men, women, and kids.'
              label='Fashion & Apparel'
              path='/services'
            />
            <CardItem
              //src='images/img-2.jpg'
              text='Explore our cutting-edge gadgets, from smartphones to laptops, ensuring you stay connected and productive in the digital age'
              label='Electronics'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              //src='images/img-3.jpg'
              text='Pamper yourself with our selection of skincare, haircare, and makeup products, crafted to enhance your natural beauty and well-being'
              label='Beauty & Personal Care'
              path='/services'
            />
            <CardItem
             // src='images/img-4.jpg'
              text=' Prioritize your health and vitality with our assortment of vitamins, supplements, and fitness equipment, promoting a balanced lifestyle'
              label='Health & Wellness'
              path='/products'
            />
          
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;