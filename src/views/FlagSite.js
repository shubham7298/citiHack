import React, { Component } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";

export default class FlagSite extends Component {
  state = {
    loaded:false,
    hasErrors: false,
    sites: {}
  };

  componentDidMount() {
    fetch("https://aqueous-ocean-04982.herokuapp.com/flagged")
      .then(res => res.json())
      .then(res => this.setState({ sites: res,loaded:true }))
      .catch(() => this.setState({ hasErrors: true }));
  }

  render() {
    const {
      loaded,sites,
    } = this.state;

    return(  
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="All Flagged Sites Data" subtitle="Check" className="text-sm-left" />
         
        </Row>
        <Row>
          <Col>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Sites</h6>
              </CardHeader>
              <CardBody className="p-0 pb-3">
                <table className="table mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th scope="col" className="border-0">
                        Id
                      </th>
                      <th scope="col" className="border-0">
                       State
                      </th>
                      <th scope="col" className="border-0">
                       City
                      </th>
                      <th scope="col" className="border-0">
                      Area
                      </th>
                      <th scope="col" className="border-0">
                       Description
                      </th>
                      <th scope="col" className="border-0">
                      Get Full info
                      </th>
                    </tr>
                  </thead>
                  <tbody>

                    
                  {loaded && console.log(this.state.sites)}
                  
                    {!this.state.loaded && <tr><td colspan="6" style={{textAlign:'center'}}>Loading Data</td></tr>}

                  {this.state.loaded && this.state.sites.map((site, i) => (
    
    <tr key={i}>
    <td>{site.site}</td>
    <td>{site.state}</td>
                  <td>{site.city}</td>
                  <td>{site.area}</td>
                 
                  <td>{site.desc}</td>
    <td><a href={`/flagsite/${site.site}`}>Click to check</a></td>
    </tr>
    
                  ))}
                
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </Col>
        </Row>
    
       
      
      </Container>
    )
  }
}




