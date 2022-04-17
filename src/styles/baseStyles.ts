export interface IColors {
  colors: any
}
interface IStyleProps extends IColors {}

const createBaseStyles = ({ colors }: IStyleProps) => ({
  base: {
    borderRadius: '5px',
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
        borderColor: colors.main,
        transition: 'all .2s ease-in-out'
      }
    },

    textUnderline: {
      '&:hover': {
        textDecoration: 'underline'
      }
    },

    textCover: {
      backgroundImage: colors.mainGradient,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 0.3em',
      backgroundPosition: '0 88%',
      transition: 'background-size 0.12s ease-in',
      padding: '.5em',
      color: colors.secondary,

      '&:hover': {
        backgroundSize: '100% 100%',
        color: colors.tertiary
      }
    }
  }
})

export default createBaseStyles
