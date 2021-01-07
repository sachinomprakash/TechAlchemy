import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Category, RestaurantCard } from '../../../utils/common/components';
import { RestaurantService } from '../../services/LandingService';
// importing styles
import './Landing.scss';

// Initializing the state and props
interface Props extends RouteComponentProps { }
type State = typeof initialState
const initialState = {
  restaurants: [] as any
}
const restaurantService = new RestaurantService();

class Landing extends Component<Props, State> {
  state = initialState;
  componentDidMount() {
    this._getAllRestaurants();
  }
  _getAllRestaurants = async () => {
    const list = await restaurantService.getRestaurants();
    this.setState({
      restaurants: list.restaurants
    })
  }

  render() {
    return (
      <>
        <Category />
        <h4 className="heading pt-4">Restaurants</h4>
        <div className="row no-gutters">
          {
            this.state.restaurants.length !== 0 ? this.state.restaurants.map((restaurant: any) => {
              return <div className="col-4 restaurants" key={restaurant.id}>
                <RestaurantCard {...this.props} key={restaurant.id} details={restaurant} />
              </div>
            }) : null
          }
        </div>

      </>
    )
  }
}

export default Landing;