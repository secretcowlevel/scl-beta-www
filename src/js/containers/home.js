import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'

import TextInput from '../components/TextInput'
export default class Home extends Component {
    static propTypes= {

    }

    static styles = {
        backdrop: {
            background: "url('http://doomtroopergame.com/assets/img/dt-bg.jpg') no-repeat center fixed",
            backgroundSize: 'cover',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        },
        container: {
            background: '#FFF'
        },
        containerHeader: {
            padding: '5px'
        },
        containerContent: {
            margin: '20px'
        }
    }

    componentDidMount() {
        // console.log('did it');
    }

    render() {
        return (
            <div style={Home.styles.backdrop}>
                <div style={Home.styles.container}>
                    <div style={Home.styles.containerHeader}>
                        Beta Registration
                    </div>
                    <div style={Home.styles.containerContent}>
                        <TextInput label="Invite Code" type="text" />
                        <TextInput label="Username" type="text" />
                        <TextInput label="Email Address" type="text" />
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}
