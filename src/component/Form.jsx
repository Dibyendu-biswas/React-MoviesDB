import React from 'react'
import { useGlobalContext } from '../Context'
const Form = () => {
    const {query ,setQuery,error}=useGlobalContext()
  return (
    <div className='searchbar'>
        <form onSubmit={(e)=>e.preventDefault()}>
            <h1>search </h1>
            <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder='Search Here...' />
        </form>
        {
          error.show && <p className='error'>{error.msg}</p>
        }
    </div>
  )
}

export default Form