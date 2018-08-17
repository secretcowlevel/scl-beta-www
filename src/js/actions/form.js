export const setFormValues = (values) => {
    return {
        type: 'SET_FORM_VALUES',
        values
    }
}

export const submitRegistrationForm = (values) => {
    return {
        type: 'SUBMIT_REGISTRATION_FORM',
        values
    }
}

export const setErrorMessage = (message) => {
    return {
        type: 'SET_ERROR_MESSAGE',
        message
    }
}
