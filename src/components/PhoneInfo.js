import React, { Component, Fragment } from 'react';

class PhoneInfo extends Component {
  state = {
    editing: false,
    name: '',
    phone: '',
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state !== nextState) {
      return true;
    }
    return this.props.info !== nextProps.info; //false
  }

  handleToggleEdit = () => {
    const { info, onUpdate } = this.props;

    if (this.state.editing) {
      onUpdate(info.id, {
        name: this.state.name,
        phone: this.state.phone,
      });
    } else {
      this.setState({
        name: info.name,
        phone: info.phone,
      });
    }

    this.setState({
      editing: !this.state.editing,
    });
  };

  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, phone } = this.props.info;
    const { editing } = this.state;

    const li = {
      border: '1px solid black',
      padding: '8px',
      marginBottom: '8px',
      listStyle: 'none',
    };

    return (
      <Fragment>
        <li style={li}>
          {editing ? (
            <Fragment>
              <div>
                <input
                  name="name"
                  onChange={this.handleChange}
                  value={this.state.name}
                />
              </div>
              <div>
                <input
                  name="phone"
                  onChange={this.handleChange}
                  value={this.state.phone}
                />
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <div>{name}</div>
              <div>{phone}</div>
            </Fragment>
          )}

          <button onClick={this.handleToggleEdit}>
            {editing ? '적용' : '수정'}
          </button>
          <button onClick={this.handleRemove}>삭제</button>
        </li>
      </Fragment>
    );
  }
}

export default PhoneInfo;
