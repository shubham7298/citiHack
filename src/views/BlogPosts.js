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
  Button
} from "shards-react";

import PageTitle from "../components/common/PageTitle";

class BlogPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // First list of posts.
      PostsListOne: [
        {
          backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSExqUMxpf_bbPWkNzUWuh-qGhMHL2BMX9mQA&usqp=CAU",
          date: "28 February 2019"
        },
        {
          backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSExqUMxpf_bbPWkNzUWuh-qGhMHL2BMX9mQA&usqp=CAU",
          date: "28 February 2019"
        }, {
          backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSExqUMxpf_bbPWkNzUWuh-qGhMHL2BMX9mQA&usqp=CAU",
          date: "28 February 2019"
        },
        {
          backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSExqUMxpf_bbPWkNzUWuh-qGhMHL2BMX9mQA&usqp=CAU",
          date: "28 February 2019"
        },
        {
          backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSExqUMxpf_bbPWkNzUWuh-qGhMHL2BMX9mQA&usqp=CAU",
          date: "28 February 2019"
        },
        {
          backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSExqUMxpf_bbPWkNzUWuh-qGhMHL2BMX9mQA&usqp=CAU",
          date: "28 February 2019"
        },
      ],

      // Second list of posts.
     
    };
  }

  render() {
    const {
      PostsListOne,
      PostsListTwo,
      PostsListThree,
      PostsListFour
    } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Site Details" subtitle="id:xyz" className="text-sm-left" />
        </Row>

        {/* First Row of Posts */}
        <Row>
          {PostsListOne.map((post, idx) => (
            <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post card-post--1">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url(${post.backgroundImage})` }}
                >
                  <Badge
                    pill
                    className={`card-post__category bg-${post.categoryTheme}`}
                  >
                    {post.category}
                  </Badge>
                 
                </div>
                <CardBody>
    
                  <p className="card-text d-inline-block mb-3">{post.body}</p>
                  <span className="text-muted">{post.date}</span>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

      <Row>

        <h1>hello</h1>
      </Row>
         
      </Container>
    );
  }
}

export default BlogPosts;
