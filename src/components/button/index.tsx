import * as React from 'react'
import { FC, HTMLProps } from 'react'
import { ButtonSkins, ButtonTypes } from './types'
import useStyles from '../../styles/buttonStyle'
import classNames from '../../utils/classNames'
import { camelCase } from '../../utils'

export interface IButtonProps extends HTMLProps<HTMLButtonElement> {
  type?: ButtonTypes
  skin?: ButtonSkins
}

const Button: FC<IButtonProps> = ({
  className,
  type = 'primary',
  skin = 'none',
  children,
  ...rest
}) => {
  const classes = useStyles()
  const buttonClassNames = classNames(
    className,
    classes[type],
    classes[camelCase(type, skin)],
    classes.button
  )

  return (
    <button {...rest} className={buttonClassNames}>
      {children}
    </button>
  )
}

export default Button
