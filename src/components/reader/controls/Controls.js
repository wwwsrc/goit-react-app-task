import React from "react";
import PropTypes from "prop-types";

const Controls = ({
  onPrevClick,
  onNextClick,
  disableBtnPrev,
  disableBtnNext
}) => (
  <section>
    <button
      disabled={disableBtnPrev}
      type="button"
      name="next"
      data-prev="prev"
      onClick={onPrevClick}
    >
      Назад
    </button>
    <button
      disabled={disableBtnNext}
      type="button"
      name="next"
      data-next="next"
      onClick={onNextClick}
    >
      Вперед
    </button>
  </section>
);
Controls.propTypes = {
  onPrevClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
  disableBtnPrev: PropTypes.bool.isRequired,
  disableBtnNext: PropTypes.bool.isRequired
};

export default Controls;
