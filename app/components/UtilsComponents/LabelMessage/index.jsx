// npm libs
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// material-ui
import withStyles from 'material-ui/styles/withStyles';

// components
import VerticalCenterWrapper from 'components/VerticalCenterWrapper';

// styles
import StyleSheet from './stylesheet';

class LabelMessage extends React.PureComponent {

  render() {

    const {
      classes,
      description,
      type,
      uiType,
      valign,
    } = this.props;

    if (!description || !type || uiType !== 'LABEL') {
      return null;
    }

    const render = (
      <div className={classnames(classes.container, { [classes.error]: type === 'ERROR' }, { [classes.success]: type === 'SUCCESS' })}>
        <p className={classnames(classes.text)}>
          <strong>{type}</strong>
        </p>
        <p className={classnames(classes.text)}>
          {description}
        </p>
      </div>
    );

    if (valign) {
      return (
        <VerticalCenterWrapper>
          {() => render}
        </VerticalCenterWrapper>
      );
    }

    return render;
  }

}

LabelMessage.propTypes = {
  classes: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  uiType: PropTypes.string.isRequired,
  valign: PropTypes.bool,
};

LabelMessage.defaultProps = {
  valign: false,
};

export default withStyles(StyleSheet)(LabelMessage);
