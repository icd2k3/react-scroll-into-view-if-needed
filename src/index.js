import { createElement, createRef, PureComponent } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed';

export default class ScrollIntoViewIfNeeded extends PureComponent {
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
ScrollIntoViewIfNeeded.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
  elementType: PropTypes.string,
  // this shape should mirror the scroll-into-view-if-needed options
  options: PropTypes.shape({
    behavior: PropTypes.oneOfType([
      PropTypes.oneOf([
        'auto',
        'smooth',
        'instant',
      ]),
      PropTypes.func,
    ]),
    block: PropTypes.oneOf([
      'center',
      'end',
      'nearest',
      'start',
    ]),
    inline: PropTypes.oneOf([
      'center',
      'end',
      'nearest',
      'start',
    ]),
    scrollMode: PropTypes.oneOf([
      'always',
      'if-needed',
    ]),
    boundary: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func,
    ]),
    skipOverflowHiddenElements: PropTypes.bool,
  }),
};

ScrollIntoViewIfNeeded.defaultProps = {
  active: true,
  elementType: 'div',
  options: {
    behavior: 'smooth',
    scrollMode: 'if-needed',
  },
};
