import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import PageTitle from "./../components/common/PageTitle";
import SmallStats from "./../components/common/SmallStats";


const BlogOverview = ({ smallStats1, smallStats2 }) => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle title="Asset Classes" subtitle="" className="text-sm-left mb-3" />
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
      label: "Arts & Antiques",
      href: "assestclasses",
    },
    {
      label: "Fine Wine",
      href: "triggers",
    },
    {
        label: "Collectibles",
        href: "triggers",
    },
    
  ],
  smallStats2: [
    {
        label: "Hedge Funds",
        href: "triggers",
    },
    {
        label: "Private Equity",
        href: "triggers",
    },
    {
        label: "Venture Capital Funds",
        href: "triggers",
    },
  ]
};

export default BlogOverview;
