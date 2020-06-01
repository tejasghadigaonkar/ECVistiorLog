import React, { Component } from "react";
import { Table } from "react-bootstrap";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      visitor_log: [],
    };
  }
  componentDidMount() {
    if (localStorage.getItem("Visitor")) {
      this.setState({
        visitor_log: JSON.parse(localStorage.getItem("Visitor")),
      });
    }
  }
  render() {
    return (
      <div className="container white-box top-margin-2">
        <h1>Visitor Log</h1>
        <hr />
        <Table striped bordered hover size="md" variant="dark">
          <thead>
            <tr>
              <th>Sr NO.</th>
              <th>Name</th>
              <th>Selfie</th>
              <th>Email</th>
              <th>Purpose Of Visiting</th>
              <th>Whom to Meet</th>
              <th>Date</th>
              <th>In TIme</th>
              <th>Out Time</th>
            </tr>
          </thead>
          <tbody>
            {this.state.visitor_log.map((item, index) => (
              <tr>
                <td>{(index+1)}</td>
                <td>{item.name}</td>
                <td><img src={item.selfieimage} style={{height:70,width:'auto'}} /></td>
                <td>{item.email}</td>
                <td>{item.meet}</td>
                <td>{item.personname}</td>
                <td>{(item.currentdate.split('T'))[0]}</td>
                <td>{item.intime}</td>
                <td>{item.outtime}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default HomePage;
