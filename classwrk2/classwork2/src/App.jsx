import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './components/Product'

export default function App() {
  const products = [
    {
      title:"Laptop",
      price:9901,
      inStock:true,
      description:"Powerful laptop for work and study",
      rating:4,
      tags:["New","Sale"],
    },
    {
      title:"Samrtphone",
      price:120000,
      inStock:true,
      description:"Latest smartphone with a clear display",
      rating:3,
      tags:["Sale"],
    },
    {
      title:"Headphone",
      price:30000,
      inStock:false,
      description:"Wireless headphones with noise cancelling",
      rating:5,
      tags:["Popular"],
    },
  ];
  return (
    <div>
      <h1>List of products</h1>
      <div style = {{display: "flex",gap:"20px"}}>
        {products.map((product,index)=>
        (
          <Product key={index}
          {...product} />
        ))}
      </div>
    </div>
  );
}