
// Initial orgs state
const formsInitialState = {
    values: {
        code: '',
        username: '',
        email: ''
    },
    message: null
}

function formReducer(state = formsInitialState, action) {
    switch (action.type) {
        case 'SET_FORM_VALUES':
            return {
                ...state,
                values: action.values
            }
        case 'SET_ERROR_MESSAGE':
            return {
                ...state,
                message: action.message
            }
        default:
            return state
    }
}

export default formReducer
