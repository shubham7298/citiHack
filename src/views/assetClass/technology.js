import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Row,
  Col
} from "shards-react";

const Discussions = ({ title, discussions }) => (
    <>
    <br/>
    <iframe 
        id="qwe" 
        name="rwqq" 
        src="//surf-nebulous-stop.glitch.me" 
        // scrolling="no" 
        frameborder="0" 
        // marginHeight="0" 
        // marginWidth="0" 
        style={{width:'100%', height:''}}
        />
    <Col lg="12" md="12" sm="12" className="mb-4">
  <Card small className="blog-comments">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>

    <CardBody className="p-0">
      {discussions.map((discussion, idx) => (
        <div key={idx} className="blog-comments__item d-flex p-3">
          {/* Avatar */}
          {/* <div className="blog-comments__avatar mr-3">
            <img src={discussion.author.image} alt={discussion.author.name} />
          </div> */}

          {/* Content */}
          <div className="blog-comments__content">
            {/* Content :: Title */}
            <div className="blog-comments__meta text-mutes">
              <a className="text-secondary" href={discussion.author.url}>
                {/* {discussion.author.name} */}
              </a>{" "}
              {/* on{" "} */}
              <a className="text-secondary" href={discussion.post.url}>
                {discussion.post.title}
              </a>
              <span className="text-mutes">- {discussion.date}</span>
            </div>

            {/* Content :: Body */}
            <p className="m-0 my-1 mb-2 text-muted">{discussion.body}</p>

            {/* Content :: Actions */}
            <div className="blog-comments__actions">
              <ButtonGroup size="sm">
                <Button theme="white">
                  <span className="text-success">
                    <i className="material-icons">check</i>
                  </span>{" "}
                  Save to portfolio
                </Button>
                {/* <Button theme="white">
                  <span className="text-danger">
                    <i className="material-icons">clear</i>
                  </span>{" "}
                  Reject
                </Button> */}
                {/* <Button theme="white">
                  <span className="text-light">
                    <i className="material-icons">more_vert</i>
                  </span>{" "}
                  Edit
                </Button> */}
              </ButtonGroup>
            </div>
          </div>
        </div>
      ))}
    </CardBody>

    <CardFooter className="border-top">
      <Row>
        <Col className="text-center view-report">
          <Button theme="white" type="submit">
            View All
          </Button>
        </Col>
      </Row>
    </CardFooter>
  </Card>
  </Col>
  <Col>
  {/* <Row> */}
  <iframe 
            id="rediff_realtime_widget" 
            name="rediff_realtime_widget" 
            src="//realtime.rediff.com/widgets/result?searchbar=false&thumbnail=true&cat=business&subcategory=bankex&numresults=8" 
            scrolling="yes" 
            frameborder="0" 
            marginHeight="0" 
            marginWidth="0" 
            style={{width:'', height:'530px'}}
    />
    <iframe 
            id="rediff_realtime_widget" 
            name="rediff_realtime_widget" 
            src="//coordinated-adhesive-stem.glitch.me/" 
            scrolling="yes" 
            frameborder="0" 
            marginHeight="0" 
            marginWidth="0" 
            style={{width:'500px', height:'530px'}}
    />
    <iframe 
            id="rediff_realtime_widget" 
            name="rediff_realtime_widget" 
            src="//realtime.rediff.com/widgets/result?searchbar=false&thumbnail=true&cat=automobile&subcategory=bankex&numresults=8" 
            scrolling="yes" 
            frameborder="0" 
            marginHeight="0" 
            marginWidth="0" 
            style={{width:'', height:'530px'}}
    />
    {/* </Row> */}
  </Col>
  </>
);

Discussions.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The discussions dataset.
   */
  discussions: PropTypes.array
};

Discussions.defaultProps = {
  title: "Technology Trends",
  discussions: [
    {
      id: 1,
      date: "1 days ago",
      author: {
        image: require("../../images/avatars/1.jpg"),
        name: "John Doe",
        url: "#"
      },
      post: {
        title: "Govt to sell up to 20% stake in IRCTC via OFS; stock nosedives 13%",
        url: "#"
      },
      body: "Shares of Indian Railway Catering & Tourism Corp (IRCTC) fell 13 percent intraday on December 10 ..."
    },
    {
      id: 2,
      date: "3 days ago",
      author: {
        image: require("../../images/avatars/2.jpg"),
        name: "John Doe",
        url: "#"
      },
      post: {
        title: "Maruti Suzuki stock gains on plans to hike car prices",
        url: "#"
      },
      body: "Over the past year, the cost of the company's vehicles has been impacted ..."
    },
    {
      id: 3,
      date: "5 days ago",
      author: {
        image: require("../../images/avatars/3.jpg"),
        name: "John Doe",
        url: "#"
      },
      post: {
        title: "UPL share price tumbles 13% after whistleblower accused promoters of siphoning",
        url: "#"
      },
      body: "The whistleblower alleges that UPL entered into rent deals with the shell company..."
    }
  ]
};

export default Discussions;
