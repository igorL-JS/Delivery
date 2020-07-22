import React from "react";
import "./../styles.css";
import {NavLink} from "react-router-dom";

export const Tabs = () => {

    return (
        <nav className="tabs">

            <NavLink to="/delivery" activeStyle={{textDecoration:"none"}} activeClassName="active" /*style={{textDecoration: "none", color: "#999999"}}*/   >

                   <div className="tabs__el">
                        <span className="tabs__title">
                            Доставка
                        </span>
                   </div>

            </NavLink>

            <NavLink to="/pickup" activeStyle={{textDecoration:"none"}} /*style={{textDecoration: "none", color: "#999999"}}*/   activeClassName="active">
                    <div className="tabs__el">
                        <span className="tabs__title">
                             Самовывоз
                        </span>
                    </div>
            </NavLink>

        </nav>
    )
};
