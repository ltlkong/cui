import * as React from 'react'
import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import useStyles from '../../styles/linkStyle'
import { AvalialeLinkColors } from './types'
import classNames from '../../utils/classNames'
import colorsUtil from '../../utils/colors'
import { LinkTypes } from './types'

export interface ILinkProps extends LinkProps {
  type?: LinkTypes
  colors?: Partial<AvalialeLinkColors>
}

const SLink: FC<ILinkProps> = ({
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
    tertiary: colors?.tertiary || colorsUtil.light,
    articleBg: colors?.articleBg || colorsUtil.gray,
    mainGradient:
      colors?.mainGradient ||
      'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,13,1) 100%, rgba(0,212,255,1) 100%);'
  }
  const classes = useStyles({ theme: { colors: newColors } })
  const linkClassName = classNames(className, classes[type], classes.link)

  if (to.includes('.')) {
    return (
      <a href={to} className={linkClassName} target='_blank' {...rest}>
        {children}
      </a>
    )
  }

  return (
    <Link to={to} className={linkClassName} {...rest}>
      {children}
    </Link>
  )
}

export default SLink
