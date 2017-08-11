// material-ui
import {
  createStyleSheet,
} from 'material-ui/styles';

export default createStyleSheet('VerticalCenterWrapper', theme => ({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    padding: theme.spacing.unit * 2,
  },
}));
