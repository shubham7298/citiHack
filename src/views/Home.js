import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import PageTitle from "./../components/common/PageTitle";
import SmallStats from "./../components/common/SmallStats";

import ScriptTag from 'react-script-tag';
// import UsersByDevice from "./../components/blog/UsersByDevice";


const BlogOverview = ({ smallStats }) => {

return (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle title="Site Overview" subtitle="Dashboard" className="text-sm-left mb-3" />
    </Row>

    {/* Small Stats Blocks */}
    <Row>
      {smallStats.map((stats, idx) => (
         
        <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
        <a href={stats.href}>
          <SmallStats
            id={`small-stats-${idx}`}
            variation="1"
            // chartData={stats.datasets}
            // chartLabels={stats.chartLabels}
            label={stats.label}
            // value={stats.value}
            // percentage={stats.percentage}
            // increase={stats.increase}
            // decrease={stats.decrease}
          />
          </a>
        </Col>
      ))}
    </Row>
     {/* <div className="content" dangerouslySetInnerHTML={{__html: x}}></div> */}
    <Row>
    <iframe 
        id="rediff_realtime_widget" 
        name="rediff_realtime_widget" 
        src="//realtime.rediff.com/widgets/result?searchbar=true&thumbnail=true&cat=business&subcategory=bankex&numresults=8" 
        scrolling="no" 
        frameborder="0" 
        marginHeight="0" 
        marginWidth="0" 
        style={{width:'300px', height:'500px'}}
        />
        <iframe 
        id="qwe" 
        name="rwqq" 
        src="//classy-stirring-gallium.glitch.me/" 
        // scrolling="no" 
        frameborder="0" 
        // marginHeight="0" 
        // marginWidth="0" 
        style={{width:'800px', height:'500px'}}
    />
    </Row>
    <Row>
    <iframe
            id="trends-widget-2"
            src="https://trends.google.com:443/trends/embed/explore/TIMESERIES?req=%7B%22comparisonItem%22%3A%5B%7B%22keyword%22%3A%22bitcoin%22%2C%22geo%22%3A%22US%22%2C%22time%22%3A%22today%2012-m%22%7D%5D%2C%22category%22%3A0%2C%22property%22%3A%22%22%7D&amp;tz=-480&amp;eq=q%3Dbrexit%26geo%3DUS%26date%3Dtoday%2012-m"
            width="100%"
            height="300px"
            frameborder="0"
            scrolling="0"
          />
    </Row>
    <Row>
    
    </Row>
  </Container>
)};

BlogOverview.propTypes = {
  /**
   * The small stats dataset.
   */
  smallStats: PropTypes.array
};

BlogOverview.defaultProps = {
  smallStats: [
    {
      label: "Asset Classes",
      href: "assestclasses",
    },
    {
      label: "Major Trends",
      href: "triggers",
    },
    // {
    //   label: "Send of Reverfication",
    //   value: "2",
    //   // percentage: "3.8%",
    //   // increase: false,
    //   decrease: true,
    //   chartLabels: [null, null, null, null, null, null, null],
    //   attrs: { md: "4", sm: "6" },
    //   datasets: [
    //     {
    //       label: "Today",
    //       fill: "start",
    //       borderWidth: 1.5,
    //       backgroundColor: "rgba(255,180,0,0.1)",
    //       borderColor: "rgb(255,180,0)",
    //       data: [2, 3, 3, 3, 4, 3, 3]
    //     }
    //   ]
    // },
    
  ]
};

export default BlogOverview;
