import IconCard from '@/components/Card/IconCard'
import ProductCard from '@/components/Card/ProductCard'
import clsx from 'clsx';
import Head from 'next/head'
import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { AiOutlineHeatMap, AiOutlineClear, AiFillShopping, AiFillCloud, AiFillAlert, AiFillCar, AiFillRobot, AiOutlineAliwangwang } from "react-icons/ai";

export default function Home() {
  const [data, setData] = useState([])
  const [dataSeller, setDataSeller] = useState([])
  const [categories, setCateGories] = useState([])
  const [pageCurrent, setPageCurrent] = useState(0)
  const [active, setActive] = useState('btn-1')
  const [categoryId, setCategoryId] = useState(1)
  const [activeSeller, setActiveSeller] = useState('btn--1')
  const [categoryIdSeller, setCategoryIdSeller] = useState(1)
  // const [totalItem, setTotalItem] = useState()

  // TODO: refactor to custom hook
  const fetchProduct = useCallback(async () => {
    const dataRes = await fetch(`https://api.escuelajs.co/api/v1/products?categoryId=${categoryId}&offset=${pageCurrent}&limit=8`)
    const dataJson = await dataRes.json()
    setData(dataJson)

    // ? pagegination
    // const dataResTotal = await fetch(`https://api.escuelajs.co/api/v1/products?categoryId=${categoryId}`)
    // const dataTotalJson = await dataResTotal.json()
    // setTotalItem(dataTotalJson.length)
  }, [pageCurrent, categoryId])

  const fetchBestSeller = useCallback(async () => {
    const dataRes = await fetch(`https://api.escuelajs.co/api/v1/products?categoryId=${categoryIdSeller}&offset=${pageCurrent + 2}&limit=4`)
    const dataJson = await dataRes.json()
    setDataSeller(dataJson)
  }, [pageCurrent, categoryIdSeller])

  const fetchCategory = useCallback(async () => {
    const dataRes = await fetch(`https://api.escuelajs.co/api/v1/categories`)
    const dataJson = await dataRes.json()
    setCateGories(dataJson)
  }, [])

  // ? pagegination
  // const totalPageCount = useMemo(() => Math.ceil(totalItem / 8), [totalItem])

  useEffect(() => {

    fetchProduct()
    fetchCategory()
    fetchBestSeller()

  }, [fetchProduct, fetchCategory, fetchBestSeller])

  // const slider_looping = [
  //   { head: 'test1', body: 'body test', icon: <AiFillShopping size={30} /> },
  //   { head: 'test2', body: 'body test', icon: <AiFillShopping size={30} /> },
  //   { head: 'test3', body: 'body test', icon: <AiFillShopping size={30} /> },
  //   { head: 'test4', body: 'body test', icon: <AiFillShopping size={30} /> },
  //   { head: 'test5', body: 'body test', icon: <AiFillShopping size={30} /> },
  //   { head: 'test6', body: 'body test', icon: <AiFillShopping size={30} /> },
  //   { head: 'test7', body: 'body test', icon: <AiFillShopping size={30} /> },
  //   { head: 'test8', body: 'body test', icon: <AiFillShopping size={30} /> },
  // ]

  const slider_looping = useMemo(() => (
    [
      { head: 'Orchestrator', body: 'Abshire', icon: <AiFillShopping size={25} color={`#1E2832`} /> },
      { head: 'Elenor', body: 'Tremblay', icon: <AiFillCloud size={25} color={`#1E2832`} />  },
      { head: 'Fabiola', body: 'Kuhic', icon: <AiFillAlert size={25} color={`#1E2832`} />  },
      { head: 'Brant', body: 'Runolfsdottir', icon: <AiFillCar size={25} color={`#1E2832`} />  },
      { head: 'Gladyce', body: 'Schaden', icon: <AiFillRobot size={25} color={`#1E2832`} />  },
      { head: 'Griffin', body: 'Roob', icon: <AiOutlineAliwangwang size={25} color={`#1E2832`} />  },
      { head: 'Aliyah', body: 'Padberg', icon: <AiOutlineClear size={25} color={`#1E2832`} />  },
      { head: 'Oscar', body: 'Konopelski', icon: <AiOutlineHeatMap size={25} color={`#1E2832`} />  },
    ]
  ), [])

  const handleClickMenuNewProduct = (e, category) => {
    setCategoryId(category)
    setActive(e.target.id)
  }

  const handleClickMenuBestSeller = (e, category) => {
    setCategoryIdSeller(category)
    setActiveSeller(e.target.id)
  }

  const handleSubmitEmail = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <Head>
        <title>Home App</title>
      </Head>
      <div className='w-full mx-auto '>
        <div className=' mx-auto xl:gap-[120px] flex justify-center xl:mb-[60px] md:items-center md:pt-[80px] xl:items-end h-screen md:max-h-[550px] xl:max-h-[847px] bg-[#F1F1F1]' >
          <div className="flex flex-col md:gap-[20px] xl:gap-[52px] xl:mb-[170px]">
            <h1 className='md:text-4xl xl:text-7xl font-light'>
              Collections
            </h1>
            <p className='leading-[55px] md:text-base xl:text-3xl whitespace-pre-wrap md:w-[375px] xl:w-[682px]'>
              you can explore ans shop many differnt collection
              from various barands here.
            </p>
            <div className='cursor-pointer text-white md:text-base xl:text-[20px] grid items-center md:h-[50px] md:w-[200px] xl:h-[72px] xl:w-[223px] text-center bg-[#1E2832] capitalize'>
              shop now
            </div>
          </div>
          <div className='md:w-[300px] md:h-[400px] xl:w-[424px] xl:h-[542px] relative'>
            <div className='h-full w-full overflow-hidden rounded-tl-[25%] rounded-br-[25%] z-50 relative'>
              <img src="https://source.unsplash.com/random" className='object-cover w-full h-full' alt='image-section-one' />
            </div>
            <div className='left-3 top-3 z-40 border-4 border-[#AFAFAF] absolute h-full w-full rounded-br-[25%] rounded-tl-[25%]'>
            </div>
          </div>
        </div>
        <div className='
        md:my-[50px] xl:my-[90px] gap-2 max-h-[70px] h-screen mx-auto 
          md:w-[87.5%]
          xl:max-w-[1320px] grid grid-flow-col overflow-hidden 
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
        <div className='mx-auto w-full md:w-[90%] xl:h-[648px] xl:max-w-[1336px] md:mb-[80px] xl:mb-[140px] flex'>
          {
            categories.length > 0 ?
              <>
                <div className='basis-1/2 grid place-items-center relative'>
                  <h1 className='absolute md:-left-28 xl:-left-52 rotate-90 top-1/2 md:text-base xl:text-3xl'>Explore new and popular styles</h1>
                  <div className='h-full w-11/12 overflow-hidden'>
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
          <div className='mx-auto md:max-w-[87%] xl:max-w-[1320px] md:h-[700px] xl:h-[1250px]  flex flex-col md:gap-5 xl:gap-10'>
            <h1 className='capitalize text-3xl text-center font-bold pt-10'>new product</h1>
            <div className='flex justify-start h-[32px] w-full'>
              <div className='h-full flex gap-3'>
                {
                  categories.length > 0 ?
                    categories.slice(0, 5).map(el =>
                      <div className={`cursor-pointer h-full flex items-center ${active === 'btn-' + el.id ? 'text-black' : 'text-gray-500'}`} id={`btn-${el.id}`} key={`btn-${el.id}`} onClick={(e) => handleClickMenuNewProduct(e, el.id)}> {el.id == 3 ? 'chair' : el.name} </div>
                    )
                    : null
                }
              </div>
            </div>
            <div className='md:h-[450px] xl:h-[988px] w-full  flex flex-wrap justify-between relative md:gap-2'>
              {
                data.length > 0 ?
                  data.map((el, index) => <ProductCard {...el} key={`ind$x-${index + 1}`} />)
                  : null
              }
            </div>
          </div>
        </div>
        <div className="flex justify-end md:h-[450px] xl:h-[776px] xl:w-full bg-[url('/image/banner.png')] xl:bg-cover bg-fixed">
          <div className='basis-1/2  text-white flex flex-col justify-end mb-20 z-30'>
            <h1 className='md:text-5xl xl:text-8xl md:mb-[25px] xl:mb-[56px]'>
              ZARA
            </h1>
            <p className='md:w-[400px] xl:w-[504px] xl:text-[26px] md:mb-[25px] xl:mb-[66px]'>Lustrous yet understated. The new evening
              wear collection exclusively offered at the
              reopened Giorgio Armani boutique in Los
              Angeles.</p>
            <button className='text-[29px] w-2/6 bg-slate-600 md:w-[50%] md:max-w-[250px] xl:max-w-[264px] '>see collection</button>
          </div>
        </div>
        <div className='bg-[#F1F1F1] pb-6 mb-10'>
          <div className='md:max-w-[87%] mx-auto xl:max-w-[1320px] xl:h-[632px] flex flex-col md:gap-5 xl:gap-10 xl:mb-[140px]'>
            <h1 className='capitalize text-3xl text-center font-bold pt-10'>Best Sellers</h1>
            <div className='flex justify-start h-[32px] w-full'>
              <div className='basis-1/2 h-full flex gap-3'>
                {
                  categories.length > 0 ?
                    categories.slice(0, 5).map(el =>
                      <div className={`cursor-pointer h-full flex items-center ${activeSeller === 'btn--' + el.id ? 'text-black' : 'text-gray-500'}`} id={`btn--${el.id}`} key={`btn--${el.id}`} onClick={(e) => handleClickMenuBestSeller(e, el.id)}> {el.id == 3 ? 'chair' : el.name} </div>
                    )
                    : null
                }
              </div>
            </div>
            <div className='xl:h-[988px] w-full flex flex-wrap justify-between'>
              {
                dataSeller.length > 0 ?
                  dataSeller.map((el, index) => <ProductCard {...el} key={`ind$x-seller-${index + 1}`} />)
                  : null
              }
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center md:gap-[30px] xl:gap-[60px]'>
          <h1 className='md:text-3xl xl:text-5xl'>Follow products and discounts on Instagram</h1>
          <div className='flex justify-between w-full md:max-w-[87%] xl:max-w-[1320px] xl:h-[200px] bg-white md:gap-2 xl:gap-0'>
            {
              data.length > 0 ?
                data.slice(0, 6).map((el, index) => (
                  <div className='xl:max-w-[200px] xl:max-h-[200px] w-full' key={`follow-product-${index}`}>
                    <img src={el.images} className='h-full w-full object-cover' key={`ind$x-seller-${index + 1}`} />
                  </div>
                ))
                : null
            }
          </div>
          <div>
            <h1 className='md:text-3xl xl:text-5xl capitalize'>Or subscribe to the newsletter</h1>
            <form className='flex justify-between md:mt-[10px] xl:mt-[80px]' onSubmit={handleSubmitEmail}>
              <input className='focus:outline-none basis-9/12 bg-inherit border-b-2 border-black' type="email" name="email" placeholder='Enter your email....' />
              <button className='basis-2/12 border-b-2 border-black uppercase'>submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
