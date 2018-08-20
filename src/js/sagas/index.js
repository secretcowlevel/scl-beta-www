import {
    call, put, takeLatest
} from 'redux-saga/effects'

import {postData, getBaseDomain} from '../utilities/networking'
import {setErrorMessage} from '../actions/form'
// import history from '../index'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions

function* fetchPostRegistration(action) {
    const options = {
        url: `${getBaseDomain()}/register`,
        headers: {},
        data: action.values
    }
    let result = yield call(postData, options)
    const data = yield call([result, result.json])
    if (data.statusCode !== 200) {
        yield put(setErrorMessage(data.message))
    } else {
        yield put(setErrorMessage('Account Created! Check your email to continue!'))
    }
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
