import {
    call, put, takeLatest
} from 'redux-saga/effects'

import {postData} from '../utilities/networking'
import {setErrorMessage} from '../actions/form'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions


function* fetchPostRegistration(action) {
    console.log(JSON.stringify(action.values, null, 2))
    const options = {
        url: 'http://localhost:1337/register',
        headers: {},
        data: action.values
    }
    let result = yield call(postData, options)
    const data = yield call([result, result.json])
    if (data.statusCode !== 200) {
        yield put(setErrorMessage(data.message))
    }
    console.log(JSON.stringify(data, null, 2))
}
/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
    yield takeLatest('SUBMIT_REGISTRATION_FORM', fetchPostRegistration)
}

export default mySaga
