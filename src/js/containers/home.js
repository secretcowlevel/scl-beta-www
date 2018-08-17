import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import TextInput from '../components/TextInput'
import {setFormValues, submitRegistrationForm} from '../actions/form'

class Home extends Component {
    static propTypes= {

    }

    static styles = {
        backdrop: {
            // background: "url('http://doomtroopergame.com/assets/img/dt-bg.jpg') no-repeat center fixed",
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

    componentDidMount() {
        // console.log('did it');
    }

    onType = (e) => {
        const newValues = {...this.props.values}
        newValues[e.target.name] = e.target.value
        this.props.setFormValues(newValues)
    }

    submitForm = (e) => {
        e.preventDefault()
        this.props.submitRegistrationForm(this.props.values)
    }

    render() {
        console.log(`+++ ${JSON.stringify(this.props.values)}`)
        return (
            <div style={Home.styles.backdrop}>
                <div style={Home.styles.container}>
                    <div style={Home.styles.containerHeader}>
                        Beta Registration
                        {this.props.message && <div style={{color: 'red'}}>{this.props.message}</div>}
                    </div>
                    <div style={Home.styles.containerContent}>
                        <TextInput onChange={this.onType} id="code" name="code" value={this.props.values.code} label="Invite Code" type="text" />
                        <TextInput onChange={this.onType} id="username" name="username" value={this.props.values.username} label="Username" type="text" />
                        <TextInput onChange={this.onType} id="email" name="email" value={this.props.values.email} label="Email Address" type="text" />
                        <button onClick={this.submitForm} style={Home.styles.button} type="submit">Submit</button>
                    </div>
                </div>
            </div>
        )
    }
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
