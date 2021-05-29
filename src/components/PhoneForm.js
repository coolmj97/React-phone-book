import React, { Component, Fragment } from 'react';

class PhoneForm extends Component {
  input = null;

  state = {
    name: '',
    phone: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate({
      name: this.state.name,
      phone: this.state.phone,
    });
    this.setState({
      name: '',
      phone: '',
    });
    this.input.focus();
  };

  render() {
    const input = {
      height: '30px',
      marginRight: '8px',
    };

    const button = {
      height: '30px',
    };

    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <input
            style={input}
            name="name"
            placeholder="이름"
            value={this.state.name}
            onChange={this.handleChange}
            ref={(ref) => (this.input = ref)}
          />
          <input
            style={input}
            name="phone"
            placeholder="전화번호"
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <button style={button} type="submit">
            등록
          </button>
        </form>
      </Fragment>
    );
  }
}

export default PhoneForm;
