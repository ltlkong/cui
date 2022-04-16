import { createUseStyles } from 'react-jss'
import createBaseBorderStyles, { IColors } from './baseBorderStyle'

const useStyles = createUseStyles((props: IColors) => {
  const baseBorderStyles = createBaseBorderStyles(props)
  return {
    button: {
      ...baseBorderStyles.base,
      ...baseBorderStyles.colorGroup
    },
    primary: {
      ...baseBorderStyles.hover.reverseColor
    },
    secondary: {
      ...baseBorderStyles.hover.textUnderline
    }
  }
})

export default useStyles
