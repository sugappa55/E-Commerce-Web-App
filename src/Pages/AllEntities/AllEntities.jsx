import React from 'react'
import { useEffect } from "react";

import {useDispatch, useSelector} from "react-redux"
import {GetData} from "../../Redux/Actions"

const AllEntities = () => {
  let dispatch=useDispatch()
  useEffect(()=>{
    let unSubscribe=()=>dispatch(GetData())
    return ()=>unSubscribe()
  },[dispatch])
  return (
    <div>
      all
    </div>
  )
}

export default AllEntities
