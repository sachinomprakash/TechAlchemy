// import core modules
import React, { Component } from 'react';
import { SIDE_BAR_MENU } from '../../configs/SidebarContent';

// importing styles
import './Sidebar.scss';

// Initializing the state and props
interface Props { }
type State = typeof initialState
const initialState = {
    sidebarItems: [] as any //To Handle Mock sidebarItems
}


class SideBar extends Component<Props, State>{
    state = initialState;
    /**Assign MockData to State sidebarItems */
    componentDidMount() {
        this.setState({
            sidebarItems: SIDE_BAR_MENU
        })

    }
    /**To Activate the Logo based on pathname highlight the menu
     * @pathname - name of a route path
    */
    activePath = (pathname: any) => {
        this.state.sidebarItems.map((items: any) => {
            if (pathname.split(items.path)[0] === "") {
                items['active'] = true;
            } else {
                items['active'] = false;
            }
            return items;
        })
        this.setState({
            sidebarItems: [...this.state.sidebarItems]
        })
    }


    /** on Menu select, switching the navigation and calling menu highlight
     * @pathname - name of route path
      */
    menuClick = (pathname: string) => {
        this.activePath(pathname);
    }

    render() {
        return (
            <>
                <div className="theme-wrapper">
                    <div className="area"></div>
                    <nav className="main-menu sidebar-wrapper">
                        <ul >
                            <li className="non-hover-css">
                                <span>
                                    <div className="logo">
                                        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" className="sidebarLogo" />
                                    </div>
                                </span>
                            </li >
                            {
                                this.state.sidebarItems.map((res: any, index: any) => {
                                    return <li key={index} onClick={() => this.menuClick(res.path)}>
                                    {
                                        res.active ?
                                            <span className="active">
                                                <i className={res.icon + " icon fa-2x"}></i>
                                                <span className="nav-text">
                                                    {res.name}
                                                </span>
                                            </span>
                                            :
                                            <span>
                                                <i className={res.icon + " icon fa-2x"}></i>
                                                <span className="nav-text">
                                                    {res.name}
                                                </span>
                                            </span>
                                    }
                                </li> 
                                })
                            }
                        </ul>
                    </nav >
                </div >
            </>
        )
    }
}
export default SideBar;