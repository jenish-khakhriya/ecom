import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils';
import React from 'react';
/* import {orange} from '../Pages/images/orange.jpg' */

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    value2 : 2,
    top : "",
    right : "",
    cssimp : "",
    cssimp2 : "",
    tot_cart : 0,
    add_cart : "none",
    delivery_charge : 700,
    cart : [
      {
        name : "Orange",
        image : require("../Pages/images/orange.jpg"),
        token : 0,
        top : "",
        right : "",
        block : "",
        hidden : "",
        inc : 2,
        price : 380,
        price_cart : 0,
        discount : 35,
        addcart : 0,
        cart_token : 1,
        cartinc1 : "",
        carddec1 : "",
        cart_5 : 0,
        but_dis : false,
        but_dis2 : true
      },
      {
        name : "Apple",
        image :  require("../Pages/images/Apples.webp"),
       
        token : 0,
        top : "",
        right : "",
        block : "",
        hidden : "",
        inc : 2,
        price : 200,
        price_cart : 0,
        discount : 20,
        addcart : 0,
        cart_token : 1,
        cartinc1 : "",
        carddec1 : "",
        cart_5 : 0,
        but_dis : false,
        but_dis2 : true
      },
      {
        name : "Mango",
        image : require("../Pages/images/mango.jfif"),
        token : 0,
        top : "",
        right : "",
        block : "",
        hidden : "",
        inc : 2,
        price : 350,
        price_cart : 0,
        discount : 20,
        addcart : 0,
        cart_token : 1,
        cartinc1 : "",
        carddec1 : "",
        cart_5 : 0,
        but_dis : false,
        but_dis2 : true
      },
      {
        name : "Graphs",
        image : require("../Pages/images/graphs.avif"),
        token : 0,
        top : "",
        right : "",
        block : "",
        hidden : "",
        inc : 2,
        price : 250,
        price_cart : 0,
        discount : 10,
        addcart : 0,
        cart_token : 1,
        cartinc1 : "",
        carddec1 : "",
        cart_5 : 0,
        but_dis : false,
         but_dis2 : true
      },
      {
        name : "Banana",
        image : require("../Pages/images/download.jfif"),
        token : 0,
        top : "",
        right : "",
        block : "",
        hidden : "",
        inc : 2,
        price : 200,
        price_cart : 0,
        discount : 15,
        addcart : 0,
        cart_token : 1,
        cartinc1 : "",
        carddec1 : "",
        cart_5 : 0,
        but_dis : false,
        but_dis2 : true
      },
      {
        name : "Kivi",
        image : require("../Pages/images/kivi.jfif"),
        token : 0,
        top : "",
        right : "",
        block : "",
        hidden : "",
        inc : 2,
        price : 450,
        price_cart : 0,
        discount : 25,
        cartinc1 : "",
        carddec1 : "",
        cart_5 : 0,
        addcart : 0,
        cart_token : 1,

        but_dis : false,
        but_dis2 : true
      },
      {
        name : "Pinaple",
        image : require("../Pages/images/pinapple.jfif"),
        token : 0,
        top : "",
        right : "",
        block : "",
        hidden : "",
        inc : 2,
        price : 180,
        price_cart : 0,
        discount : 5,
        addcart : 0,
        cart_token : 1,
        cartinc1 : "",
        carddec1 : "",
        cart_5 : 0,
        but_dis : false,
        but_dis2 : true

      },
      {
        name : "Strawberry",
        image : require("../Pages/images/straw.jfif"),
        token : 0,
        top : "",
        right : "",
        block : "",
        hidden : "",
        inc : 2,
        price : 550,
        price_cart : 0,
        discount : 30,
        addcart : 0,
        cart_token : 1,
        cartinc1 : "",
        carddec1 : "",
        cart_5 : 0,
        but_dis : false,
        but_dis2 : true
      },
    ]
  },
  reducers: {
    offset_0 : (state,action) => {
      console.log("bzgbgb");
      action.payload.change.current.style.position = "absolute"
      action.payload.change.current.style.left = "-470px"
      action.payload.dis.current.disabled = false
     },
   asok : (state,action) => {
    console.log("bzgbgb");
    action.payload.change.current.style.position = "absolute"
    action.payload.change.current.style.left = "-470px"
    action.payload.dis.current.disabled = false
   },
    incrementByAmount: (state, action) => {
        console.log("obj",action);
     
         action.payload.change.current.style.position = "absolute"
         action.payload.change.current.style.left = "-65px"
         action.payload.dis.current.disabled = true
     
    
    
     console.log(action);
    
    },
    Handlefunction: (state, action) => {
        console.log(action.payload.current);
        /* action.payload.current.style.display = 'none'; */
    },
    wishlistactive : (state,action) => {
      if(state.cart[action.payload].inc % 2 == 0){
        state.cart[action.payload].block = "none"
        state.cart[action.payload].hidden = "block"
        state.cart[action.payload].top = "20px"
        state.cart[action.payload].right = "20px"
        state.cart[action.payload].token = 1
      }
      else{
        state.cart[action.payload].block = "block"
        state.cart[action.payload].hidden = "none"
        state.cart[action.payload].top = ""
        state.cart[action.payload].right = ""
        state.cart[action.payload].token = 0
      }
      state.cart[action.payload].inc++;

     
    },
    Addcart : (state,action) => {
        if(state.cart[+action.payload].cart_token){
          state.tot_cart += 1; 
          state.cart[+action.payload].cart_5 += 1;
          state.cart[+action.payload].price_cart = state.cart[+action.payload].price;
          state.cart[+action.payload].cart_token = 0
        }
        if(state.tot_cart == 0){
          state.add_cart = "none"
        }
        else{
          state.add_cart = "block"
        }
        console.log(state.tot_cart);
    },
    cartinc : (state,action) => {
       
           /* console.log(el.cart_5); */
           
           if( state.cart[+action.payload].cart_5 == 1){
              state.cart[+action.payload].cartinc1 = "-20px"
              state.cart[+action.payload].but_dis2 = 'false'
              state.cart[+action.payload].but_dis = 'false'
              state.cart[+action.payload].price_cart += state.cart[+action.payload].price;
              state.cart[+action.payload].cart_5++;
             
              
           }
           else if( state.cart[+action.payload].cart_5 == 2){
            state.cart[+action.payload].cartinc1 = "-44px"
            state.cart[+action.payload].but_dis = 'false'
            state.cart[+action.payload].but_dis2 = 'false'
            state.cart[+action.payload].price_cart += state.cart[+action.payload].price;
            state.cart[+action.payload].cart_5++;
           
            
         }
         else if( state.cart[+action.payload].cart_5 == 3){
          state.cart[+action.payload].cartinc1 = "-68px"
          state.cart[+action.payload].but_dis = 'false'
          state.cart[+action.payload].but_dis2 = 'false'
          state.cart[+action.payload].price_cart += state.cart[+action.payload].price;
          state.cart[+action.payload].cart_5++;
         
          
       }
       else if( state.cart[+action.payload].cart_5 == 4){
        state.cart[+action.payload].cartinc1 = "-93px"
        state.cart[+action.payload].but_dis = 'false'
        state.cart[+action.payload].but_dis2 = 'false'
        state.cart[+action.payload].price_cart += state.cart[+action.payload].price;
        state.cart[+action.payload].cart_5++;
       
        
     }
    /*  else if( state.cart[+action.payload].cart_5 == 5){
      state.cart[+action.payload].cartinc1 = "-93px"
      state.cart[+action.payload].but_dis = 'false'
      state.cart[+action.payload].but_dis2 = 'false'
     
     
   } */
           
   else{
    state.cart[+action.payload].cartinc1 = "-93px"
            state.cart[+action.payload].but_dis = 'true'
            state.cart[+action.payload].but_dis2 = 'false'
           }


          

      
    },
    cartdec : (state,action) => {
        if(state.cart[+action.payload].cart_5 == 1){
          state.cart[+action.payload].but_dis2 = 'true'
        }
        else if(state.cart[+action.payload].cart_5 == 2){
          state.cart[+action.payload].cartinc1 = "2px"
          state.cart[+action.payload].but_dis = 'false'
          state.cart[+action.payload].price_cart -= state.cart[+action.payload].price;
          state.cart[+action.payload].cart_5--;
        }
        else if(state.cart[+action.payload].cart_5 == 3){
          state.cart[+action.payload].cartinc1 = "-20px"
          state.cart[+action.payload].but_dis = 'false'
          state.cart[+action.payload].price_cart -= state.cart[+action.payload].price;
          state.cart[+action.payload].cart_5--;
        }
        else if(state.cart[+action.payload].cart_5 == 4){
          state.cart[+action.payload].cartinc1 = "-44px"
          state.cart[+action.payload].price_cart -= state.cart[+action.payload].price;
          state.cart[+action.payload].but_dis = 'false'
          state.cart[+action.payload].cart_5--;
        }
        else if(state.cart[+action.payload].cart_5 == 5){
          state.cart[+action.payload].cartinc1 = "-68px"
          state.cart[+action.payload].but_dis = 'false'
          state.cart[+action.payload].price_cart -= state.cart[+action.payload].price;
          state.cart[+action.payload].cart_5--;
        }
       
      
        
    },
    Remove_cart : (state,action) => {
      state.cart[+action.payload].cartinc1 = "2px"
      state.cart[+action.payload].cart_token = 1;
      state.cart[+action.payload].cart_5 = 0;
      state.cart[+action.payload].price_cart = 0;
      state.tot_cart -= 1;
      if(state.tot_cart == 0){
        state.add_cart = "none"
      }
      else{
        state.add_cart = "block"
      }
      
    }
  /*   Buynow : (state,action) => {
      if(state.cart[+action.payload].cart_token){
        state.tot_cart += 1; 
        state.cart[+action.payload].cart_token = 0
      }
      if(state.tot_cart == 0){
        state.add_cart = "none"
      }
      else{
        state.add_cart = "block"
      }
      console.log(state.tot_cart);
  } */
  }
})

// Action creators are generated for each case reducer function
export const { incrementByAmount ,Handlefunction,wishlistactive,Addcart,cartinc,cartdec,Remove_cart,asok,offset_0} = counterSlice.actions

export default counterSlice.reducer