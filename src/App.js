import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 3;

  state = {
    information: [
      {
        id: 0,
        name: '홍길동',
        phone: '010-0000-0001',
      },
      {
        id: 1,
        name: '홍길서',
        phone: '010-0000-0002',
      },
      {
        id: 2,
        name: '홍길남',
        phone: '010-0000-0003',
      },
    ],
    keyword: '',
  };

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  };

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({
        id: this.id++,
        name: data.name,
        phone: data.phone,
      }),
    });
  };

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter((info) => info.id !== id),
    });
  };

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map((info) => {
        if (info.id === id) {
          return { id, ...data };
        }
        return info;
      }),
    });
  };

  render() {
    const body = {
      padding: '0 20px',
    };

    const input = {
      height: '30px',
      marginTop: '8px',
    };

    return (
      <div style={body}>
        <h1>전화번호부</h1>
        <PhoneForm onCreate={this.handleCreate} />
        <input
          style={input}
          placeholder="검색"
          value={this.state.keyword}
          onChange={this.handleChange}
        />
        <PhoneInfoList
          data={this.state.information.filter(
            (info) => info.name.indexOf(this.state.keyword) > -1
          )}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
