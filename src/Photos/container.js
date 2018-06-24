import React, { Component } from 'react';
import axios from 'axios';
import PhotoListComponent from './component';

class Container extends Component {
  state = {
    photoList: []
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/photos')
    .then((response) => {
      console.log(response);
      this.setState({
        photoList: response.data
      })
    })
    .catch(function (error) {
      console.log(error);
    });
    
    // Fetch using axios
    // Set in state
  }

  render() {
    return (
      <PhotoListComponent photoList={this.state.photoList} />
    )
  }
}

export default Container;