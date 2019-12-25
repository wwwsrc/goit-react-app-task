import React from "react";

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

export default Controls;
