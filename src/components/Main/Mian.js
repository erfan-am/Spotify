import React, { useEffect } from "react";
import { Route, Switch } from "react-router";
import Category from "../Categories/Category";
import PlayList from "../playList/PlayList";
import Search from "../search/Search";
import TopBar from "../topBar/TopBar";
import "./Main.scss";
import Likes from "../Likes/Likes";
import { connect } from "react-redux";
import { getGroupSearch, getFetchDataSongs } from "../../store/songs/functions";
import YourPlayList from "../yourPlayList/YourPlayList";
const Mian = ({
  group,
  setLikes,
  likes,
  getFetchDataSongs,
  getGroupSearch,
}) => {
  useEffect(() => {
    getFetchDataSongs();
  }, []);
  return (
    <div className="main">
      <TopBar />
      <Switch>
        <Route exact path="/" render={() => <Category />} />
        <Route
          path="/search"
          render={() => (
            <Search setLikes={setLikes} getGroup={getGroupSearch} />
          )}
        />
        <Route path="/likes" render={() => <Likes likes={likes} />} />
        <Route path="/library" component={Category} />
        <Route
          path="/:yourname/fileplaylist/:fleName"
          component={YourPlayList}
        />
        <Route
          path="/playlist/:itemId"
          render={() => <PlayList setLikes={setLikes} group={group} />}
        />
      </Switch>
    </div>
  );
};

export default connect(null, { getFetchDataSongs, getGroupSearch })(Mian);
