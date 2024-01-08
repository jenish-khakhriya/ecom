import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { cartinc,cartdec,Remove_cart } from '../Feature/CartHandle';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const Cart = () => {
    let store = useSelector(state => state);
    let disp = useDispatch();
    let tot = 0;
    let discount = 0;
    let charge = 0;
    let tok = 40;
    let blo;
    let underli;
    console.log("chgtt",charge);
    store.cartmanage.cart.map((el) => {
       
       tot  += el.price_cart;

       if(el.price_cart){
       discount += el.price_cart - (eval(el.price_cart - (el.price_cart * el.discount / 100) ));
       charge += (eval(el.price_cart - (el.price_cart * el.discount / 100) ));
       console.log(charge);
       }

       
       
       

        
    })
    if(charge >= store.cartmanage.delivery_charge){
        charge += 0;
        tok = 0;
        blo = "block"
        underli = "line-through"
   }
   else{
    charge += 40;
    tok = 40;
   
    
   }
 
    if(store.cartmanage.tot_cart){
        return <div className=''>
        <div>
        <h1 className='text-[3em] text-center font-[800]'>Cart</h1>
        <div className='w-[1250px] mx-auto flex-row-reverse flex-wrap flex justify-between max-_1250_:block  max-_1250_:w-[100%]'>
        <div >
                <div className='sticky top-[120px]  '>
                   <div className='w-[300px] h-[270px] bg-[#f9e8c2] p-[20px] max-_1250_:mx-auto max-_1250_:mb-[20px]'>
                        <h1 className=' pb-[15px] text-left border-b-[1px] border-[#28413b]'>PRICE DETAILS</h1>
                        <div className='flex justify-between'>
                        <h1 className=' py-[10px] text-left'>Price ({store.cartmanage.tot_cart} items)</h1>
                        <h1 className=' py-[10px] text-left'>₹{tot}</h1>
                        </div>
                        <div className='flex justify-between'>
                        <h1 className=' py-[10px] text-left'>Discount</h1>
                        <h1 className=' py-[10px] text-left text-green-600'>-₹{discount}</h1>
                        </div>
                        <div className='flex justify-between'>
                            <div>
                                <h1 className='py-[10px] text-left'>Delevery charge</h1>
                            </div>
                            <div className='flex '>
                                
                                <h1 className=' py-[10px]  text-left '
                                style={{
                                    textDecoration : underli
                                }}
                                >₹40</h1>
                               
                                <h1 className=' py-[10px] text-left pl-[7px] text-green-600 hidden'
                                style={{display : blo}}
                                >Free</h1>
                                
                            </div>
                        </div>

                        <div className='flex justify-between'>
                        <h1 className=' py-[10px] text-left'>Total</h1>
                        <h1 className=' py-[10px] text-left text-green-600'>₹{charge}</h1>
                        </div>
                      
                   </div>
                </div>
               
            </div>
            <div className=''>
            {
                store.cartmanage.cart.map((el,i) => {
                    
                    if(!(el.cart_token)){
                        return <div className='w-[900px]  max-_1250_:mx-[auto]  max-_1250_:w-[calc(100%-30px)] '>
                            <div className='bg-[#ffe9e9]  w-[100%] flex gap-[40px] p-[10px_20px] max-_1250_:mx-[auto] 
                            max-_460_:block
                            '>
                                <div>
                                    <div>
                                    <img src={el.image} className='w-[150px] h-[160px] max-_460_:w-[100%] max-_460_:h-[auto] ' />
                                    </div>
                                   
                                </div>
                                <div className=''>
                                    <h1 className='text-[3em] font-[800]'>
                                        {el.name}
                                    </h1>
                                    <div className='flex gap-[20px] align-center mt-[30px] max-_460_:justify-around'> 
                                    <h1 className='line-through text-[grey] text-[14px] mt-[6px] 
                                    max-_460_:text-[25px]
                                    max-_460_:mt-[0px]
                                    '>
                                        ₹{el.price_cart}
                                        </h1>
                                        <h1 className='text-[20px] font-[700]  max-_460_:text-[25px]
                                    max-_460_:mt-[0px]'>
                                        ₹{eval(el.price_cart - (el.price_cart * el.discount / 100) )}
                                        </h1>
                                       
                                        <p className='  max-_460_:text-[20px]  max-_460_:relative max-_460_:top-[4px]
                                     max-_460_:mt-[0px] text-[14px] text-[green] font-[700] mt-[6px]'>{el.discount}% off</p>
                                    </div>
                                </div>
                            </div>


                            <div className='bg-[#ffe9e9]  w-[100%] flex gap-[40px] p-[10px_20px] mb-[20px]'>
                            <div className='flex pt-[0px] pb-[10px] justify-between w-[150px] '>
                                        <button onClick={() => disp(cartdec(i))}  disable={el.but_dis2}  className='cursor-pointer rounded-[50%] px-[13.5px] pb-[5px]  border-[rgba(177,175,175)] border-[1px]'>
                                          -
                                        </button>
                                        {/* <p className='border-[rgba(177,175,175)] border-[1px] p-[3px_25px] '>1</p> */}
                                        <div className='border-[rgba(177,175,175)] border-[1px] w-[60px] max-_381_:w-[40px]  h-[35px] relative overflow-hidden'>
                                            <div className='absolute w-[100%] h-[100%] top-[5px] transition-all duration-[500ms]'
                                            style={{
                                                top : el.cartinc1,
                                                
                                            }}
                                           
                                            >
                                                <p className='font-[700] '>1</p>
                                                <p className='font-[700] '>2</p>
                                                <p className='font-[700] '>3</p>
                                                <p className='font-[700] '>4</p>
                                                <p className='font-[700] '>5</p>
                                            </div>
                                             
                                        </div>
                                        <button onClick={() => disp(cartinc(i))} disable={el.but_dis}  className='cursor-pointer rounded-[50%] px-[11px] pb-[5px]  border-[rgba(177,175,175)] border-[1px]'>
                                          +
                                        </button>
                                    </div>
                                    <div>
                                        <button 
                                        onClick={() => disp(Remove_cart(i))}
                                         className='p-[0px_20px]   pb-[4px] text-[1.3em] transition-all duration-500 font-[700] hover:text-[blue]'>Remove</button>
                                    </div>
                                </div>
                        </div>
                    }
                  
                    
                })
            }
            </div>
          
        </div>
    </div>
    <div className='flex w-[1250px] mx-auto sticky bottom-[0px]
     max-_1250_:block max-_1250_:w-[100%] 
     
     '>
        <div className='w-[900px] max-_1250_:mx-[auto] max-_460_:justify-center max-_1250_:w-[100%]  flex justify-between bg-white shadow-[0_-8px_30px_0px_rgba(0,0,0,0.3)] p-[10px_20px]'>
             <div className='max-_460_:hidden'>
                
             </div>
             <Link to="/" className="p-[15px_70px] bg-[#fb641b] text-[white] font-[700] text-[1.6em]">
                 Place Order   
             </Link>
        </div>
    </div>
    </div>
    }
    else{
        return <div className='bg-[#ffd3d3]'>
         <div className='w-[1100px] mx-[auto]  bg-[#ffd3d3] mt-[50px] max-_1100_:w-[100%] max-_553_:mt-[0px]'>
            <div className='w-[500px] py-[30px] mx-auto max-_553_:w-[100%]'>
                <img src={require('./images/cart-add.webp')} />
            </div>
            <div className='text-[50px] text-center font-[800] max-_553_:text-[30px]'>
                Missing Cart Items
            </div>
            <Link to="/" className="text-center text-[blue] underline pb-[30px] block">Shop More</Link>
        </div>
        </div>
    }
       

  
}

export default Cart