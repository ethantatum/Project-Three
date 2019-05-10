import React from "react";
import {Route, Link } from "react-router-dom";
import "./style.css";

//used to style active link
function NavSideBarLink({ label, to, activeOnlyWhenExact }) {
    return (
      <Route
        path={to}
        // exact={activeOnlyWhenExact}
        children={({ match }) => (
          <div className={match ? "active" : ""}>
            {match ? "> " : ""}
            <Link to={to}>{label}</Link>
          </div>
        )}
      />
    );
}

export default NavSideBarLink;