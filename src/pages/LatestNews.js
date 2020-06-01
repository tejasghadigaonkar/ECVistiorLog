import React, { Component } from "react";
import axios from "axios";

class LatestNews extends Component {
  constructor() {
    super();
    this.state = {
      latestNews: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=bitcoin&from=2020-06-01&sortBy=publishedAt&apiKey=1848b5465b1449d78d10c2991b1bea98"
      )
      .then((result) => {
        this.setState({
          latestNews: result.data.articles,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="container white-box top-margin-2">
        <h1>Latest News</h1>
        <hr />
        {this.state.latestNews.map((item, index) => (
          <div class="container top-margin-2">
            <div class="row">
              <h5>{item.title}</h5>
            </div>
            <div class="row">
        <h6>Author: {item.author}}</h6>
            </div>
            <div class="row">
        <h6>PublishedAt: {(item.publishedAt.split('T'))[0]}</h6>
            </div>
            <div class="row">
            <h6>{item.description}</h6>
            </div>
            <div class="row">
              <img
                src={item.urlToImage}
                style={{height:400,width:'auto'}}
              />
            </div>
            <div class="row">
        <p class="info">{item.content}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default LatestNews;
