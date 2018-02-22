

const initialState = {
    user: {
        name: 'Joshua'
    }
}

const LOG_IN = 'LOG_IN'

export default function(state = initialState, action){
    switch(action.type){
        case LOG_IN:

        return {...state, user: action.payload};

        default:
        return state;
    }
};