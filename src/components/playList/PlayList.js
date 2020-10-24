import React from "react";
import Track_item from "../track_item/Track_item";
import Flex from "../UI/Flex/Flex";
import "./PlayList.scss";
const PlayList = ({ group, setLikes }) => {
  return (
    <Flex dir="column" className="PlayListPage">
      <Flex dir="row" className="playListInfo">
        <div className="playListPageImage">
          <img src={group && group.img} alt="ho" />
        </div>
        <Flex dir="column">
          <p className="small">PLAYLIIST</p>
          <h1>{group && group.title}</h1>
          <span>Spotify</span>

          <p>Minimalism, electoronic and modren classical to concentrate to.</p>
          <p>Spotify.170,456 likes, in 5 hr 56 min</p>
        </Flex>
      </Flex>
      <Flex dir="row" height="60px" className="icons">
        <div className="playButon">
          <svg role="img" width="48" viewBox="0 0 24 24" aria-hidden="true">
            <polygon
              points="21.57 12 5.98 3 5.98 21 21.57 12"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="iconHeart" />
        <Flex
          dir="row"
          width="50px"
          align="center"
          justify="space-around"
          className="Bots"
        >
          <span />
          <span />
          <span />
        </Flex>
      </Flex>
      <Flex dir="column" width="90%" className="pageListSongs">
        {group &&
          group.items.map((item) => (
            <Track_item key={item.id} item={item} setLikes={setLikes} />
          ))}
      </Flex>
    </Flex>
  );
};

export default React.memo(PlayList);
