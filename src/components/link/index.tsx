import * as React from 'react'
import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import useStyles from '../../styles/linkStyle'
import { LinkSkins } from './types'
import classNames from '../../utils/classNames'
import { LinkTypes } from './types'
import { camelCase } from '../../utils'
import { WithTypeSkin } from '../generalTypes'

export interface SLinkProps
  extends LinkProps,
    WithTypeSkin<LinkTypes, LinkSkins> {
  to: string
}

const SLink: FC<SLinkProps> = ({
  className,
  to,
  children,
  skin = 'none',
  sType = 'primary',
  ...rest
}) => {
  const classes = useStyles()
  const linkClassName = classNames(
    classes[camelCase(sType, skin)],
    classes[sType],
    classes.link,
    className
  )

  const isHref = to.startsWith('http') || to.startsWith('#')

  if (isHref) {
    return (
      <a href={to} className={linkClassName} {...rest}>
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
