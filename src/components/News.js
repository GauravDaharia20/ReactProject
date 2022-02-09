import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export class News extends Component {


    constructor() {
        super();
        // console.log("this is News constructor")
        this.state = {
            article: [],
            loading: false,
            page: 1
        }


    }
    //render ke baad chlta hai
    async componentDidMount() {

        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=2199910c59be4ac98b021e154859cff5&page=1&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url)
        let parseddata = await data.json()
        this.setState({ article: parseddata.articles, totalResults: parseddata.totalResults, loading: false })

    }
    //prev button
    OnHandlePrev = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=2199910c59be4ac98b021e154859cff5&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        this.setState({
            loading: true
        })
        let data = await fetch(url)
        let parseddata = await data.json()
        this.setState({
            page: this.state.page - 1,
            article: parseddata.articles,
            loading: false
        })




    }
    //next button
    OnHandleNext = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=2199910c59be4ac98b021e154859cff5&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        this.setState({
            loading: true
        })
        let data = await fetch(url)
        let parseddata = await data.json()
        this.setState({
            page: this.state.page + 1,
            article: parseddata.articles,
            loading: false
        })





    }
    render() {
        return (

            <div className='container my-3'>
                <h1 className='text-center'>Today's News</h1>
                {this.state.loading && < Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.article.map(
                        (x) => {
                            return (

                                <div className="col-md-4" key={x.url}>
                                    <NewsItem title={x.title ? x.title : ""} description={x.description ? x.description : ""} imgsrc={x.urlToImage} newsUrl={x.url} />
                                </div>
                            )
                        }
                    )}
                </div>
                <div className="container my-3">
                    <div className="d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.OnHandlePrev}>&larr; Previous</button>
                        <button disabled={this.state.page + 1 > (Math.ceil(this.state.totalResults / this.props.pageSize))} type="button" className="btn btn-dark" onClick={this.OnHandleNext}>Next &rarr;</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;
