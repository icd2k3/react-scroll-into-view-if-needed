import { createElement, createRef, PureComponent } from 'react';
import PropTypes from 'prop-types';
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed';

export default class ScrollIntoViewIfNeeded extends PureComponent {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node.isRequired,
    elementType: PropTypes.string,
    options: PropTypes.shape({
      boundary: PropTypes.node,
      centerIfNeeded: PropTypes.bool,
      duration: PropTypes.number,
      easing: PropTypes.oneOf([
        'ease',
        'easeIn',
        'easeOut',
        'easeInOut',
        'linear',
      ]),
      offset: PropTypes.shape(),
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number,
    }),
  };

  static defaultProps = {
    active: true,
    elementType: 'div',
    options: {
      duration: 250,
      easing: 'easeOut',
    },
  };

  constructor(props) {
    super(props);
    this.node = createRef();
  }

  componentDidMount() {
    const { active } = this.props;
    if (active) {
      this.handleScrollIntoViewIfNeeded();
    }
  }

  componentDidUpdate({ active }) {
    const { active: isNowActive } = this.props;
    if (!active && isNowActive) {
      this.handleScrollIntoViewIfNeeded();
    }
  }

  handleScrollIntoViewIfNeeded = () => {
    const { options } = this.props;
    const { current: node } = this.node;
    scrollIntoViewIfNeeded(node, options);
  };

  render() {
    const { elementType, children } = this.props;
    return createElement(elementType, { ref: this.node, ...this.props }, children);
  }
}
