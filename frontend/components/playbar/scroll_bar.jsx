import React from 'react';

class ScrollBar extends React.Component {

  constructor(props) {
    super(props);
    this.playbar = this.props.playbar;
    this.handleScrollClick = this.handleScrollClick.bind(this);
  }

  handleScrollClick(e) {
    e.preventDefault();
    const timelineWidth = this.scrollbar.getBoundingClientRect().width;
    const timelineLeft = this.scrollbar.getBoundingClientRect().left;
    const clickPos = (e.clientX - timelineLeft) / timelineWidth;

    this.playbar.audio.currentTime = this.playbar.audio.duration * clickPos;
    this.playbar.setState({ elapsed: this.playbar.audio.currentTime });
  }

  renderLength(length) {
    if (this.props.audio) {
      const seconds = length % 60 < 10 ? `0${Math.floor(length % 60)}` : Math.floor(length % 60);
      return `${Math.floor(length / 60)}:${seconds}`;
    }
  }

  render() {
    if (!this.playbar.state.queue) {
      return <div></div>;
    }
    if (this.props.audio) {
      return (
        <div className="play-scroll-bar">
          <span>{this.renderLength(this.playbar.state.elapsed)}</span>
          <progress ref={ scrollbar => { this.scrollbar = scrollbar; } }
            onClick={this.handleScrollClick} value={(this.playbar.state.elapsed/this.playbar.audio.duration) * 100} max="100"></progress>
          <span>{this.renderLength(this.playbar.audio.duration)}</span>
        </div>
      );
    } else {
      return (
        <div className="play-scroll-bar">
          <span>0:00</span>
          <progress value="0" max="100"></progress>
          <span>0:00</span>
        </div>
      );
    }
  }
}

export default ScrollBar;
