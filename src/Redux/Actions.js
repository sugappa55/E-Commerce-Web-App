import { api } from "../utils/api"
//ACTION TYPES


export const STORE_DATA="STORE_DATA"






//ACTION CREATORS

export const StoreData=(payload)=>{
    return {
        type:STORE_DATA,
        payload
    }
}

export function GetData(){
    return (dispatch)=>{
    try {
        api.get("/products").then(({data})=>
        dispatch(StoreData(data))
        
        )
    } catch (e) {
        console.log(e)
    }        
    }
}