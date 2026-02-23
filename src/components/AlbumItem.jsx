import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({ image, name, desc, id }) => {

  const navigate = useNavigate()

  return (
    <div onClick={()=>navigate(`/album/${id}`)} className='min-w-[200px] p-3 rounded-lg cursor-pointer hover:bg-[#ffffff26] transition-all duration-200'>
      <img className='rounded-md mb-2' src={image} alt={name} />
      <p className='text-white font-semibold truncate'>{name}</p>
      <p className='text-slate-400 text-sm truncate'>{desc}</p>
    </div>
  )
}

export default AlbumItem
