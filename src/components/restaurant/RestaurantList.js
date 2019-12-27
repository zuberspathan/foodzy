import { connect } from 'react-redux';
import React, { Component } from 'react';
import { getRestaurants } from '../../actions';
import Button from '@material-ui/core/Button';
import _ from 'lodash';
import RestaurantCard from './RestaurantCard';
let index = 0;
class Restaurant extends React.Component {
  componentDidMount() {
    this.props.getRestaurants();
  }

  renderRestaurants() {
    return _.map(this.props.restaurants, rest => {
      return <RestaurantCard key={rest.id} data={rest} />
    })
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
        </div>
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