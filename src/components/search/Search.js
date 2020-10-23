import React, { useEffect } from 'react';
import './Search.scss';
import Item from '../Categotries_item/Item';
import Track_item from '../track_item/Track_item';
import { connect } from 'react-redux';
import Flex from '../UI/Flex/Flex';
import {searchFetchDataSongs} from '../../store/Search/funtions'
import Spinner from '../UI/Spinner/Spinner';
const Search = ({ data,loading,resultSearch,searchFetchDataSongs, getGroup, getSong, setLikes }) => {
    useEffect(()=>{
        searchFetchDataSongs()
    },[])
    return (
        <Flex dir="column" padding="1rem">
            <h1>Browse all</h1>
            {resultSearch.dataGroups ? (
                <Flex dir="column">
                    <h1>Songs List</h1>
                    {resultSearch.dataGroups.map(items => (
                        <Flex wrapp={true} key={items.id} className="search_show_item_track">
                            <img className="track_intro_img" alt={items.id} src={items.img} />
                            <div>
                                {items.items.map(item =>
                                    (<Track_item
                                        key={item.id}
                                        item={item}
                                        setLikes={setLikes}
                                        getSong={getSong}
                                    />))}
                            </div>
                        </Flex>
                    ))}
                </Flex>
            ) : null}
            {resultSearch.dataItem ?
                (<React.Fragment>
                    <h1>Groups</h1>
                    <Flex padding="1rem" width="100%" wrapp={true}>
                        {resultSearch.dataItem.map(item =>
                            <Item getGroup={getGroup} key={item.id} item={item} />)
                        }
                    </Flex>
                </React.Fragment>) :
                <Flex padding="1rem" width="100%" wrapp={true}>
                    {loading ? <Spinner/> : data.length > 0 && data.map(item => (
                        <Item getGroup={getGroup} key={item.id} item={item} />
                    ))}
                </Flex>}
        </Flex>
    );
};

const mapStateToProps=(state)=>({
    resultSearch:state.search.resultSearch,
    data:state.search.data,
    loading:state.search.loading
})
export default connect(mapStateToProps,{searchFetchDataSongs})(Search);
