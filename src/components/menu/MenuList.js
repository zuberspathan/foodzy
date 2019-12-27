import { connect } from 'react-redux';
import React, { Component } from 'react';
import { getRestaurants } from '../../actions';
import _ from 'lodash';
import Menu from './MenuCard';

class MenuList extends Component {
  constructor(props) {
    super(props);
    this.restaurantId = parseInt(props.match.params.id);
  }
  componentDidMount(){
    this.props.getRestaurants();
  }

  componentWillMount() {
    let restaurant = this.props.restaurants.filter(x => x.id === this.restaurantId)[0];
    this.setState({menu: restaurant.menu});
  }

  renderMenus() {
    return _.map(this.menu, menu => {
      return <Menu key={menu.id} data={menu} />
    })
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
        </div>
        <ul className="list-group">{this.renderMenus()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    restaurants: state.restaurants
  }
}

export default connect(mapStateToProps, {getRestaurants})(MenuList);