import React, { Component } from "react";
import Controls from "./controls/Controls";
import Progress from "./progress/Progress";
import Publication from "./publication/Publication";

export default class Reader extends Component {
  static defaultProps = {
    step: 1
  };
  state = {
    publicationIndex: 0
  };
  handlePrevArticle = () => {
    this.setState(prevState => ({
      publicationIndex: prevState.publicationIndex - this.props.step
    }));
  };
  handleNextArticle = () => {
    this.setState(prevState => ({
      publicationIndex: prevState.publicationIndex + this.props.step
    }));
  };

  render() {
    const publication = this.props.items[this.state.publicationIndex];
    console.log(this.props.items);
    const disableBtnPrev = this.state.publicationIndex === 0 ? true : false;
    const disableBtnNext =
      this.state.publicationIndex === this.props.items.length - 1
        ? true
        : false;
    return (
      <div>
        <Controls
          onPrevClick={this.handlePrevArticle}
          onNextClick={this.handleNextArticle}
          disableBtnPrev={disableBtnPrev}
          disableBtnNext={disableBtnNext}
          items={this.props.items}
        />
        <Progress
          indexPage={this.state.publicationIndex}
          totalArticle={this.props.items.length - 1}
        />
        <Publication
          title={publication.title}
          text={publication.text}
          id={publication.id}
        />
      </div>
    );
  }
}
