import { useEffect, useState } from "react"
import {useSelector,useDispatch} from "react-redux"
import { DecCount, IncCount } from "./Redux/CountReducer/Actions"
import { AddTodo, getTodos } from "./Redux/TodoReducer/Actions"
function App() {
  const {count}=useSelector(store=>store.counter)
  const {todos}=useSelector(store=>store.todos)
  const dispatch=useDispatch()
  const [todo,setTodo]=useState("")
  useEffect(()=>{
    let Unsubscribe=()=>dispatch(getTodos())
    return ()=>Unsubscribe()
  },[dispatch])

  const Increment=()=>{
    dispatch(IncCount(1))
  }
  const Decrement=()=>{
    dispatch(DecCount(1))
  }
  const Add_Todo=()=>{
    dispatch(AddTodo(todo))
  }
  // console.log(todos);
  return (
    <>
    <div className='text-center'>
      <h1 className="font-bold text-3xl p-4"> Count:{count}</h1>
      <button onClick={Increment} className="border p-2 rounded-lg m-1">increment count</button>
      <button onClick={Decrement} className="border p-2 rounded-lg m-1">decrement count</button>
    </div>
    <div className="m-4 p-2  text-center">
          <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder="Enter a todo to add" className="outline-none p-2 rounded-lg border"/>
          <button onClick={Add_Todo} className="border rounded-lg p-2 m-2">Add Todo</button>

     <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 place-items-center">
       {
        todos.map((todo,index)=>
          (<div key={index}>
            <img src={todo.image} className="border p-2 w-64 h-64" alt="data"/>
          </div>)
          )
      }
     </div>
    </div>
    </>
  );
}

export default App;
