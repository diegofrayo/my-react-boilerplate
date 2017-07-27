// npm libs
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// styles
import StyleSheet from './stylesheet';

class LabelMessage extends React.PureComponent {

  render() {

    const {
      description,
      type,
    } = this.props;

    if (!description || !type) {
      return null;
    }

    return (
      <div className={classnames(StyleSheet.container, { [StyleSheet.error]: type === 'ERROR' }, { [StyleSheet.success]: type === 'SUCCESS' })}>
        <p className={classnames(StyleSheet.text)}>
          <strong>{type}</strong>
        </p>
        <p className={classnames(StyleSheet.text)}>
          {description}
        </p>
      </div>
    );

  }

}

LabelMessage.propTypes = {
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default LabelMessage;
