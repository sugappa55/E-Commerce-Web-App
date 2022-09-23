import { CircularProgress } from '@mui/material'
import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <CircularProgress size={300}/>
    </div>
  )
}

export default React.memo(Loader)
