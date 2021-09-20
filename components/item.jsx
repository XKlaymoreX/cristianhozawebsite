import React from 'react'

const item = (props) => {

    const ItemStyle = {
        width: '450px',
        height: '100px',
        display:'flex',
        flexFlow:'row',
        backgroundColor:'#dfdfdf',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'20px',
        borderRadius:'6px',
        color:'black'
    }

    const IdStyle = {
        fontWeight:'Bold',
        color:'#0F8B8D'
    }


    return (
        <div style={ItemStyle}>
            <div className="id" style={IdStyle}>
                {
                props.id
            }.&nbsp;</div>
            <div className="desc">
                {
                props.description
            } </div>
        </div>
    )
}

export default item
