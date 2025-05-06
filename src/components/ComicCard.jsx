import React from 'react'

const ComicCard = (props) => {
    return (
        <div className="comics-card">
            <img src={props.src} alt="" />
            <h5>{props.title}</h5>
        </div>
    )
}

export default ComicCard