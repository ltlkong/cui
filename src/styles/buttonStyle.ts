import { createUseStyles } from 'react-jss'
import createBaseStyles, { IColors } from './baseStyles'

const useStyles = createUseStyles((props: IColors) => {
  const baseStyles = createBaseStyles(props)
  return {
    button: {
      ...baseStyles.base,
      ...baseStyles.colorGroup
    },
    primary: {
      ...baseStyles.hover.reverseColor
    },
    secondary: {
      ...baseStyles.hover.textUnderline
    }
  }
})

export default useStyles
