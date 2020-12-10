import React from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput } from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

const Editor = () => (
  <Card small className="mb-3">
    <CardBody>
      <Form className="add-new-post">
        <span>Site Name</span>
        <FormInput size="mb" className="mb-3" placeholder="Site Name" />
        <span>State</span>
        <FormInput size="mb" className="mb-3" placeholder="State" />
        <span>Disctrict</span>
        <FormInput size="sm" className="mb-3" placeholder="District" />
        <span>Site Inspector</span>
        <FormInput size="sm" className="mb-3" placeholder="Site Inspector" />
        <span>Add Site Description</span>
        <ReactQuill className="add-new-post__editor mb-1" />
      </Form>
    </CardBody>
  </Card>
);

export default Editor;
