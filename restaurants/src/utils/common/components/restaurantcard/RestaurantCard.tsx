import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
// importing styles
import './RestaurantCard.scss';

// Initializing the state and props
interface Props extends RouteComponentProps {
    details: any
}
type State = typeof initialState
const initialState = {
}


class RestaurantCard extends Component<Props, State> {
    state = initialState;
    render() {
        return (
            <>
                <div className="card">
                    <div className="img">
                        <img src={this.props.details.imageLink} alt="" className="img" />
                    </div>
                    <div className="content">
                        <div className="d-flex justify-content-between">
                            <p className="rest-name">{this.props.details.restaurantName}</p>
                            {
                                this.props.details.status === 'Open' ? <span className="chip primary mt-3">
                                    {this.props.details.status} </span> :
                                    <span className="chip secondary mt-3">
                                        {this.props.details.status} </span>
                            }
                        </div>
                        <p>{this.props.details.description}</p>
                    </div>
                </div>
            </>
        )
    }
}

export default RestaurantCard;