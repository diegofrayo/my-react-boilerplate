import './reset.css';
import { setTheme } from '@diegofrayo/styles';

const theme = {
  headerHeight: '50px',

  spacing: {
    base: '10px',
    small: '5px',
    normal: '10px',
    medium: '15px',
    large: '20px',
  },

  color: {
    body: '#FFF',
  },
};

setTheme(theme);
