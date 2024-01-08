import React from 'react'
import image1 from './images/fruitcartlogo.jpg'
import image2 from './images/orange.jpg'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { PiStorefrontLight } from "react-icons/pi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { BiSolidPlusSquare } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { IoGiftOutline } from "react-icons/io5";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { GoBell } from "react-icons/go";
import { BiSupport } from "react-icons/bi";
import { IoIosTrendingUp } from "react-icons/io";
import { PiDownloadSimpleLight } from "react-icons/pi";
import { FiMenu } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { useSelector,useDispatch } from 'react-redux';
import { Handlefunction, incrementByAmount,asok,offset_0 } from '../Feature/CartHandle';
import { useRef } from 'react';
import { BiSolidCoupon } from "react-icons/bi";



const Header = () => {

        let store = useSelector(state => state);
        console.log(store);
    
    let change = useRef(null)
    let dis = useRef(null)
   /*  function Handlefunction(){
       change.current.style.display = 'none';
    } */
    let disp = useDispatch();
    
    console.log(store);
  return (
    <div className='sticky top-[0px] z-[999] bg-[white]'>
       <div className='flex justify-center    flex-col shadow-[1px_1px_10px_0px_rgba(0,0,0,0.05),-1px_1px_10px_0px_rgba(0,0,0,0.1)]'>

            <div className='flex justify-center  '>

                <div className='flex 
                max-_764_:w-[500px]
                
                    justify-between 
                    w-[100%]
                    py-[12px]
                    px-[28px]
                    box-border
                    gap-[50px]
                    max-_764_:gap-[5px]
                    sticky
                    top-[0px]
                    z-[999]
                    
                    items-center
                    
                '>
                   
                       <div className='flex align-center grow gap-[20px] max-_764_:gap-[10px] items-center '>
                       <button className='_764_:hidden max-_764_:block  block' ref={dis}  onClick={() => disp(incrementByAmount({change,dis}))}>
                            <FiMenu className='text-[1.5em]' />
                        </button>
                        <div className='relative'>
                            
                            <div className='absolute 
                            _764_:hidden
                            w-[270px] 
                            z-[999]
                            h-[calc(100vh+22px)] 
                             bg-[white]
                            top-[-34px] 
                            left-[-470px]
                            overflow-hidden
                            transition-all
                            duration-[500ms]
                            shadow-[2px_2px_10px_0px_rgba(0,0,0,0.4)]
                            flex
                            '
                            ref={change}
                            >
                              <div className='w-[100%] '>
                              <div className='flex justify-between py-[12px] px-[12px]
                                 bg-[rgb(255,163,178)] 
                            
                                 h-[auto]
                                 '>
                                    <div className='flex gap-[15px] items-center'>
                                        <div>
                                            <FaUserAlt className='relative top-[1px]'/>
                                        </div>
                                        <div className='text-[white] font-[700] text-[1.2em]'>
                                            Login & Signup
                                        </div>
                                    </div>

                                    <button onClick={() => disp(asok({change,dis}))}>
                                        <img src={image1} className='w-[50px] h-[44px] mx-[50px] max-_764_:mx-[0px]'/>
                                    </button>
                                    
                                </div>
                                <div className='p-[12px_20px] hover:bg-[#fafafa] bg-[white]'>
                                            <Link className="flex ">
                                                <div>
                                                <FaRegUserCircle className='m-[5px_0px]  text-[black]'/>
                                                </div>
                                                <div className='pl-[10px] text-[black]'>
                                                    My Account
                                                </div>
                                            </Link>
                                        </div>

                                        <div className='p-[12px_20px] hover:bg-[#fafafa] bg-[white]'>
                                            <Link className="flex ">
                                                <div>
                                                <BiSolidCoupon   className='m-[5px_0px] rotate-45 text-[black]'/>
                                                </div>
                                                <div className='pl-[10px] text-[black]'>
                                                    Coupons
                                                </div>
                                            </Link>
                                        </div>

                                        <div className='p-[12px_20px] hover:bg-[#fafafa] bg-[white]' onClick={() => disp(offset_0({change,dis}))}>
                                            <Link to="/cart" className="flex ">
                                               {/*  <div>
                                                    <IoCartOutline className='m-[5px_0px] text-[black] '/>
                                             
                                                </div> */}

                                    <div className='relative'>
                                    <div>
                                        <IoCartOutline  className='relative top-[5px] text-[1.2em]'/>
                                    </div>
                                    <div className='absolute 
                                    right-[0px]
                                    top-[-7px]
                                    rounded-[42%]
                                    border-[1px]
                                    border-[#ffd0d0]
                                    
                                    bg-[red]
                                    text-[white]
                                    text-[11px]
                                    px-[5px]
                                    '
                                    style={
                                        {
                                            display : store.cartmanage.add_cart
                                        }
                                    }
                                    >
                                            {store.cartmanage.tot_cart}
                                    </div>
                                </div>
                                                <div className='pl-[10px] text-[black]'>
                                                    My Cart
                                                </div>


                                                
                                            </Link>
                                        </div>
                                        
                                        <div className='p-[11px_20px] hover:bg-[#fafafa] bg-[white]'>
                                            <Link to="/" className="flex ">
                                                <div>
                                                <CiHeart className='m-[5px_0px] text-[black] text-[1.2em]'/>
                                                </div>
                                                <div className='pl-[10px] text-[black]'>
                                                    My Wishlist
                                                </div>
                                            </Link>
                                        </div>

                                        <div className='p-[12px_20px] hover:bg-[#fafafa] bg-[white]'>
                                            <Link to="/" className="flex ">
                                                <div>
                                                <IoGiftOutline className='m-[5px_0px] text-[black]'/>
                                                </div>
                                                <div className='pl-[10px] text-[black]'>
                                                    My orders
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='p-[12px_20px] hover:bg-[#fafafa] bg-[white]'>
                                            <Link to="/" className="flex ">
                                                <div>
                                                <GoBell className='m-[5px_0px] text-[black]'/>
                                                </div>
                                                <div className='pl-[10px] text-[black]'>
                                                    My Notification
                                                </div>
                                            </Link>
                                        </div>
                              </div>
                            </div>
                            </div>
                      
                       <Link to="/" >
                            <img src={image1} className='w-[50px] h-[44px] mx-[50px] max-_764_:mx-[0px]'/>
                        </Link>
                        <div className='w-[100%] mt-[5px] max-_764_:hidden'>
                            <form className='rounded-[4px]
                             inline-block 
                             bg-[#f0f5ff]
                              w-[100%]
                               relative
                               '
                             
                               >
                                <div className='flex justify-between w-[100%] '>
                                    <Link to="/" className="w-[45px] h-[40px] block">
                                        <IoSearch className='h-[40px] w-[45px] p-[8px_8px_8px_8px] text-[rgba(0,0,0,0.3)]'/>
                                    </Link>
                                    <div className='w-[100%] inline-block'>
                                        <input  type="text"   placeholder='Search for Products, Brands and More' className='
                                        w-[100%]
                                        text-ellipsis overflow-hidden 
                                         h-[100%] 
                                         outline-0
                                          text-[18px] 
                                          pl-[5px]
                                           inline-block
                                           rounded-[0px_4px_4px_0px]
                                           bg-[#f0f5ff]
                                           ' />
                                    </div>
                               
                                </div>
                            </form>
                        </div>
                        </div>





                       <div className='flex justify-right'>
                            <div className='flex gap-[7px]
                             hover:bg-[blue]
                              hover:text-[white] 
                              p-[7.5px_15px] 
                              max-_764_:px-[6px]
                              rounded-[8px]
                              group
                              transition-all
                              duration-[150ms]
                             relative
                             cursor-pointer
                              '>
                                <div>
                                    <Link to="/">
                                        <FaUser className='relative top-[5px]'/>
                                    </Link>
                                </div>
                                <div>
                                    Login
                                </div>
                                <div className='max-_764_:hidden'>
                                <IoIosArrowDown className='relative top-[6px] group-hover:rotate-180 
                                group-hover:text-[white]
                                transition-all
                                duration-[500ms]

                                '/>
                                </div>
                                <div className='absolute
                                max-_764_:hidden
                                 left-[-2px] 
                                 top-[40px] 
                                 w-[280px] 
                                 z-[20]
                                 hidden
                                  w-[100px]
                                  
                                  group-hover:block
                                 
                                  '>
                                    <div className='mt-[18px] 
                                    max-_764_:hidden
                                    bg-[white]
                                    rounded-[8px]
                                    shadow-[1px_1px_10px_0px_rgba(0,0,0,0.05),-1px_1px_10px_0px_rgba(0,0,0,0.1)]
                                    '>
                                        <div className='
                                        flex justify-between p-[12px_20px] 
                                        border-b-[1px] border-b-[#e0e0e0]
                                        '>
                                            <div className='text-[black]'>
                                                New customer?
                                            </div>
                                            <div>
                                                <Link to="/" className="
                                                block
                                                text-[blue]
                                                font-[700]
                                                
                                                ">
                                                    Sign Up
                                                </Link>
                                            </div>
                                        </div>
                                        <div className='p-[12px_20px] hover:bg-[#fafafa]'>
                                            <Link to="/" className="flex ">
                                                <div>
                                                <FaRegUserCircle className='m-[5px_0px] text-[black]'/>
                                                </div>
                                                <div className='pl-[10px] text-[black]'>
                                                    My Profile
                                                </div>
                                            </Link>
                                        </div>

                                        <div className='p-[12px_20px] hover:bg-[#fafafa]'>
                                            <Link to="/" className="flex ">
                                                <div>
                                                <BiSolidPlusSquare  className='m-[5px_0px] text-[black]'/>
                                                </div>
                                                <div className='pl-[10px] text-[black]'>
                                                    Fruitcart Plus Zone
                                                </div>
                                            </Link>
                                        </div>

                                        <div className='p-[12px_20px] hover:bg-[#fafafa]'>
                                            <Link to="/" className="flex ">
                                                <div>
                                                <BsBoxSeam  className='m-[5px_0px] text-[black]'/>
                                                </div>
                                                <div className='pl-[10px] text-[black]'>
                                                    Orders
                                                </div>
                                            </Link>
                                        </div>

                                        <div className='p-[11px_20px] hover:bg-[#fafafa]'>
                                            <Link to="/" className="flex ">
                                                <div>
                                                <CiHeart className='m-[5px_0px] text-[black] text-[1.2em]'/>
                                                </div>
                                                <div className='pl-[10px] text-[black]'>
                                                    Wishlist
                                                </div>
                                            </Link>
                                        </div>

                                        <div className='p-[12px_20px] hover:bg-[#fafafa]'>
                                            <Link to="/" className="flex ">
                                                <div>
                                                <IoGiftOutline className='m-[5px_0px] text-[black]'/>
                                                </div>
                                                <div className='pl-[10px] text-[black]'>
                                                    Rewards
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='p-[12px_20px] hover:bg-[#fafafa]'>
                                            <Link to="/" className="flex ">
                                                <div>
                                                <FaMoneyCheckDollar className='m-[5px_0px] text-[black]'/>
                                                </div>
                                                <div className='pl-[10px] text-[black]'>
                                                    Gift Cards
                                                </div>
                                            </Link>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <Link to="/cart" className='flex gap-[7px]
                             
                              p-[7.5px_15px] 
                              max-_764_:px-[6px]
                              rounded-[8px]
                              block
                              
                            
                              '>
                                <div className='relative'>
                                    <Link to="/cart">
                                        <IoCartOutline  className='relative top-[1px] text-[1.7em]'/>
                                    </Link>
                                    <div className='absolute 
                                    right-[0px]
                                    top-[-7px]
                                    rounded-[42%]
                                    border-[1px]
                                    border-[#ffd0d0]
                                    
                                    bg-[red]
                                    text-[white]
                                    text-[11px]
                                    px-[5px]
                                    '
                                    style={
                                        {
                                            display : store.cartmanage.add_cart
                                        }
                                    }
                                    >
                                            {store.cartmanage.tot_cart}
                                    </div>
                                </div>
                                <div className='max-_1018_:hidden'>
                                    Cart
                                </div>
                              
                              
                            </Link>
                            <Link to="/" className='flex gap-[7px]
                             
                             p-[7.5px_15px] 
                             rounded-[8px]
                             max-_764_:px-[6px]
                             block
                             w-[200px]
                             max-_1018_:w-[auto]
                           
                             '>
                               <div>
                                   <Link to="/">
                                       <PiStorefrontLight   className='relative top-[1px] text-[1.7em]'/>
                                   </Link>
                               </div>
                               <div className='max-_1018_:hidden'>
                                   Become a Seller
                               </div>
                             
                             
                           </Link>

                           <div className='
                           max-_764_:hidden
                             hover:bg-[#fafafa]
                             hover:border-[1px]
                             hover:border-[#e0e0e0]
                             border-[1px]
                             border-transparent
                              
                              group
                              p-[7.5px_15px] 
                              rounded-[8px]
                              group
                              transition-all
                              duration-[500ms]
                             relative
                             cursor-pointer
                              '>
                                <div>
                                    <Link to="/">
                                        <HiOutlineDotsVertical className='relative top-[5px] '/>
                                    </Link>
                                </div>
                               
                              
                                <div className='absolute
                                 left-[-190px] 
                                 top-[40px] 
                                 w-[240px] 
                                  
                                 
                                  w-[100px]
                                  hidden
                                  group-hover:block
                                  transition-all
                                duration-[500ms]
                                  '>
                                    <div className=' w-[100%] mt-[18px]
                                    bg-[white]
                                    rounded-[8px]
                                    shadow-[1px_1px_10px_0px_rgba(0,0,0,0.05),-1px_1px_10px_0px_rgba(0,0,0,0.1)]
                                    '>
                                           <div className='p-[8px_12px] hover:bg-[#fafafa]'>
                                                <div className='flex items-center gap-[15px]'>
                                                    <div>
                                                            <GoBell className='text-[1.3em]'/>
                                                    </div>
                                                    <div>
                                                    Notification Preferences
                                                    </div>
                                                </div>
                                                    
                                           </div>
                                           <div className='p-[8px_12px] hover:bg-[#fafafa]'>
                                                <div className='flex items-center gap-[15px]'>
                                                    <div>
                                                        <BiSupport className='text-[1.3em]'/>
                                                    </div>
                                                    <div>
                                                        24x7 Customer Care
                                                    </div>
                                                </div>
                                                    
                                           </div>
                                           <div className='p-[8px_12px] hover:bg-[#fafafa]'>
                                                <div className='flex items-center gap-[15px]'>
                                                    <div>
                                                        <IoIosTrendingUp  className='text-[1.3em]'/>
                                                    </div>
                                                    <div>
                                                        Advertise
                                                    </div>
                                                </div>
                                                    
                                           </div>
                                           <div className='p-[8px_12px] hover:bg-[#fafafa]'>
                                                <div className='flex items-center gap-[15px]'>
                                                    <div>
                                                    <PiDownloadSimpleLight className='text-[1.3em]'/>
                                                    </div>
                                                    <div>
                                                    Download App
                                                    </div>
                                                </div>
                                                    
                                           </div>
                                    </div>
                                </div>
                            </div>
                           
                       </div>

                       
                </div>
            </div>
         </div>
         <div>
          {/*   <div className='w-[400px] h-[400px] ' style={{
               backgroundImage : `url(${require('./images/fruitcartlogo.jpg')})`

            }}> */} 
          
           
         </div>
    </div> 
  )
}

export default Header


{/* <div className='w-[100%] h-[70px] bg-[red] flex justify-center'>
<div className='flex w-[87vw] bg-[green] gap-[50px] '>
        <Link to="/" className="h-[70px]">
            <img  src={image1} className="h-[70px] w-[70px] block"/>
        </Link>
       <div className='flex  items-center justify-center '>
            <Link to="/"><IoSearch className='bg-[white] w-[40px] h-[40px] rounded-[4px_0px_0px_4px]'/></Link>
           <div >
           <input type="text"  className='h-[40px] 
            outline-0 
            pl-[5px] 
            text-[19px] 
            rounded-[0px_4px_4px_0px]
           w-[100%]
          
            block
            pb-[2px]
            
            
            '
           
            />
           </div>
        </div>
       <div className='flex justify-around items-center' >
       <div>
            hello
        </div>
        <div>
            hello
        </div>
        <div>
            hello
        </div>
       </div>
       


        

</div>
</div> */}