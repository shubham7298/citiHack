import React from "react";
import { Container, Row, Col,Button } from "shards-react";
import Popup from "reactjs-popup";
import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";
import SidebarActions from "../components/add-new-post/SidebarActions";
import SidebarCategories from "../components/add-new-post/SidebarCategories";

const AddNewPost = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="New Site" subtitle="Add" className="text-sm-left" />
    </Row>

    <Row>
      {/* Editor */}
     
      <Col lg="9" md="12">
        <Editor />
      </Col>

      {/* Sidebar Widgets */}
      <Col lg="3" md="12">
        {/* <SidebarActions /> */}
        <SidebarCategories />
        <Popup modal trigger={ <Button theme="success" size="lg">
      <i className="material-icons mr-1">check</i> Submit
      </Button>}>
       
        Information submiited
      </Popup> 
       
      </Col>
      
    </Row>
  </Container>
);

export default AddNewPost;
