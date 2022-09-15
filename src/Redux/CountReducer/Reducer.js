import { ADD_COUNT, DEC_COUNT } from "./Actions"

const state={
    count:0
}

export const CounterReducer=(store=state,{type,payload})=>{

    switch(type){
        case ADD_COUNT:return {...store,count:store.count+payload};
        case DEC_COUNT:return {...store,count:store.count-payload};
        default: return store

    }
}