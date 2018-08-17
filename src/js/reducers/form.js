
// Initial orgs state
const formsInitialState = {
    invite: '',
    username: '',
    email: ''
}

function formReducer(state = formsInitialState, action) {
    switch (action.type) {
        case 'SET_FORM_VALUES':
            return {
                ...state,
                ...action.values
            }
        default:
        console.log('BANANA')
            return state
    }
}

export default formReducer
