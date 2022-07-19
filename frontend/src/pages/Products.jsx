import React from 'react'
import '../styles/products.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import productsActions from '../redux/actions/productsActions'

export default function Products() {

  const categories = [{name:"sustainable", img:"https://www.sme-news.co.uk/wp-content/uploads/2020/10/sustainable-products-1024x576.jpg"}, {name: "renewable",img:"https://massachusetts.revolusun.com/wp-content/uploads/sites/2/2018/06/PowerGreen-15000Mah-Solar-Power-Bank-Portable-Solar-Phone-Battery-Charger-External-Power-Pack-for-LG-Phones-1.jpg"}, {name:""}]

  const [age, setAge] = React.useState('');
  const [products, setProducts] = useState()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(productsActions.getProducts())
    .then( res => console.log(res))
  }, [])
  useEffect(() => {
    dispatch(productsActions.getOneProduct("62d6d52d9433ab6ff829ccf1"))
    .then( res => console.log(res))
  }, [])
  
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className='p-0 mr-0 flex flex-col h-[100vh] bg-white'>
      <div className="upper-box bg-slate-100 flex justify-center m-0 p-4 px-5">
        <div className='input-search'>
          <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="search" id="default-search" className="min-w-[18rem] block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by product..." />

          </div>
        </div>

      </div>

      <div className="lower-box p-0 m-0 flex grow">

        <div className="products-box bg-white grow">
            <div className="category flex justify-evenly items-center">
              <div className="img-box flex flex-col items-center">
                <img className="rounded-full h-[7rem] w-[7rem] my-2" src='https://www.sme-news.co.uk/wp-content/uploads/2020/10/sustainable-products-1024x576.jpg'></img>
                <p className='my-1'>for him</p>
              </div>
              <div className="img-box flex flex-col items-center">
                <img className="rounded-full h-[7rem] w-[7rem] my-2" src='https://massachusetts.revolusun.com/wp-content/uploads/sites/2/2018/06/PowerGreen-15000Mah-Solar-Power-Bank-Portable-Solar-Phone-Battery-Charger-External-Power-Pack-for-LG-Phones-1.jpg'></img>
                <p className='my-1'>for him</p>
              </div>
              <div className="img-box flex flex-col items-center">
                <img className="rounded-full h-[7rem] w-[7rem] my-2" src='https://www.sme-news.co.uk/wp-content/uploads/2020/10/sustainable-products-1024x576.jpg'></img>
                <p className='my-1'>for him</p>
              </div>
              <div className="img-box flex flex-col items-center">
                <img className="rounded-full h-[7rem] w-[7rem] my-2" src='https://www.sme-news.co.uk/wp-content/uploads/2020/10/sustainable-products-1024x576.jpg'></img>
                <p className='my-1'>for him</p>
              </div>
              <div className="img-box flex flex-col items-center">
                <img className="rounded-full h-[7rem] w-[7rem] my-2" src='https://www.sme-news.co.uk/wp-content/uploads/2020/10/sustainable-products-1024x576.jpg'></img>
                <p className='my-1'>for him</p>
              </div>
              <div className="img-box flex flex-col items-center">
                <img className="rounded-full h-[7rem] w-[7rem] my-2" src='https://www.sme-news.co.uk/wp-content/uploads/2020/10/sustainable-products-1024x576.jpg'></img>
                <p className='my-1'>for him</p>
              </div>
            </div>

        </div>

      </div>
    </div>
  )
}
