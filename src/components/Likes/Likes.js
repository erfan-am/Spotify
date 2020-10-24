import React from "react";
import Trackitem from "../track_item/Track_item";
import "./Likes.scss";
import Flex from "../UI/Flex/Flex";
const Likes = ({ likes }) => {
  return (
    <Flex dir="column" justify="center" className="likes_bar">
      <img
        src="https://asset3.zankyou.com/images/mag-post/8f9/907d/685//-/uk/wp-content/uploads/2018/08/shutterstock-191838512.jpg"
        alt="like_item"
      />
      {likes.length > 0 && (
        <div className="likes_bar_item">
          {likes.map((like) => (
            <Trackitem item={like} key={like.id} />
          ))}
        </div>
      )}
    </Flex>
  );
};

export default Likes;
