import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import bg from 'img/bg.png' // eslint-disable-line
import TextInput from '../components/TextInput'
import {setFormValues, submitRegistrationForm} from '../actions/form'

class Home extends Component {
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
        },
        button: {
            border: '1px solid gray',
            height: '33px',
            backgroundColor: 'white'
        }
    }

    static propTypes = {
        setFormValues: PropTypes.func.isRequired,
        submitRegistrationForm: PropTypes.func.isRequired,
        values: PropTypes.shape().isRequired,
        message: PropTypes.string
    }

    state = {
        disabledButton: false
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    onType = (e) => {
        const newValues = {...this.props.values}
        newValues[e.target.name] = e.target.value
        this.props.setFormValues(newValues)
    }

    submitForm = (e) => {
        e.preventDefault()
        this.setState({
            disabledButton: true
        })
        this.timeout = setTimeout(() => {
            this.setState({
                disabledButton: false
            })
        }, 2000)
        this.props.submitRegistrationForm(this.props.values)
    }

    render() {
        return (
            <div style={{display: 'flex', width: '100%', height: '100%'}}>
                {window.screen.width > 640 && (
                    <div style={{
                        flex: 1, backgroundColor: 'black', background: `url(${bg}) no-repeat center fixed`, backgroundSize: 'cover'
                    }}
                    >
                left
                    </div>
                )}
                <div style={{flex: 1, backgroundColor: 'white', padding: 50}}>
                    If you've been invited to play Doomtrooper, please input your code below! The code will create an account and email you the information to install the client!
                    {this.props.message && <div style={{color: 'red'}}>{this.props.message}</div>}
                    <TextInput onChange={this.onType} id="code" name="code" value={this.props.values.code} label="Invite Code" type="text" />
                    <TextInput onChange={this.onType} id="email" name="email" value={this.props.values.email} label="Email Address" type="text" />
                    <TextInput onChange={this.onType} id="username" name="username" value={this.props.values.username} label="Choose Username" type="text" />
                    <button disabled={this.state.disabledButton} onClick={this.submitForm} style={Home.styles.button} type="submit">{this.state.disabledButton ? 'Submitting..' : 'Register'}</button>
                </div>
            </div>
        )
    }

    // render() {
    //     return (
    //         <div style={Home.styles.backdrop}>
    //             <div style={Home.styles.container}>
    //                 <div style={Home.styles.containerHeader}>
    //                     Beta Registration
    //                     {this.props.message && <div style={{color: 'red'}}>{this.props.message}</div>}
    //                 </div>
    //                 <div style={Home.styles.containerContent}>
    //                     <TextInput onChange={this.onType} id="code" name="code" value={this.props.values.code} label="Invite Code" type="text" />
    //                     <TextInput onChange={this.onType} id="email" name="email" value={this.props.values.email} label="Email Address" type="text" />
    //                     <TextInput onChange={this.onType} id="username" name="username" value={this.props.values.username} label="Choose Username" type="text" />
    //                     <button onClick={this.submitForm} style={Home.styles.button} type="submit">Register</button>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }
}

const mapStateToProps = state => ({
    values: state.form.values,
    message: state.form.message
})

const mapDispatchToProps = {
    setFormValues,
    submitRegistrationForm
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
