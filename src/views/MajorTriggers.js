import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import PageTitle from "./../components/common/PageTitle";
import SmallStats from "./../components/common/SmallStats";


const BlogOverview = ({ smallStats1, smallStats2 }) => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle title="Major Trends" subtitle="" className="text-sm-left mb-3" />
    </Row>

    {/* Small Stats Blocks */}
    <Row>
      {smallStats1.map((stats, idx) => (
         
        <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
        <a href={stats.href}>
          <SmallStats
            id={`small-stats-${idx}`}
            variation="1"
            label={stats.label}
          />
          </a>
        </Col>
      ))}
    </Row>
        
    <Row>
    {smallStats2.map((stats, idx) => (
         
         <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
         <a href={stats.href}>
           <SmallStats
             id={`small-stats-${idx}`}
             variation="1"
             label={stats.label}
           />
           </a>
         </Col>
       ))}
    </Row>
  </Container>
);

// BlogOverview.propTypes = {
//   /**
//    * The small stats dataset.
//    */
//   smallStats: PropTypes.array
// };

BlogOverview.defaultProps = {
  smallStats1: [
    {
      label: "Demographics",
      href: "demog",
    },
    {
      label: "Environments",
      href: "environments",
    },
    {
        label: "Economy",
        href: "economy",
    },
    
  ],
  smallStats2: [
    {
        label: "Technology",
        href: "tech",
    },
    {
        label: "Politics",
        href: "politics",
    },
    {
        label: "Culture",
        href: "culture",
    },
  ]
};

export default BlogOverview;
