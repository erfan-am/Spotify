import { connect } from 'react-redux';
import React from 'react';
import Item from '../Categotries_item/Item';
import Flex from '../UI/Flex/Flex';
import Spinner from '../UI/Spinner/Spinner';
import './Category.scss';
import {getGroupInfo}from '../../store/songs/functions'
const Category = ({ data,getGroupInfo ,loading}) => {
    return (
        <div className="mainContent">
            <h1>Uniqely yours</h1>
            {loading ?<Spinner/> : data.length > 0 && data.map(cat => (
                <div key={cat.id}>
                    <h2>{cat.name}</h2>
                    <span>See All</span>
                    <p>Musics for concentration</p>
                    <Flex wrapp={true} className="cardsWrap">
                        {cat.items.map(item => (
                            <Item getGroup={getGroupInfo} item={item} key={item.id} />
                        ))}
                    </Flex>
                </div>
            ))}
        </div>
    );
};

const mapStateToPrpps=state=>({
    data:state.songs.data,
    loading:state.songs.loading,
})
export default connect(mapStateToPrpps,{getGroupInfo})(Category);
