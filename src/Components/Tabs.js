/*
import React from "react";
import "./../styles.css";
import {NavLink, withRouter} from "react-router-dom";

const Tabs = (props) => {

    const active = 'active';
    const delivery = 'Доставка';
    const pickup = 'Самовывоз';
    const path_delivery = 'delivery';
    const path_pickup = 'pickup';

const NavLinkCreator = (path, delivery, active) => {
    return (
        <NavLink to= {`/${path}`} className={`tabs__link ${active}`} activeClassName="active">
            <div className="tabs__el">
                        <span className="tabs__title">
                            {delivery}
                        </span>
            </div>
        </NavLink>
        )
};

    return (
        <nav className="tabs">
            {props.match.isExact
                ? NavLinkCreator(path_delivery, delivery, active)
                : NavLinkCreator(path_delivery, delivery)
            }
            {NavLinkCreator(path_pickup, pickup)}
        </nav>
    )
};

export default withRouter(Tabs);*/
