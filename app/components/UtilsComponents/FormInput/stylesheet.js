// material-ui
import {
  createStyleSheet,
} from 'material-ui/styles';

export default createStyleSheet('FormInput', theme => ({
  formControl: {
    display: 'block',
    marginBottom: theme.spacing.unit * 4,
  },
}));
