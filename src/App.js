import { useEffect } from "react";
import { GetData } from "./Redux/Actions";
import {useDispatch, useSelector} from "react-redux"
import EntityCard from "./Components/EntityCard"
import Navbar from "./Components/Navbar/Navbar";

function App() {
  let {products}=useSelector(store=>store)
  let dispatch=useDispatch()
  // useEffect(()=>{
  //   let unSubscribe=()=>dispatch(GetData())
  //   return ()=>unSubscribe()
  // },[dispatch])
  
  return (
    <>
    <Navbar/>
    <div className='flex flex-wrap'>
     {
      products?.map(product=><EntityCard product={product} key={product.id}/>)
     }
    </div>
    </>
  );
}

export default App;
