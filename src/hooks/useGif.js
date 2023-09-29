// import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

const API_KEY='oTOSsp1IhcVO2wFrnnis3yo1X1DBz3q5'
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
    const[gif,setGif]=useState("");
    const [loading ,setLoading ]=useState(false)
  
    async function fetchData(tag){
        setLoading(true);
        
        const {data} =await axios.get(tag?`${url}&tag=${tag}`:url) ;
        const imageSource = data.data.images.downsized_large.url;
         setGif(imageSource)
         setLoading(false);

        console.log(imageSource)
    
    } 
    useEffect(()=>{
        fetchData('car')


    },[])
    return {gif ,loading,fetchData }
}
export default useGif
