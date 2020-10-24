import React, { useState } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./Bar.scss";
import { setSearchResult } from "../../store/Search/funtions";
import Input from "../UI/Input/Input";
import Flex from "../UI/Flex/Flex";
const TopBar = (props) => {
  const [search, setSearch] = useState("");
  const url = useLocation();
  const onChange = (e) => {
    setSearch(e.target.value);
    props.setSearchResult(e.target.value);
  };
  return (
    <Flex
      height="60px"
      width="100%"
      dir="row"
      justify="space-between"
      className="upperNav"
    >
      <form>
        {url.pathname === "/search" && (
          <Input
            element="input"
            value={search}
            onChange={onChange}
            type="search"
            placeholder="search"
          />
        )}
      </form>

      <Flex dir="row" className="authentication">
        <Link to="/signup">signup</Link>
        <Link to="/login">Login</Link>
      </Flex>
    </Flex>
  );
};

export default connect(null, { setSearchResult })(TopBar);
