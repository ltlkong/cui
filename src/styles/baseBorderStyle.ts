export interface IColors {
  colors: any
}
interface IStyleProps extends IColors {}

const createBaseBorderStyles = ({ colors }: IStyleProps) => ({
  base: {
    borderRadius: '10%',
    cursor: 'pointer',
    fontSize: '100%',
    margin: '0',
    padding: '.5em',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    fontWeight: 'inherit'
  },
  colorGroup: {
    backgroundColor: colors.main,
    color: colors.secondary,
    border: `1.5px solid ${colors.secondary}`
  },
  hover: {
    reverseColor: {
      '&:hover': {
        backgroundColor: colors.secondary,
        color: colors.main,
        borderColor: colors.main
      }
    },
    textUnderline: {
      '&:hover': {
        textDecoration: 'underline'
      }
    }
  }
})

export default createBaseBorderStyles
