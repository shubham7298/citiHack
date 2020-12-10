/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  FormCheckbox,
  Button
} from "shards-react";

import Popup from "reactjs-popup";

import PageTitle from "../components/common/PageTitle";

class CheckSite extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded:false,
      hasErrors: false,
      sites: {},
      open:false,
     };

     this.openModal = this.openModal.bind(this);
     this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ open: true });
  }
  closeModal() {
    this.setState({ open: false });
  }

  componentDidMount() {
    const{ match } = this.props;

    fetch(`https://aqueous-ocean-04982.herokuapp.com/images?site=${match.params.siteId}`)
      .then(res => res.json())
      .then(res => this.setState({ sites: res,loaded:true }))
      .catch(() => this.setState({ hasErrors: true }));
  }

  render() {
    const {
      loaded,sites,
    } = this.state;

    const{match} = this.props;

    return (
      <Container fluid className="main-content-container px-4">
        
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Site Details" subtitle={`id:${match.params.siteId}`} className="text-sm-left" />
        </Row>  
          
   {loaded && console.log(sites)}

   {loaded && <>
    <h4>Inspection Details</h4>  
   <ul>
    <li>Site Id : {match.params.siteId}</li>
   <li>Description : {sites.desc}</li>
   <li>State : {sites.state}</li>
   <li>City : {sites.city}</li>
   <li>Area : {sites.area}</li>
     
   </ul>
</>
}

   
     
   {/* <Col lg="6"><Card className="mb-4 p" ></Card>   </Col> */}
   {loaded && <h4>Inspection Pictures</h4>}
   
        <Row>
          {loaded && sites.url.map((post, idx) => (
            <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post card-post--1">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url(${post})` }}
                >
                 
                </div>
                
              </Card>
            </Col>
          ))}
        </Row>
{loaded && 
        <Row>     
<Col lg="8">
<Popup modal trigger={ <Button theme="success" size="lg" className="mb-2 mr-1" onClick={this.openModal}>
       <i className="material-icons mr-1">check</i> Accept
      </Button>}>
       
        <Card className="m-4 " >
         <CardBody>
        Information saved  <br></br>
        Thank you for the review
        </CardBody>
              </Card>
      </Popup>
 </Col>  

 <Col lg="4">  
 <Popup modal trigger={<Button theme="danger" size="lg" className="mb-2 mr-1">
      <i className="material-icons mr-1">close</i> Re-Verify
      </Button>}>
       
        <Card className="m-4 " >
         <CardBody>
         Steps for reverifaction started.  <br></br>
        New Officer Allocated.
        SMS info send   
         
        </CardBody>
              </Card>
      </Popup> 
      
      
      </Col>    

  </Row>                
  }
      </Container>
    );
  }
}

// export default BlogPosts;


export default CheckSite;
