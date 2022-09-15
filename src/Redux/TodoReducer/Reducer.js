import { ADD_TODO, GET_TODOS } from "./Actions";

const state={
    todos:[]
};

export const TodoReducer=(store=state,{type,payload})=>{
    switch (type) {
        case ADD_TODO:return {...store,todos:[...store.todos,payload]}
        case GET_TODOS:return {...store,todos:[...store.todos,...payload]}
    
        default:return store
    }
}

