import axios from "axios"
//ACTION TYPES
export const ADD_TODO="ADD_TODO"
export const GET_TODOS="GET_TODOS"



//ACTIONS CREATORS

export const AddTodo=(payload)=>{
    return { 
        type:ADD_TODO,
        payload
    }
}

const GetTodos=(todos)=>{
    return {
        type:GET_TODOS,
        payload:todos
    }
}

export const getTodos=()=>(dispatch)=>{
    axios.get("https://fakestoreapi.com/products").then(({data})=>console.log(data))
    fetch("https://fakestoreapi.com/products")
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        dispatch(GetTodos(data))
    })

}