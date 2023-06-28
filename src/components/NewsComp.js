import React from 'react'
import NoImage from './NoImage.png'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className="my-3">
            <div className="card">
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }
                }>
                </div>
                <img src={imageUrl ? imageUrl : NoImage} className="card-img-top" alt="ImageNotFound" />
                <div className="card-body">
                    <h5 className="card-title mb-4">{title}</h5>
                    <p className="card-text">{description ? description : "Description Not Avalable!"}</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                    <p className="card-text">From {source ? source : "Internet"}</p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )

}

export default NewsItem
