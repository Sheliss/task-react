export const task_list_request = () => {
    return {
        type: 'TASK_LIST_REQUEST'
    };
};

export const task_list_success = (data) => {
    return {
        type: 'TASK_LIST_SUCCESS',
        payload: data
    };
};

export const task_list_update = (data) => {
    return {
        type: 'TASK_LIST_UPDATE',
        payload: data
    };
};

export const task_delete = (index) => {
    return {
        type: 'TASK_DELETE',
        payload: index
    };
};