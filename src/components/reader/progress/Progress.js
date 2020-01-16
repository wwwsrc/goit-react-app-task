import React from "react";
import PropTypes from "prop-types";

const Progress = ({ indexPage, totalArticle }) => (
  <p>
    {indexPage}/{totalArticle}
  </p>
);

Progress.propTypes = {
  indexPage: PropTypes.number.isRequired,
  totalArticle: PropTypes.number.isRequired
};
export default Progress;
