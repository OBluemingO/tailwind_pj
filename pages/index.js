import IconCard from '@/components/Card/IconCard'
import ProductCard from '@/components/Card/ProductCard'
import clsx from 'clsx';
import Head from 'next/head'
import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { AiFillShopping } from "react-icons/ai";
import Banner from "../public/image/banner.png"
// import Ass from '../assets/banner.png'

export default function Home() {
  const [active, setActive] = useState('btn-1')
  const [data, setData] = useState([])
  const [categories, setCateGories] = useState([])
  const [pageCurrent, setPageCurrent] = useState(0)
  const [categoryId, setCategoryId] = useState(1)
  const [totalItem, setTotalItem] = useState()

  // TODO: refactor to custom hook
  const fetchProduct = useCallback(async () => {
    const dataRes = await fetch(`https://api.escuelajs.co/api/v1/products?categoryId=${categoryId}&offset=${pageCurrent}&limit=8`)
    const dataJson = await dataRes.json()
    const dataResTotal = await fetch(`https://api.escuelajs.co/api/v1/products?categoryId=${categoryId}`)
    const dataTotalJson = await dataResTotal.json()
    setData(dataJson)
    setTotalItem(dataTotalJson.length)
  }, [pageCurrent, categoryId])

  const fetchCategory = useCallback(async () => {
    const dataRes = await fetch(`https://api.escuelajs.co/api/v1/categories`)
    const dataJson = await dataRes.json()
    setCateGories(dataJson)
  }, [])

  const totalPageCount = useMemo(() => Math.ceil(totalItem / 8), [totalItem])

  useEffect(() => {

    fetchProduct()
    fetchCategory()

  }, [fetchProduct, fetchCategory])

  // const btnNewProduct = clsx(
  //   'text-white',

  // )

  const slider_looping = [
    { head: 'test1', body: 'body test', icon: <AiFillShopping size={30} /> },
    { head: 'test2', body: 'body test', icon: <AiFillShopping size={30} /> },
    { head: 'test3', body: 'body test', icon: <AiFillShopping size={30} /> },
    { head: 'test4', body: 'body test', icon: <AiFillShopping size={30} /> },
    { head: 'test5', body: 'body test', icon: <AiFillShopping size={30} /> },
    { head: 'test6', body: 'body test', icon: <AiFillShopping size={30} /> },
    { head: 'test7', body: 'body test', icon: <AiFillShopping size={30} /> },
    { head: 'test8', body: 'body test', icon: <AiFillShopping size={30} /> },
  ]

  const handleClickMenuNewProduct = (e, category) => {
    setCategoryId(category)
    setActive(e.target.id)
  }

  console.log(totalItem);

  return (
    <>
      <Head>
        <title>Home App</title>
      </Head>
      <div className='w-full mx-auto '>
        <div className='mx-auto xl:gap-[120px] flex justify-center mb-[60px] items-end h-screen max-h-[847px] bg-[#F1F1F1]' >
          <div className="flex flex-col gap-[52px] mb-[170px]">
            <h1 className='text-7xl font-light'>
              Collections
            </h1>
            <p className='leading-[55px] text-3xl whitespace-pre-wrap w-[682px]'>
              you can explore ans shop many differnt collection
              from various barands here.
            </p>
            <div className='text-white text-[20px] grid items-center h-[72px] w-[223px] text-center bg-[#1E2832] capitalize'>
              shop now
            </div>
          </div>
          <div className='w-[424px] h-[542px] relative'>
            <div className='h-full w-full overflow-hidden rounded-tl-[25%] rounded-br-[25%] z-50 relative'>
              <img src="https://source.unsplash.com/random" className='object-cover w-full h-full' alt='image-section-one' />
            </div>
            <div className='left-3 top-3 z-40 border border-[#AFAFAF] absolute h-full w-full rounded-br-[25%] rounded-tl-[25%]'>
            </div>
          </div>
        </div>
        <div className='
        bg-white my-[90px] gap-2 max-h-[70px] h-screen mx-auto 
          max-w-[1320px] grid grid-flow-col overflow-hidden 
          '>
          <div className='real animate-carousel flex gap-3'>
            {
              slider_looping.map(el => <IconCard {...el} key={el.head} />)
            }
          </div>
          <div className='real animate-carousel flex gap-3'>
            {
              slider_looping.map(el => <IconCard {...el} key={el.head} />)
            }
          </div>
        </div>
        <div className='mx-auto w-full xl:h-[648px] xl:max-w-[1372px] mb-5 flex'>
          {
            categories.length > 0 ?
              <>
                <div className='basis-1/2 grid place-items-center relative'>
                  <h1 className='absolute -left-52 rotate-90 top-1/2 text-3xl'>Explore new and popular styles</h1>
                  <div className='h-full w-11/12   overflow-hidden'>
                    <img className='object-cover h-full w-full' src={categories[0].image} alt='image-mock1 ' />
                  </div>
                </div>
                <div className='basis-1/2 flex flex-wrap overflow-hidden'>
                  <div className='h-[50%] w-[50%]  overflow-hidden px-2 pb-2'>
                    <img className='object-cover h-full w-full' src={categories[1].image} alt='image-mock2 ' />
                  </div>
                  <div className='h-[50%] w-[50%]  overflow-hidden  px-2 pb-2'>
                    <img className='object-cover h-full w-full' src={categories[2].image} alt='image-mock3 ' />
                  </div>
                  <div className=' h-[50%] w-[50%] overflow-hidden px-2 pt-2'>
                    <img className='object-cover h-full w-full' src={categories[3].image} alt='image-mock4 ' />
                  </div>
                  <div className='h-[50%] w-[50%] overflow-hidden px-2 pt-2'>
                    <img className='object-cover h-full w-full' src={categories[4].image} alt='image-mock5 ' />
                  </div>
                </div>
              </>
              : null
          }
        </div>
        <div className='bg-[#F1F1F1]'>
          <div className='mx-auto xl:max-w-[1320px] xl:h-[1250px]  flex flex-col gap-10'>
            <h1 className='capitalize text-3xl text-center font-bold xl:pt-4'>new product</h1>
            <div className='flex justify-start h-[32px] w-full'>
              <div className='h-full flex gap-3'>
                {
                  categories.length > 0 ?
                    categories.slice(0, 5).map(el =>
                      <div className={`cursor-pointer h-full flex items-center ${active === 'btn-' + el.id ? 'text-black' : 'text-gray-500'}`} id={`btn-${el.id}`} onClick={(e) => handleClickMenuNewProduct(e, el.id)}> {el.id == 3 ? 'chair' : el.name} </div>
                    )
                    : null
                }
              </div>
            </div>
            <div className='xl:h-[988px] w-full  flex flex-wrap justify-between relative'>
              {
                data.length > 0 ?
                  data.map((el, index) => <ProductCard {...el} key={`ind$x-${index + 1}`} />)
                  : null
              }
              <div className='absolute -bottom-[50px] left-[50%] translate-x-[-50%]'>test</div>
            </div>
          </div>
        </div>
        <div className="flex justify-end xl:h-[776px] xl:w-full xl:my-[140px] bg-[url('/image/banner.png')] bg-cover bg-fixed">
          <div className='basis-1/2  text-white flex flex-col xl:justify-end xl:mb-20 z-30'>
            <h1 className='xl:text-8xl xl:mb-[56px]'>
              ZARA
            </h1>
            <p className='xl:w-[504px] text-[26px] xl:mb-[66px]'>Lustrous yet understated. The new evening
              wear collection exclusively offered at the
              reopened Giorgio Armani boutique in Los
              Angeles.</p>
            <button className='text-[29px] w-2/6 bg-slate-600 xl:max-w-[264px] '>see collection</button>
          </div>
        </div>
        <div className='mx-auto xl:max-w-[1320px] xl:h-[632px] bg-white flex flex-col gap-10 xl:mb-[140px]'>
          <h1 className='capitalize text-3xl text-center font-bold'>Best Sellers</h1>
          <div className='flex justify-between h-[32px] w-full'>
            <div className='basis-1/2 h-full bg-black flex gap-3'>
              <div className='xl:w-[15%] h-full bg-green-500 flex items-center'>All Products</div>
              <div className='xl:w-[12%] h-full bg-green-500 flex items-center'>T-Shirt</div>
              <div className='xl:w-[12%] h-full bg-green-500 flex items-center'>Hoodies</div>
              <div className='xl:w-[12%] h-full bg-green-500 flex items-center'>Jacket</div>
            </div>
            <div className='xl:w-[6%] h-full bg-black text-white flex items-center'>Filter</div>
          </div>
          <div className='xl:h-[988px] w-full bg-green-500 flex flex-wrap justify-between'>
            {
              Array(4).fill(null).map((el, index) => <ProductCard key={`ind$x-${index + 1}`} />)
            }
          </div>
        </div>
        <div className='flex flex-col items-center xl:gap-[60px]'>
          <h1 className='text-5xl'>Follow products and discounts on Instagram</h1>
          <div className='w-full xl:max-w-[1320px] xl:h-[200px] bg-white'>
          </div>
          <div>
            <h1 className='text-5xl'>Or subscribe to the newsletter</h1>
            <form className='flex justify-between xl:mt-[80px]'>
              <input className='capitalize focus:outline-none basis-9/12 bg-inherit border-b-2 border-black' type="email" name="email" placeholder='enter your email....' />
              <button className='basis-2/12 border-b-2 border-black uppercase'>submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
