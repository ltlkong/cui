import { createUseStyles } from 'react-jss'
import baseStyles from './baseStyles'
import colorsUtil from '../utils/colors'

const useStyles = createUseStyles({
  button: {
    ...baseStyles.base,
    ...baseStyles.baseSkins.light
  },
  primary: {
    transition: 'all .2s ease-in-out'
  },
  primaryLight: {
    ...baseStyles.baseSkins.light,
    '&:hover': {
      ...baseStyles.baseSkins.dark
    }
  },
  primaryDark: {
    ...baseStyles.baseSkins.dark,
    '&:hover': {
      ...baseStyles.baseSkins.light
    }
  },

  secondary: {
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  secondaryLight: {
    ...baseStyles.baseSkins.light
  },
  secondaryDark: {
    ...baseStyles.baseSkins.dark
  },
  cover: {
    ...baseStyles.textCover
  },
  coverLight: {
    color: colorsUtil.dark,
    backgroundImage: colorsUtil.gradientDull,
    '&:hover': {
      ...baseStyles.textCover.hover
    }
  },
  coverDark: {
    color: colorsUtil.dark,
    backgroundImage: colorsUtil.gradientMoonlit,
    '&:hover': {
      color: colorsUtil.light,
      ...baseStyles.textCover.hover
    }
  }
})

export default useStyles
