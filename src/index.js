import { createElement, createRef, PureComponent } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed';

export default class ScrollIntoViewIfNeeded extends PureComponent {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node.isRequired,
    elementType: PropTypes.string,
    // this shape should mirror the scroll-into-view-if-needed options
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
      offset: PropTypes.shape({
        top: PropTypes.number,
        right: PropTypes.number,
        bottom: PropTypes.number,
        left: PropTypes.number,
      }),
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

  constructor() {
    super();
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
    const {
      active,
      elementType,
      children,
      options,
      ...wrapperProps
    } = this.props;
    return createElement(elementType, { ref: this.node, ...wrapperProps }, children);
  }
}
