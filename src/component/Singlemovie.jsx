import React from 'react'
import { useParams,Link} from 'react-router-dom'
import usefetch from '../userfetch'
const Singlemovie = () => {

  const {id} = useParams()
  console.log(id);
  const {loading,error,userData:movie}=usefetch(`&i=${id}`)
  if(loading){
    return <h1>loading.....</h1>
  }
  if(error.show){
    return(
      <div>
        <p>{error.msg}</p>
        <Link to="/">
          <h3>back to home</h3>
        </Link>
      </div>
    )
  }
  const{ Poster: poster, Title: title, Plot: plot, Year: year,Director
:director,Genre:genre,Awards:awards,Language:language


}=movie
  return (
    <section className='singlepage'>
      <div className='singleList'>
        <img src={poster} alt={title} />
        <div>
        <p className='plot'>{plot}</p>
        <p>{title}</p>
        <p>Director: <span style={{color:"lightsalmon"}}>{director}</span> </p>
        <p>Movie Type: <span style={{color:"lightsalmon"}}>{genre}</span> </p>
        <p>Language: <span style={{color:"lightsalmon"}}>{language}</span> </p>
        <p>Awards: <span style={{color:"lightsalmon"}}>{awards}</span> </p>
        <p>Realesed: <span style={{color:"lightsalmon"}}>{year}</span> </p>

        <Link to="/">
          <h3 style={{color:"red",fontSize:"2rem",textTransform:"capitalize",textAlign:"center" }}>back to home</h3>
        </Link>
        </div>
        
    
      </div>
   
    </section>
  )
}

export default Singlemovie