import { createUseStyles } from 'react-jss'
import baseStyles, { getBaseColorGroup } from './baseStyles'
import { LinkSkins } from '../components/link/types'
import colorsUtil from '../utils/colors'

export interface ILinkStylesProps {}

const getLinkSkins = (skin: LinkSkins) => {
  switch (skin) {
    case 'springBlue':
      return getBaseColorGroup(
        colorsUtil.springBlue,
        colorsUtil.light,
        colorsUtil.springYellow
      )
    case 'springGreen':
      return getBaseColorGroup(
        colorsUtil.springGreen,
        colorsUtil.light,
        colorsUtil.springYellow
      )
    default:
      return null
  }
}

const useStyles = createUseStyles({
  link: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'inline-block',
    ...baseStyles.base
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
  primarySpringBlue: {
    ...getLinkSkins('springBlue'),
    '&:hover': {
      ...getLinkSkins('springGreen')
    }
  },
  primarySpringGreen: {
    ...getLinkSkins('springGreen'),
    '&:hover': {
      ...getLinkSkins('springBlue')
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
  secondarySpringBlue: {
    ...getLinkSkins('springBlue')
  },
  secondarySpringGreen: {
    ...getLinkSkins('springGreen')
  },

  article: {
    fontStyle: 'italic',
    lineHeight: 'inherit',
    margin: '0 .5em',

    '&:hover': {
      textDecoration: 'underline'
    }
  },
  articleLight: {
    ...baseStyles.baseSkins.light,
    border: 'none',
    backgroundColor: colorsUtil.gray
  },
  articleDark: {
    ...baseStyles.baseSkins.dark,
    border: 'none'
  },
  articleSpringBlue: {
    ...getLinkSkins('springBlue'),
    border: 'none'
  },
  articleSpringGreen: {
    ...getLinkSkins('springGreen'),
    border: 'none'
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
