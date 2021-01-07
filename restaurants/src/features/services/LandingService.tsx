import axios from 'axios';

export class RestaurantService {
    // get restaurants API call
    getRestaurants = () => {
        return axios.get(`testRestaurantApi/restaurants`).then((response: any) => response.data);
    }
}