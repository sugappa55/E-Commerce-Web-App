//ACTION TYPES

export const ADD_COUNT="ADD_COUNT"
export const DEC_COUNT="DEC_COUNT"



//ACTIONS CREATORS

export const IncCount=(payload)=>{
    return { 
        type:ADD_COUNT,
        payload
    }
}

export const DecCount=(payload)=>{
    return { 
        type:DEC_COUNT,
        payload
    }
}