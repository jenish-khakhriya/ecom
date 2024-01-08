import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector,useDispatch } from 'react-redux';
import { wishlistactive,Addcart } from '../Feature/CartHandle';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useRef } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { FaShoppingCart } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";


const Body = () => {
  // usedispatch
  let redheart = useRef(null);
  let whiteborderheart = useRef(null)
  let butt = useRef(null);
  let disp = useDispatch();
  // useselector

  let store = useSelector(state => state);
  
  
  // react slick

  var settings = {
    
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
      
      autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1413,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1058,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 699,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='w-[100%] bg-[#f7f7f7]'>
      <div className='mt-[30px] mx-[auto] h-[500px]  w-[1400px] max-_1413_:w-[100%]'>
          <div className='px-[20px]'>
              <Slider {...settings} className='xyz'>
                  {
                    store.cartmanage.cart.map((el,i) => {
                      console.log(toString(el.image));
                      
                      return <div className='p-[7px_0px] 
                      
                      
                      '>
                        <div className='h-[auto] bg-[#ffffff] p-[10px] relative group
                           hover:shadow-[0_7px_17px_0px_rgba(23,84,116,0.18)] 
                           hover:z-[999]
                           hover:border-[#f7f7f7]
                           hover:border-[0.8px]
                           hover:rounded-[5px]
                           overflow-hidden 
                        '>
                          
                          <button className='absolute
                           
                          
                          group-hover:block 
                          group-hover:top-[20px]
                           right-[-80px] top-[-80px]
                           group-hover:right-[20px]
                           transition-all duration-[500ms]
                           
                           '
                           style={{
                            right : el.right,
                            top : el.top
                           }}
                           onClick={() => disp(wishlistactive(i))}
                              ref={butt}
                           
                           >
                           {/*  <div className='relative '> */}
                            <CiHeart  className='text-[#f2d0d0] text-[2.7em] '
                              style={{
                                display : el.block
                              }} ></CiHeart> 
                              <FaHeart className='text-[red] mt-[4px] mr-[4px]  text-[2.1em] hidden'
                               style={{
                                display : el.hidden
                              }}  />
                             {/*  <button className='block absolute w-[100%] h-[100%]  top-[0px] left-[0px] '
                              
                              onClick={() => disp(wishlistactive({whiteborderheart,redheart,butt}))}
                              ref={butt}
                              >
                              </button> */}
                          {/*   </div> */}
                          </button>
                            <div>
                              <img src={el.image} className='h-[370px] max-_1413_:w-[100%] max-_1058_:h-[400px] max-_1058_:h-[260px] max-_699_:h-[300px]'/>
                              {/* <img src={require('./images/orange.jpg')}/> */}
                          {/*     <div style={{
                                backgroundImage : `require(${el.image})`
                              }}> */}
                          
                            </div>
                            <div className='relative top-[0px] bg-[white] group-hover:top-[-20px]'>
                                  <h1 className='text-left text-[2em] font-[900] pl-[10px] text-[#355249]'>{el.name}</h1>
                                  <div className='flex ml-[10px] gap-[10px] items-center' >
                                      <p>₹{eval(el.price - (el.price * el.discount / 100) )}</p>
                                      <del>₹{el.price}</del>
                                      <p className='text-[blue] text-[15px] relative top-[1px]'>{el.discount}% off</p>
                                  </div>
                            </div>
                            <div>
                              <div className='flex justify-between items-center'>
                                  <div>
                                    <Link to="/" className=' p-[10px_15px] text-[14px] font-[800]
                                      text-[white]
                                      
                                    transition-all duration-[500ms] mx-[5px] my-[10px] flex
                                    bg-[#ff9f00] 
                                    ' 
                                    onClick={() => {
                                      disp(Addcart(i))
                                    }}
                                    >
                                        <div className='pr-[10px] mt-[3.2px]'>
                                          <FaShoppingCart />
                                        </div>
                                        <div className='max-_351_:text-[12px]'>
                                          ADD TO CART
                                        </div>
                                    </Link>
                                  </div>
                                  <div>
                                    <Link to="/cart" className=' p-[10px_15px] text-[14px] font-[800]
                                    text-[white] bg-[#fb641b]
                                    transition-all duration-[500ms] mx-[5px] my-[10px] flex
                                    '   onClick={() => {
                                      disp(Addcart(i))
                                    }}> <div className='pr-[10px] mt-[2.5px]'>
                                    <GiElectric className='text-[1.2em]' />
                                  </div>
                                  <div className='max-_351_:text-[12px]'>
                                    BUY NOW
                                  </div></Link>
                                  </div>
                              </div>
                            </div>
                        </div>
                      </div>
                    })
                  }
                  
              </Slider>
          </div>
      </div>
    </div>
  )
}

export default Body

