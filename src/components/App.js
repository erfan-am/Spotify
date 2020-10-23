import React from 'react';
import { connect } from 'react-redux';
import  './App.scss';
import Mian from './Main/Mian';
import Musicbar from './musicBar/Musicbar';
import Nav from './Nav/Nav';
import {getLikeSong} from '../store/songs/functions'
const  App =(props)=>{
    const {song,group,songBar,like,getLikeSong}=props;
    return(
        <div className="app">
            <Nav />
            <Mian group={group} setLikes={getLikeSong} likes={like} />
            {songBar ? <Musicbar song={song} /> : null}
        </div>
        )
} 
const mapStateToProps=state=>({
    song:state.songs.song,
    songBar:state.songs.songBar,
    like:state.songs.like,
    group:state.songs.group
})
export default connect(mapStateToProps,{getLikeSong})(App);
