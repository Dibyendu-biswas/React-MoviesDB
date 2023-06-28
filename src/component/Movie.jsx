import React from 'react'
import { useGlobalContext } from '../Context'
import { Link } from 'react-router-dom'
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'
const Movie = () => {
const {loading,movies}=useGlobalContext()
if(loading){
  return(<div>loading.....</div>)
}
  return (
    <section className='movie'>
      {
        movies.map((item)=>{
          const {imdbID:id, Poster:poster,Year:year,Title:title}=item
          return(
            <Link className='movieList' to={`/movies/${id}`} key={id}>
              <article>
                <img src={poster ==="N/A"?url:poster} alt={title} />
                <p>{title}</p>
                <p>{year}</p>
              </article>
            </Link>
          )
        })
      }
    </section>
  )
}

export default Movie