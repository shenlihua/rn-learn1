//actions
const NAMESPACE = 'Index'
const INIT_DATA = NAMESPACE+'INIT_DATA'

export default (state,action)=>{
    if(!state){
        state = {flow_img_data:[]}
    }
    switch (action.type) {
        case INIT_DATA:
            return {
                ...state,
                flow_img_data: action.flow_img_data
            }

        default:
            return state;

    }
}

//action creators
export const initData = (data)=>{
    return {type:INIT_DATA,flow_img_data}
}