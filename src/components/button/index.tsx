import * as React from 'react'
import { FC, HTMLProps } from 'react'
import { ButtonSkins, ButtonTypes } from './types'
import useStyles from '../../styles/buttonStyle'
import classNames from '../../utils/classNames'
import { camelCase } from '../../utils'
import { WithTypeSkin } from '../generalTypes'

export interface ButtonProps
  extends Omit<HTMLProps<HTMLButtonElement>, 'type'>,
    WithTypeSkin<ButtonTypes, ButtonSkins> {}

const Button: FC<ButtonProps> = ({
  className,
  sType = 'primary',
  skin = 'none',
  children,
  ...rest
}) => {
  const classes = useStyles()
  const buttonClassNames = classNames(
    className,
    classes[sType],
    classes[camelCase(sType, skin)],
    classes.button
  )

  return (
    <button {...rest} className={buttonClassNames}>
      {children}
    </button>
  )
}

export default Button
