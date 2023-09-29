// import axios from 'axios';
import React, {  useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Tag = () => {
    const [tag,setTag]=useState("")
 
    const{gif,loading,fetchData}=useGif(tag);
   
    function clickHandler(){
        fetchData(tag)

    }
    function changeHandler(event){
        setTag(event.target.value)
    }

  return (
    <div className='bg-blue-400 mx-auto mt-4 w-11/12 
     max-w-[700px] flex flex-col items-center border
      border-black rounded-md  gap-y-5 '>
        <div className='text-3xl font-semibold underline mt-4 mx-auto'>RANDOM {tag} GIF</div>
        {/* <div className='h-[2px] bg-black w-4/12 mx-auto '></div> */}
        {
            loading?(<Spinner/>):( <img src={gif} alt="gif" className='w-[350px] '/>)
        }
        <input 
        className='w-9/12 text-lg py-2 rounded-lg mb-[3px] text-center '
        onChange={changeHandler}
        placeholder='Enter the  type of gif you want '
        value={tag}/>
        <button onClick={clickHandler} className='w-9/12 bg-green-100 py-2 mx-auto font-semibold text-xl rounded-md mb-2 text-center'>GENERATE</button>
    </div>
  )
}
export default Tag;
