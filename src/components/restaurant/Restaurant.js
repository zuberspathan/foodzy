import { connect } from 'react-redux';
import React, { Component } from 'react';
import Link from 'react-router-dom';
import { getRestaurants } from '../../actions';
import _ from 'lodash';
let index = 0;
class Restaurant extends React.Component {
  componentDidMount() {
    this.props.getRestaurants();
  }
  
  renderRestaurants(){
    //console.log("data", this.props.restaurants);
    return _.map(this.props.restaurants, rest => {
      return <li key={index++}>
        { rest }
      </li>
    })
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
        </div>
        <h3>Restaurants</h3>
        <ul className="list-group">{this.renderRestaurants()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    restaurants: state.restaurants
  }
}

export default connect(mapStateToProps, { getRestaurants })(Restaurant);