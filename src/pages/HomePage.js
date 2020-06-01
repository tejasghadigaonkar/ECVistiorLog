import React, { Component } from "react";

class HomePage extends Component {
    componentDidMount(){
        if(!localStorage.getItem('Visitor')){
            localStorage.setItem('Visitor',JSON.stringify([]))
        }
    }
  render() {
    return (
      <div className="container white-box top-margin-2">
        <div className="row">
          <div className="col-md-7" style={{ padding: 0 }}>
            <p className="info">
              The One Stop Solution for ID, Membership, Event, Parking Permits
              and Visitors Management. In the modern world, Security has become
              a major concern for every Government organisation, Public Sectors,
              Corporate Offices, Defense Establishments, Schools, Residential
              Complex's etc. The level of Security needs might differ but
              effectively Security Management is the need of the day. A visitor
              who is stranger to the establishment needs a monitoring from the
              security perspective. Typically organisations keep a book or a
              register in which a visitor would enter his/her details &amp; a
              temporary badge or sticker or a visitor card is given to the
              visitor.
            </p>
          </div>
          <div className="col-sm-5 center-block" style={{ padding: 0 }}>
            <img
              src={require("../assets/images/img_visitor_management_system.jpg")}
              className="img-responsive"
            />
          </div>
        </div>
        <p className="info">
          As such when it comes to view the past details/visits it turns to be
          time consuming, unreliable and manual dependent operation. From the
          security and usage standpoint, maintain a book or register system has
          many negative points.
        </p>
      </div>
    );
  }
}

export default HomePage;
