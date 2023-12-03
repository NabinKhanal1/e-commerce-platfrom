const initialData={
    name:'Nabin'
}

const studentReducer=(state=initialData,action)=>{
    switch(action.type){
        case  'CHANGE_NAME':
            return{
                ...state,
                name:action.payload
            }
        default:
            return state
    }
}

export default studentReducer