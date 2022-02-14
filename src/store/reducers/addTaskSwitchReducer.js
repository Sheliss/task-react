const initState = {
    menuShow: false
}

const addTaskSwitchReducer = (state = initState, action) => {
    switch(action.type) {
        case "SWITCH_ADD_MENU":
            return {
                ...state,
                menuShow: !state.menuShow
            };
        default:
            return state
    }
}

export default addTaskSwitchReducer;