import React, { Component } from 'react';

export class NewsItem extends Component {

    render() {

        let { title, description, imgsrc, newsUrl } = this.props
        return (
            <>

                <div className="card" style={{ width: "18rem" }}>
                    <img src={!imgsrc ? "budget.jpg" : imgsrc} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target="_blank" className="btn btn-dark" rel="noreferrer">Read More</a>
                    </div>
                </div>


            </>
        );
    }
}

export default NewsItem;
