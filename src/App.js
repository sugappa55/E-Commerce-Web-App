import { useEffect } from "react";
import { GetData } from "./Redux/Actions";
import {useDispatch, useSelector} from "react-redux"
import EntityCard from "./Components/EntityCard"

function App() {
  let {products}=useSelector(store=>store)
  let dispatch=useDispatch()
  useEffect(()=>{
    let unSubscribe=()=>dispatch(GetData())
    return ()=>unSubscribe()
  },[dispatch])
  console.log(products)
  
  return (
    <>
    <div className='flex flex-wrap'>
     {
      products?.map(product=><EntityCard product={product}/>)
     }
    </div>
    </>
  );
}

export default App;
