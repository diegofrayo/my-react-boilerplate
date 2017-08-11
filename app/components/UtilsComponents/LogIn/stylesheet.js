// material-ui
import {
  createStyleSheet,
} from 'material-ui/styles';

export default createStyleSheet('LogIn', theme => ({
  container: {
    margin: '0 auto',
    maxWidth: 400,
  },
  paper: {
    minHeight: 300,
    overflow: 'auto',
    padding: theme.spacing.unit * 2,
    position: 'relative',
  },
}));
