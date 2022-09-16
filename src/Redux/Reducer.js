import { STORE_DATA } from "./Actions";

const state={};

export const Reducer=(store=state,{type,payload})=>{

    switch (type) {
        case STORE_DATA:return {...store,products:payload}
            
       
    
        default:return store
            
    }
}