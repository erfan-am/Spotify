import React, { useState } from 'react'
import { connect } from 'react-redux';
import './list.scss';
import {createFile,removeFile} from '../../store/createt_file/function';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import Flex from '../UI/Flex/Flex';
const fileCreated_list = ({files,createFile,song,removeFile}) => {
    const [fileName,setFileName]=useState('');
    const onClickHandler=()=>{
       if(fileName !==''){
        createFile(fileName);
        setFileName('')
       }
    }
    const saveTrack=(data,music)=>{
        data.items.push(music)
    }
    return (
        <div className="list_create_file" >
            <form onSubmit={onClickHandler}> 
            <Input element="input"
             label="Title" 
             placeholder="Enter Title" 
             type="text" value={fileName} 
             onChange={(e)=>setFileName(e.target.value)} />
             <Button bg="#f9f9f9f9" onClick={onClickHandler} type="button">Add File</Button>
            </form>
            <Flex dir="column">
                {files.length > 0 && files.map(file=>(
                    <Flex className="file_list" dir="row" justify="space-between" padding="0.5rem" onClick={()=>saveTrack(file,song)} ky={file.id}>{file.name}
                    <span onClick={()=>removeFile(file)}>del</span>
                    </Flex>
                ))}
            </Flex>
        </div>
    )
}

const mapStateToProps=state=>({
    files:state.file.files,
    song:state.songs.song
})
export default connect(mapStateToProps,{createFile,removeFile})(fileCreated_list)
