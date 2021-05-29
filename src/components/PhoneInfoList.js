import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
  static defaultProps = {
    data: [],
  };

  render() {
    const { data, onRemove, onUpdate } = this.props;
    const list = data.map((info) => (
      <PhoneInfo
        info={info}
        key={info.id}
        onRemove={onRemove}
        onUpdate={onUpdate}
      />
    ));

    const ul = {
      padding: '0',
    };

    return <ul style={ul}>{list}</ul>;
  }
}

export default PhoneInfoList;
