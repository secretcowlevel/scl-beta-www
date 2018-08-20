import React from 'react'
import {
    HashRouter, Route, Switch, Redirect
} from 'react-router-dom'
// import {createBrowserHistory} from 'history'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './app'
import Home from './containers/home'

import configureStore from './store'

const store = configureStore()

// const history = createBrowserHistory()
// export default history

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/finished" component={App} />
                <Redirect from="*" to="/" />
            </Switch>
        </HashRouter>
    </Provider>, document.getElementById('scl-container')
)

// if (module.hot) {
//     module.hot.accept('./app', () => {
//         const NextApp = require('./app').default; // eslint-disable-line
//
//         ReactDOM.render(
//             <AppContainer>
//                 <NextApp />
//             </AppContainer>, document.getElementById('scl-container'));
//     });
// }
