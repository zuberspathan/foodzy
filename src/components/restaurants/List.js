import RestaurantList from './RestaurantList';
//different types of importing
const restaurantList  = <RestaurantList/>;

class List extends React.Component {
  render() {
    return <div>{this.state.hello}</div>;
  }
}
