import React, { cloneElement } from 'react';
import set from 'lodash/set';
import get from 'lodash/get';
import { isInIframe } from '../../utils/iframe';
import { Actions } from '../Actions';
import types from '../../types';

const PropTypes = require('prop-types');
const Popover = require('react-popover');

class AbstractHoverComponent extends React.PureComponent {
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
      `${path}.defaultValue`,
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
        onContextMenu={this.openAction}
        style={{ display: 'inline-block' }}
      >
        <Popover
          isOpen={this.state.openAction}
          body={this.generateComponentAction()}
          onOuterAction={this.closeActions}
        >
          <div>
            {enhancedElement}
          </div>
        </Popover>
      </div>
    );
  }
}
AbstractHoverComponent.propTypes = {
  actoservice: PropTypes.shape({
    paths: PropTypes.arrayOf(PropTypes.string).isRequired,
    schemes: PropTypes.object,
    updateConfig: PropTypes.func.isRequired,
    isEditing: PropTypes.bool.isRequired
  }).isRequired,
};
export default AbstractHoverComponent;