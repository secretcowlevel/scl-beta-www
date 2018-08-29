import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import bg from 'img/bg.jpg' // eslint-disablel-webine
import buttonbg from 'img/button.png' // eslint-disable-line
import loadingImg from 'img/loading.gif';
import fogImg from 'img/fog.png';
import hudBg from 'img/hud-bg.png';
import SupermolotFont from 'fonts/TT-Supermolot-Regular.ttf';
import LoadedFont from 'fonts/loaded.ttf';
import TextInput from '../components/TextInput'
import {setFormValues, submitRegistrationForm} from '../actions/form'
import AppStyles from 'styles/app';

class Home extends Component {
    static propTypes= {

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
            <div style={AppStyles.container}>
                <img src={loadingImg} style={{...AppStyles.loading, animation: 'fadeOut 0.3s ease-out 1.7s forwards'}} />

                <div style={{...AppStyles.primaryText, ...AppStyles.glowText, ...AppStyles.hud, display: this.state.showForm ? 'block' : 'block'}}>

                    <img src={hudBg} style={AppStyles.hudBg} />

                    <div style={{...AppStyles.fog}}>
                        <img src={fogImg} style={AppStyles.imgResponsive} />
                    </div>

                    <div style={{...AppStyles.fogTwo}}>
                        <img src={fogImg} style={AppStyles.imgResponsive} />
                    </div>

                    <div style={{...AppStyles.flexCenter, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%', padding: '10%', boxSizing: 'border-box'}}>
                        <div>
                            <h1 className="title" style={{...AppStyles.title, fontFamily: LoadedFont}}>Doomtrooper</h1>
                            <div className="introText" style={{fontFamily: SupermolotFont}}>
                                If you've been invited to play Doomtrooper, please input your code below! The code will create an account and email you the information to install the client!
                            </div>

                            {this.props.message && <div style={{color: 'red'}}>{this.props.message}</div>}
                            <TextInput onChange={this.onType} id="code" name="code2" value={this.props.values.code} label="Invite Code" type="text" />
                            <TextInput onChange={this.onType} id="email" name="email" value={this.props.values.email} label="Email Address" type="text" />
                            <TextInput onChange={this.onType} id="username" name="username" value={this.props.values.username} label="Choose Username" type="text" />
                            <div style={AppStyles.textCenter}>
                                <button className="collectionButton" disabled={this.state.disabledButton} onClick={this.submitForm} style={{...AppStyles.button, backgroundImage: `url(${buttonbg})`, fontFamily: SupermolotFont}} type="submit">{this.state.disabledButton ? 'Submitting..' : 'Register'}</button>
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
