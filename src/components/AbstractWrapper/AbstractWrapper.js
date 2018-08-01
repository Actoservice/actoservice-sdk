import React, { cloneElement } from 'react';
import set from 'lodash/set';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import { isInIframe } from '../../utils/iframe';
import {
  getTitle,
  getMax,
  getMin,
  getType,
  getValue
} from '../../utils/values';
import { Actions } from '../Actions';
import types from '../../types';

const PropTypes = require('prop-types');
const Popover = require('react-popover');

const hintSize = 20;

class AbstractWrapper extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { openAction: false };

    this.openAction = this.openAction.bind(this);
    this.closeActions = this.closeActions.bind(this);
    this.generateComponentAction = this.generateComponentAction.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  openAction(e) {
    e.preventDefault();

    if (!isEmpty(AbstractWrapper.lastOpenPopover) && AbstractWrapper.lastOpenPopover !== this) {
      AbstractWrapper
        .lastOpenPopover
        .closeActions();
    }

    AbstractWrapper.lastOpenPopover = this;

    this.setState({ openAction: true });
  }

  closeActions() {
    this.setState({ openAction: false });
  }

  handleChange(path, value) {
    // TODO: Should update not only defaultValue
    const updates = {};
    set(
      updates,
      `${path}.value`,
      value
    );

    this.props.actoservice
      .updateConfig(updates);
  }

  generateComponentAction() {
    const { actoservice: { paths, scheme } } = this.props;

    return paths.map((path) => (
      <Actions
        key={path}
        path={path}
        max={getMax(path)({ configMap: scheme })}
        min={getMin(path)({ configMap: scheme })}
        title={getTitle(path)({ configMap: scheme })}
        onChange={this.handleChange}
        type={getType(path)({ configMap: scheme })}
        value={getValue(path)({ configMap: scheme })}
      />
    ));
  }

  render() {
    const { classes } = this.props;
    const { actoservice } = this.props;

    const enhancedElement = cloneElement(this.props.children, {
      actoservice: {
        scheme: actoservice.scheme,
      }
    });

    if (!actoservice.isEditing) {
      return enhancedElement;
    }

    return (
      <div
        className={`as-action-cntr ${get(classes, 'container', '')}`}
        onMouseOver={this.openAction}
        style={{
          position: 'relative',
          transition: '200ms box-shadow',
          boxShadow: this.state.openAction
            ? '2px 2px 36px -1px rgba(0,0,0,0.75)'
            : 'none'
        }}
      >
        <div
          className={`as-action-hint ${get(classes, 'hint', '')}`}
          style={{
            position: 'absolute',
            top:  -hintSize / 2,
            right: -hintSize / 2,
            width: hintSize,
            height: hintSize,
            borderRadius: hintSize / 2,
            backgroundColor: '#0a6c8f',
            opacity: this.state.openAction ? 0 : 1,
            transition: '200ms opacity',
            boxShadow: '2px 2px 36px -1px rgba(0,0,0,0.75)'
          }}
        />
        <Popover
          preferPlace={'below'}
          isOpen={this.state.openAction}
          body={this.generateComponentAction()}
          onOuterAction={this.closeActions}
          enterExitTransitionDurationMs={100}
        >
          <div>
            {enhancedElement}
          </div>
        </Popover>
      </div>
    );
  }
}

AbstractWrapper.lastOpenPopover = null;

AbstractWrapper.propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.string,
    hint: PropTypes.string
  }),
  actoservice: PropTypes.shape({
    paths: PropTypes.arrayOf(PropTypes.string).isRequired,
    schemes: PropTypes.object,
    updateConfig: PropTypes.func.isRequired,
    isEditing: PropTypes.bool.isRequired
  }).isRequired,
};
export default AbstractWrapper;