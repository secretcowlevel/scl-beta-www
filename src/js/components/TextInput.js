import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SupermolotFont from 'fonts/TT-Supermolot-Regular.ttf';

const {
    string, bool, func, object, any
} = PropTypes

const styles = {
    label: {
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'content-box',
        color: '#a9fffc',
        fontSize: '1rem',
        textTransform: 'uppercase',
        textShadow: '0 0 0.3rem',
        letterSpacing: '0.1rem',
        marginBottom: '0.3rem'
    },
    input: {
        position: 'relative',
        width: '100%',
        padding: '0.5rem 0.5rem',
        color: '#a9fffc',
        fontSize: '1.5rem',
        textShadow: '0 0 0.3rem',
        background: 'rgba(7, 7, 8, 0.8)',
        border: '1px solid rgb(45, 88, 87)',
        outline: 'none',
        boxSizing: 'border-box'

    },
    inputContainer: {
        position: 'relative'
    }
}

export default class TextInput extends Component {
  static propTypes = {
      id: string.isRequired,
      name: string.isRequired,
      onChange: func.isRequired,
      // optional!
      errorMessage: string,
      type: string,
      label: string,
      value: string,
      disabled: bool,
      placeholder: string
  }

  state = {
      showPassword: false
  }

  togglePassword = (e) => {
      e.preventDefault()
      this.setState({
          showPassword: !this.state.showPassword
      })
  }

  render() {
      const {
          label, id, errorMessage, type, name, value, onChange, disabled, placeholder
      } = this.props

      const {showPassword} = this.state
      return (
          <div style={{padding: '0 0 0.5rem 0'}}>

              <label
                  className="controlLabel"
                  style={{...styles.label, fontFamily: SupermolotFont}}
                  htmlFor={id}
              >
                  {label}

              </label>
              <div style={styles.inputContainer}>
                  {type === 'password'
                      && (
                          <div style={{position: 'absolute', right: 0, top: '-25px'}}>
                              <a href="" onClick={this.togglePassword}>{showPassword ? 'Hide Password' : 'Show Password'}</a>
                          </div>
                      )}
                  <input
                      autoComplete="off"
                      className="fieldInput"
                      style={{
                          ...styles.input,
                          border: errorMessage ? '1px solid rgb(255, 0, 0)' : styles.input.border,
                          backgroundColor: disabled ? 'rgba(149, 149, 149, 0.1)' : errorMessage ? 'rgba(255, 0, 0, 0.10)' : styles.input.background
                      }}
                      placeholder={placeholder}
                      disabled={disabled ? 'disabled' : ''}
                      type={type === 'password' ? showPassword ? 'text' : 'password' : type || 'text'}
                      name={name}
                      id={id}
                      value={value}
                      onChange={onChange}
                  />
                  {errorMessage && <div style={{color: 'red'}}>{errorMessage}</div>}
              </div>
          </div>
      )
  }
}
