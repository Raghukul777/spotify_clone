import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className='mb-4'>
        <h1 className='text-white text-2xl font-bold mt-6 mb-4'>Featured Albums</h1>
        <div className='flex overflow-auto'>
          {albumsData.map((item) => (
          <AlbumItem
            key={item.id}
            id={item.id}
            name={item.name}
            desc={item.desc}
            image={item.image}
          />
          ))}
        </div>
      </div>

      <div className='mb-4'>
        <h1 className='text-white text-2xl font-bold mt-6 mb-4'>Today's biggest hits</h1>
        <div className='flex overflow-auto'>
          {songsData.map((item) => (
          <SongItem
            key={item.id}
            id={item.id}
            name={item.name}
            desc={item.desc}
            image={item.image}
          />
          ))}
        </div>
        
      </div>
    </>
  )
}

export default DisplayHome
