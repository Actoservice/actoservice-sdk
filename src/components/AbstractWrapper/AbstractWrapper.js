import React, { cloneElement } from 'react';
import set from 'lodash/set';
import get from 'lodash/get';
import { isInIframe } from '../../utils/iframe';
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

    console.log(updates);
    this.props.actoservice
      .updateConfig(updates);
  }

  generateComponentAction() {
    const { actoservice: { paths, scheme } } = this.props;

    return paths.map((path) => (
      <Actions
        key={path}
        path={path}
        title={get(scheme, `${path}.title`)}
        onChange={this.handleChange}
        type={get(scheme, `${path}.type`)}
        value={get(scheme, `${path}.value`)}
      />
    ));
  }

  render() {
    const { classes } = this.props;
    const actoservice = this.props.actoservice;

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
          display: 'inline-block',
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
        >
          {enhancedElement}
        </Popover>
      </div>
    );
  }
}
AbstractWrapper.propTypes = {
  classes: {
    container: PropTypes.string,
    hint: PropTypes.string
  },
  actoservice: PropTypes.shape({
    paths: PropTypes.arrayOf(PropTypes.string).isRequired,
    schemes: PropTypes.object,
    updateConfig: PropTypes.func.isRequired,
    isEditing: PropTypes.bool.isRequired
  }).isRequired,
};
export default AbstractWrapper;