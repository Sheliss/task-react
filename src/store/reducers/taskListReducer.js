const initState = {
    data: {},
    loading: true
}

const taskListReducer = (state = initState, action) => {
    switch(action.type) {
        case "TASK_LIST_REQUEST":
            return {
                ...state,
                loading: true,
                data: {}
            };
        case "TASK_LIST_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case "TASK_LIST_UPDATE":
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        default:
            return state
    }
}

export default taskListReducer;