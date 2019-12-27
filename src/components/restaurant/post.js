import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {  
  render() {
    return (
      <div>
        Hello
      </div>
    );
  }
}

export default connect()(Post);
