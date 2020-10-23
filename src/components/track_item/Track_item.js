import React from 'react';
import { connect } from 'react-redux';
import './style.scss';
import {getPlaySong} from '../../store/songs/functions'
import Flex from '../UI/Flex/Flex';
const Trackitem = ({ item, getPlaySong, setLikes }) => {
    return (
        <Flex  className="track_bar" dir="row" padding="0.5rem" justify="space-between" key={item.id} onClick={() => getPlaySong(item)}>
            <Flex dir="row" className="img_name">
                <svg onClick={()=>getPlaySong(item)} height="22" role="img" width="22" viewBox="0 0 24 24" >
                    <polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor" /></svg>
               
                <img onClick={()=>getPlaySong(item)} src={item.img} />
                <div onClick={()=>getPlaySong(item)} className="song_details">
                    <h4>{item.title}</h4>
                    <p>{item.sub}</p>
                </div>
            </Flex>
          <div>
            <h4>{item.name}</h4>
            <p>4min</p>
            <svg title="like" onClick={()=>setLikes(item)} xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" className="likeIcon">
                    <path d="M20.4852814,13.2426407 L12,21.7279221 L3.51471863,13.2426407 C1.17157288,10.8994949 1.17157288,7.10050506 3.51471863,4.75735931 C5.85786438,2.41421356 9.65685425,2.41421356 12,4.75735931 C14.3431458,2.41421356 18.1421356,2.41421356 20.4852814,4.75735931 C22.8284271,7.10050506 22.8284271,10.8994949 20.4852814,13.2426407 Z" id="path-1"></path>
            </svg>
          </div>
        </Flex>
    );
};

export default connect(null,{getPlaySong})(Trackitem);
