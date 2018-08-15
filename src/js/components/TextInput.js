import React, {Component} from 'react'
import PropTypes from 'prop-types'

const {
    string, bool, func, object, any
} = PropTypes

const styles = {
    label: {
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'content-box',
        color: '#333',
        fontWeight: '600',
        fontSize: '16px',
        marginBottom: 3
    },
    input: {
        position: 'relative',
        width: '80%',
        border: '1px solid rgb(189, 189, 189)',
        height: '32px',
        paddingLeft: '10px',
        paddingRight: '40px',
        fontSize: '16px'

    },
    inputContainer: {
        position: 'relative'
    }
}

export default class InputField extends Component {
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
          <div style={{padding: '11px 0'}}>

              <label
                  style={styles.label}
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
                      style={{
                          ...styles.input,
                          border: errorMessage ? '1px solid rgb(255, 0, 0)' : '1px solid rgb(189, 189, 189)',
                          backgroundColor: disabled ? 'rgba(149, 149, 149, 0.1)' : errorMessage ? 'rgba(255, 0, 0, 0.10)' : 'rgb(255, 255, 255)'
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
