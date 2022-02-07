import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
    article = []

    constructor() {
        super();
        console.log("this is News constructor")
        this.state = {
            article: this.article,
            loading: false
        }


    }
    //render ke baad chlta hai
    async componentDidMount() {

        let url = " https://newsapi.org/v2/top-headlines?country=us&apiKey=2199910c59be4ac98b021e154859cff5"
        let data = await fetch(url)
        let parseddata = await data.json()
        //console.log((parseddata.articles))

        this.setState({ article: parseddata.articles })

    }
    render() {
        return (

            <div className='container my-3'>
                <div className="row">
                    {this.state.article.map(
                        (x) => {

                            return (

                                <div className="col-md-4" key={x.url}>
                                    <NewsItem title={x.title} description={x.description} imgsrc={x.urlToImage} newsUrl={x.url} />
                                </div>
                            )

                        }

                    )}


                </div>

            </div>


        );
    }
}

export default News;
