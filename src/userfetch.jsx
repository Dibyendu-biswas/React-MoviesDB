import React, { useEffect, useState } from 'react'
 const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`

const usefetch = (params) => {
const [loading,setLoading]=useState(true)
const [error,setError]=useState({show:false,msg:""})
const [userData,setUserData]=useState(null)

const getData=async(api)=>{
  setLoading(true)
  try {
    const response=await fetch(api)
    const data= await response.json()
    console.log(data);
    if(data.Response === "True"){
      setUserData(data.Search ||data)
      setError({show:false,msg:""})
    }else{
      setError({show:true,msg:data.Error})
    }

    setLoading(false)
  } catch (error) {
    console.log(error);
  }
}

useEffect(()=>{
  getData(`${API_ENDPOINT}${params}`)
},[params])

  return{loading,error,userData}
}
export default usefetch;