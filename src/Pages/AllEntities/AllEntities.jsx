import React from 'react'
import { useEffect } from "react";

import {useDispatch, useSelector} from "react-redux"
import {GetData} from "../../Redux/Actions"

const AllEntities = () => {
  const data = useSelector((store) => store.products);

  
  return (
    <div>
      all
    </div>
  )
}

export default AllEntities
