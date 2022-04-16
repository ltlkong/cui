import { createUseStyles } from "react-jss"
import createBaseBorderStyles, { IColors } from "./baseBorderStyle"


interface IProps extends IColors {
    colors: {
        main: string,
        secondary: string,
        articleBg: string,
    }
}

const useStyles = createUseStyles((props:IProps) => {
    const baseBorderStyles = createBaseBorderStyles(props)
    
    return{
  link: {
            textDecoration: 'none',
            ...baseBorderStyles.base,
            ...baseBorderStyles.colorGroup,
        }
,
 article: {
     border:'none',
     backgroundColor:props.colors.articleBg,
     fontStyle:'italic',
     lineHeight:'inherit',
     ...baseBorderStyles.hover.textUnderline,

 },
  primary: {
      ...baseBorderStyles.hover.reverseColor
  },
  secondary: {
      ...baseBorderStyles.hover.textUnderline
},
}
})

export default useStyles