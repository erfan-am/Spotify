import React from 'react';
import { connect } from 'react-redux';
import './MusicBar.scss';
import MusicIcons from './MusicIcons';
import {removeSongPlay,showFormFile} from '../../store/songs/functions'
import FileCreated_list from '../fileCreated_list/fileCreated_list';
import Flex from '../UI/Flex/Flex';
const Musicbar = ({ song ,removeSongPlay,create,showFormFile}) => {
    return (
        <Flex dir="row" height="85px" justify="space-between" 
        className="musicsCTR">
            {song && (
                <Flex dir="row" width="300px" justify="center" className="musicBar">
                    <span onClick={()=>removeSongPlay()} className="remove">X</span>
                    <img src={song.img} alt={song.title}/>
                    <div className="listen_details">
                        <h1>{song.title}</h1>
                        <p>{song.name}</p>
                    </div>
                </Flex>
            )}
            <MusicIcons showFormFile={showFormFile}/>
           {create !==false && <FileCreated_list/>}
        </Flex>
    );
};


const mapStateToProps=(state)=>({
    create:state.songs.create_list
})
export default connect(mapStateToProps,{removeSongPlay,showFormFile})(Musicbar);
