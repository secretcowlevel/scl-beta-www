import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Typist from 'react-typist';
import bg from 'img/bg.jpg' // eslint-disablel-webine
import buttonbg from 'img/button.png' // eslint-disable-line
import loadingImg from 'img/loading.gif';
import fogImg from 'img/fog.png';
import hudBg from 'img/hud-bg.png';
import LoadedFont from 'fonts/loaded.ttf';
import TextInput from '../components/TextInput'
import {setFormValues, submitRegistrationForm} from '../actions/form'

class Home extends Component {
    static propTypes= {

    }

    static styles = {
        primaryText: {
            color: '#a9fffc'
        },
        glowText: {
            textShadow: '0 0 0.3rem'
        },
        textCenter: {
            textAlign: 'center'
        },
        textUpper: {
            textTransform: 'uppercase'
        },
        imgResponsive: {
            display: 'block',
            width: '100%',
            maxWidth: '100%'
        },
        flexCenter: {
            display: 'flex',
            justifyContent: 'center', 
            alignItems: 'center'
        },
        loading: {
            position: 'fixed',
            top: 'calc(50% - 64px)',
            left: 'calc(50% - 64px)',
            width: '128px',
            height: '128px',
        },
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            flex: 1,
            backgroundImage: 'url("http://doomtroopergame.com/assets/img/dt-bg.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'cover'
        },
        backdrop: {
            background: "url('http://doomtroopergame.com/assets/img/dt-bg.jpg') no-repeat center fixed",
            backgroundSize: 'cover',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        hud: {
            position: 'relative',
            width: '90%',
            maxWidth: '35rem',
            opacity: 0,
            animation: 'fadeIn 0.5s ease-out 2s forwards, flicker 0.15s infinite'
        },
        hudBg: {
            display: 'block',
            width: '100%',
            maxWidth: '100%',
            filter: 'drop-shadow(0 0 4rem rgba(0, 0, 0, 1))'
        },
        fog: {
            position: 'absolute',
            top: '12%',
            left: '25%',
            width: '50%',
            opacity: 0,
            transform: 'translateX(75%)',
            animation: 'fog_move 11s linear 7s infinite'
        },
        fogTwo: {
            position: 'absolute',
            top: '5%',
            left: '25%',
            width: '50%',
            opacity: 0,
            transform: 'translateX(75%)',
            animation: 'fog_move 10s linear 4s infinite'
        },
        title: {
            margin: '0 0 2.5rem 0',
            fontFamily: 'Exo-Bold',
            fontSize: '3rem',
            lineHeight: 1,
            animation: 'text-flicker 3s linear infinite'
        },
        titleMobile: {
            fontSize: '2rem'
        },
        inputField: {
            border: '1px solid #a9fffc'
        },
        button: {
            display: 'inline-block',
            fontWeight: 400,
            textAlign: 'center',
            whiteSpace: 'nowrap',
            verticalAlign: 'middle',
            userSelect: 'none',
            border: '1px solid transparent',
            padding: '.8rem 3rem',
            color: '#a9fffc',
            fontSize: '1.1rem',
            lineHeight: 1.5,
            textShadow: '0 0 0.3rem',
            backgroundSize: '100% 100%'
        }
    }

    static propTypes = {
        setFormValues: PropTypes.func.isRequired,
        submitRegistrationForm: PropTypes.func.isRequired,
        values: PropTypes.shape().isRequired,
        message: PropTypes.string
    }

    state = {
        showForm: false,
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

    _handleIntroDone = () => {
        console.log('here');
        this.setState({showForm: true});
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
            <div style={Home.styles.container}>
                <img src={loadingImg} style={{...Home.styles.loading, animation: 'fadeOut 0.3s ease-out 1.7s forwards'}} />

                <div style={{...Home.styles.primaryText, ...Home.styles.glowText, ...Home.styles.hud, display: this.state.showForm ? 'block' : 'block'}}>

                    <img src={hudBg} style={Home.styles.hudBg} />

                    <div style={{...Home.styles.fog}}>
                        <img src={fogImg} style={Home.styles.imgResponsive} />
                    </div>

                    <div style={{...Home.styles.fogTwo}}>
                        <img src={fogImg} style={Home.styles.imgResponsive} />
                    </div>

                    <div style={{...Home.styles.flexCenter, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%', padding: '10%', boxSizing: 'border-box'}}>
                        <div>
                            <h1 className="title" style={{fontFamily: LoadedFont}}>Doomtrooper</h1>
                            <div className="introText">
                                If you've been invited to play Doomtrooper, please input your code below! The code will create an account and email you the information to install the client!
                            </div>

                            {this.props.message && <div style={{color: 'red'}}>{this.props.message}</div>}
                            <TextInput onChange={this.onType} id="code" name="code2" value={this.props.values.code} label="Invite Code" type="text" />
                            <TextInput onChange={this.onType} id="email" name="email" value={this.props.values.email} label="Email Address" type="text" />
                            <TextInput onChange={this.onType} id="username" name="username" value={this.props.values.username} label="Choose Username" type="text" />
                            <div style={Home.styles.textCenter}>
                                <button className="collectionButton" disabled={this.state.disabledButton} onClick={this.submitForm} style={{...Home.styles.button, backgroundImage: `url(${buttonbg})`}} type="submit">{this.state.disabledButton ? 'Submitting..' : 'Register'}</button>
                            </div>
                        </div>
                    </div>
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
