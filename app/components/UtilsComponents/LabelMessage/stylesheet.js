// material-ui
import {
  createStyleSheet,
} from 'material-ui/styles';

export default createStyleSheet('LabelMessage', theme => ({
  container: {
    marginBottom: theme.spacing.unit * 3,
    padding: 20,
    width: '100%',
  },
  text: {
    margin: 0,
    wordWrap: 'break-word',
  },
  error: {
    backgroundColor: '#f2dede',
    borderColor: '#ebccd1',
    color: '#a94442',
  },
  success: {
    backgroundColor: '#dff0d8',
    borderColor: '#d6e9c6',
    color: '#3c763d',
  },
}));
