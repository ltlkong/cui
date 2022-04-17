import colorsUtil from '../utils/colors'

export const getBaseColorGroup = (
  bg: string,
  text: string,
  border: string
) => ({
  backgroundColor: bg,
  color: text,
  border: '1px solid' + border
})

const baseStyles = {
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

  baseSkins: {
    dark: {
      ...getBaseColorGroup(colorsUtil.dark, colorsUtil.light, colorsUtil.light)
    },
    light: {
      ...getBaseColorGroup(colorsUtil.light, colorsUtil.dark, colorsUtil.dark)
    }
  },
  textCover: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 0.3em',
    backgroundPosition: '0 88%',
    transition: 'background-size 0.12s ease-in',

    hover: {
      backgroundSize: '100% 100%'
    }
  }
}

export default baseStyles
