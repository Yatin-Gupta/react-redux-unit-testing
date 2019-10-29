import React, { Component } from "react";
import PropTypes from "prop-types";

class Headline extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { header, desc } = this.props;
    if (!header) return null;
    return (
      <div data-test="HeadlineComponent">
        <h1>{header}</h1>
        <p>{desc}</p>
      </div>
    );
  }
}

Headline.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
  tempAr: PropTypes.arrayOf(
    PropTypes.shape({
      fName: PropTypes.string,
      lName: PropTypes.string,
      age: PropTypes.number,
      email: PropTypes.string,
      hobbies: PropTypes.arrayOf(PropTypes.string),
      profile: PropTypes.arrayOf(
        PropTypes.shape({
          company: PropTypes.string,
          position: PropTypes.string
        })
      )
    })
  )
};

export default Headline;
