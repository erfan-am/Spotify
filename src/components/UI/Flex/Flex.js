import React from 'react'

const Flex = (props) => {
    return(
        <div className={props.className} style={{
            display:"flex",
            width:props.width ? props.width : '100%',
            height:props.height ? props.height : null,
            color:props.color ? props.color : "white",
            flexWrap:props.wrapp ? 'wrap' : null,
            flexDirection:props.dir ? props.dir : null,
            justifyContent:props.justify ? props.justify : null,
            alignItems:props.align ? props.align : null,
            padding:props.padding ? props.padding : null
            }}>
            {props.children}
        </div>
    )
}

export default Flex
