const githubReducer = (state, action) => {
    switch(action.type) {
        case 'GET_USERS':{
            return{
                ...state,
                users: action.payload,
                loading: action.loading
            }
        }
        case 'GET_USER':{
            return{
                ...state,
                user: action.payload,
                loading: false
            }
        }
        case 'SET_LOADING':{
            return{
                ...state,
                loading: false
            }
        }
        default: 
        return state;
    }

}

export default githubReducer;