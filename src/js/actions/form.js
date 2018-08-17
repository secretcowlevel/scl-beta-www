export const setFormValues = (values) => {
    console.log(`setFormValues ${JSON.stringify(values)}`)
    return {
        type: 'SET_FORM_VALUES',
        values
    }
}
