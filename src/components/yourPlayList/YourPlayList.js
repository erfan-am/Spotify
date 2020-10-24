import React from "react";
import { connect } from "react-redux";
import Trackitem from "../track_item/Track_item";
import Input from "../UI/Input/Input";
import "./yourPlayList.scss";
const YourPlayList = ({ file }) => {
  const { items, img, name } = file;
  return (
    <div className="create_file_page">
      <div className="img_feild">
        <img src={img} alt={name} />
        <form>
          <Input element="input" label="Chose Image" type="file" />
          <button type="button">Add File</button>
        </form>
      </div>
      {items.length > 0 ? (
        items.map((item) => <Trackitem key={item.id} item={item} />)
      ) : (
        <h2>thers is no song</h2>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  file: state.file.file,
});
export default connect(mapStateToProps)(YourPlayList);
