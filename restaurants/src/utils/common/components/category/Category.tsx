import React, { Component } from 'react';
// importing styles
import './Category.scss';

// Initializing the state and props
interface Props { }
type State = typeof initialState
const initialState = {
}
const categoryItems = [
    {
        img: '/images/QLogo.png',
        title: 'Baked'
    }, {
        img: '/images/BLogo.png',
        title: 'Sweet'
    }, {
        img: '/images/PLogo.png',
        title: 'Hot Dish'
    }, {
        img: '/images/MLogo.png',
        title: 'Fast Food'
    }, {
        img: '/images/MLogo.png',
        title: 'Salads'
    }
]

class Category extends Component<Props, State> {
    render() {
        return (
            <>
                <h4 className="heading pt-5">Category</h4>
                <div className="d-flex pt-3">
                    {
                        categoryItems.map((items: any) => {
                            return <div key={items.title}>
                                <div className="d-flex pr-5">
                                    <img src={process.env.PUBLIC_URL + items.img} alt="logo" className="category-item" />
                                    <p className="p-2 category-title">{items.title}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </>
        )
    }
}

export default Category;