import React, { useEffect, useState } from 'react'
import GenreList from '../Constant/GenreList'
import MovieList from './MovieList'
import GlobalApi from '../Services/GlobalApi'

function GenreMovieList() {
  const [genreList, setGenreList] = useState([])
  useEffect(()=>{
    getGenreList()
  }, [])

  const getGenreList=()=> {
    GlobalApi.getGenreList().then((resp)=>{
      console.log(resp.data)
      setGenreList(resp.data.genres)
    })
  }

  return (
      <div>
        {genreList.map((item, index)=>index<=4&&(
          <div className='p-8 px-8 md:px-16'>
              <h2 className='text-[20px] text-white font-bold'>{item.name}</h2>
              <MovieList genreId={item.id} index_={index}/>
          </div>
        ))}   
      </div>
  )
}

export default GenreMovieList
