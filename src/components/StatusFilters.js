import React from "react";
import { NavLink } from "react-router-dom";

const StatusFilters = ({ onLinkClicked }) => {
  return (
    <div>
      <NavLink
        to="/active"
        onClick={() => onLinkClicked("active")}
        activeClassName="filter-active-class"
      >
        Active
      </NavLink>
      <NavLink
        to="/completed"
        onClick={() => onLinkClicked("completed")}
        activeClassName="filter-active-class"
      >
        Completed
      </NavLink>
      <NavLink
        to="/all"
        onClick={() => onLinkClicked("none")}
        activeClassName="filter-active-class"
      >
        All
      </NavLink>
    </div>
  );
};

export default StatusFilters;
