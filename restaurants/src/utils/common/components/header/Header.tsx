import React, { Component } from 'react';
// importing styles
import './Header.scss';

// Initializing the state and props
interface Props { }
type State = typeof initialState
const initialState = {

}

class Header extends Component<Props, State>{
    state = initialState;
    render() {
        return (
            <div className="header">
                <div className="d-flex justify-content-end p-4 pt-5">
                    <input type="text" className="search-input mr-3" placeholder="&#x1F50D;   Search for restaurants ( press Enter to search )" />
                    <button className="filter-btn mr-3" data-toggle="modal" data-target="#myModal2"><i className="fas fa-filter"></i></button>
                    <button className="filter-btn cart"><i className="fas fa-shopping-cart"></i></button>
                    {/* slider logic */}
                    <div className="modal right fade" id="myModal2" role="dialog" aria-labelledby="myModalLabel2">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title" id="myModalLabel2">Search filters</h4>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                </div>
                                <div className="modal-body">
                                    <div>
                                        <h4 className="modal-title" id="myModalLabel2">Sort By</h4>
                                        <div className="d-flex">
                                            <button className="sort-btn mt-3"><i className="fas fa-fire"></i></button>
                                            <span className="pt-4 pl-3 open-filter">Open</span>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <h4 className="modal-title" id="myModalLabel2">Cuisine</h4>
                                        <div className="d-flex">
                                            <span className="filter-chip secondary mt-3 mr-2">
                                                All </span>
                                            <span className="filter-chip primary mt-3 mr-2">
                                                Fast food </span>
                                            <span className="filter-chip primary mt-3 mr-2">
                                                Asian </span>
                                            <span className="filter-chip primary mt-3 mr-2">
                                                Pizza </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn-primary">Apply filters</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Header;