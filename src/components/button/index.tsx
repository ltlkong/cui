import * as React from 'react'
import { FC, HTMLProps } from 'react'
import { ButtonTypes } from './types'
import useStyles from '../../styles/buttonStyle'
import classNames from '../../utils/classNames'
import colorsUtil from '../../utils/colors'

export interface IButtonProps extends HTMLProps<HTMLButtonElement> {
  type?: ButtonTypes
  colors?: {
    main: string
    secondary: string
  }
}

const Button: FC<IButtonProps> = ({
  className,
  type = 'primary',
  children,
  colors,
  ...rest
}) => {
  const newColors = {
    main: colors?.main || colorsUtil.light,
    secondary: colors?.secondary || colorsUtil.dark
  }

  const classes = useStyles({ theme: { colors: newColors } })
  const buttonClassNames = classNames(className, classes[type], classes.button)

  return (
    <button {...rest} className={buttonClassNames}>
      {children}
    </button>
  )
}

export default Button
