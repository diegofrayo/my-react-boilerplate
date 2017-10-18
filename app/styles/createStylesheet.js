/* eslint quote-props: "off" */

import { Dimensions, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import chroma from 'chroma-js';

const tones = [100, 200, 300, 400, 500, 600, 700];
const baseBlack = '#777777';
const baseBlue = '#4787EE';
const baseWhite = '#FFFFFF';

export const theme = {
  tabBar: {
    activeTintColor: '#3478F6',
    inactiveTintColor: '#929292',
    backgroundColor: '#F7F7F7',
    borderTopColor: 'rgba(0, 0, 0, .3)',
    borderTopWidth: 0.5,
    flexDirection: 'row',
    height: 50,
  },
  statusBarHeight: Constants.statusBarHeight,
  screenWidth: Dimensions.get('window').width,
  spacing: [1, 2, 3, 4, 5].reduce(
    (acum, current) => {
      // eslint-disable-next-line
      acum[current] = current * acum.base;
      return acum;
    },
    { base: 8 },
  ),
  fontSize: {
    xsmall: 12,
    small: 14,
    normal: 16,
    medium: 18,
    large: 20,
    xlarge: 22,
  },
  fontWeight: {
    normal: '400',
    semibold: '500',
    bold: '700',
  },
  color: {
    black: tones.reduce((acum, current, index) => {
      // eslint-disable-next-line
      acum[current] = chroma(baseBlack)
        .darken(index * 0.3)
        .hex();
      return acum;
    }, {}),
    blue: tones.reduce((acum, current, index) => {
      // eslint-disable-next-line
      acum[current] = chroma(baseBlue)
        .darken(index * 0.3)
        .hex();
      return acum;
    }, {}),
    white: tones.reduce((acum, current, index) => {
      // eslint-disable-next-line
      acum[current] = chroma(baseWhite)
        .darken(index * 0.3)
        .hex();
      return acum;
    }, {}),
  },
};

export default fn => StyleSheet.create(fn(theme));
