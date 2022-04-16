import * as React from 'react'
import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import useStyles from '../../styles/linkStyle'
import classNames from '../../utils/classNames'
import colorsUtil from '../../utils/colors'
import { LinkTypes } from './types'

interface ILLinkProps extends LinkProps {
  type?: LinkTypes
  colors?: {
    main?: string
    secondary?: string
    articleBg?: string
  }
}

const LLink: FC<ILLinkProps> = ({
  className,
  to,
  children,
  colors,
  type = 'primary',
  ...rest
}) => {
  const newColors = {
    main: colors?.main || colorsUtil.light,
    secondary: colors?.secondary || colorsUtil.dark,
    articleBg: colors?.articleBg || colorsUtil.gray
  }

  const classes = useStyles({ theme: { colors: newColors } })
  const linkClassName = classNames(className, classes[type], classes.link)

  return (
    <Link to={to} className={linkClassName} {...rest}>
      {children}
    </Link>
  )
}

export default LLink
