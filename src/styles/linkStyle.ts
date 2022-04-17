import { createUseStyles } from 'react-jss'
import createbaseStyles, { IColors } from './baseStyles'
import { AvalialeLinkColors } from '../components/link/types'

export interface ILinkStylesProps extends IColors {
  colors: AvalialeLinkColors
}

const useStyles = createUseStyles((props: ILinkStylesProps) => {
  const baseStyles = createbaseStyles(props)

  return {
    link: {
      textDecoration: 'none',
      ...baseStyles.base,
      ...baseStyles.colorGroup
    },
    article: {
      border: 'none',
      backgroundColor: props.colors.articleBg,
      fontStyle: 'italic',
      lineHeight: 'inherit',
      margin: '0 .5em',
      ...baseStyles.hover.textUnderline
    },
    primary: {
      ...baseStyles.hover.reverseColor
    },
    secondary: {
      ...baseStyles.hover.textUnderline
    },

    cover: {
      border: 'none',
      ...baseStyles.hover.textCover
    }
  }
})

export default useStyles
