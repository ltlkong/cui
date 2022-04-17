import * as React from 'react'
import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import useStyles from '../../styles/linkStyle'
import { LinkSkins } from './types'
import classNames from '../../utils/classNames'
import { LinkTypes } from './types'
import { camelCase } from '../../utils'

export interface SLinkProps extends LinkProps {
  type?: LinkTypes
  skin?: LinkSkins
  to: string
}

const SLink: FC<SLinkProps> = ({
  className,
  to,
  children,
  skin = 'none',
  type = 'primary',
  ...rest
}) => {
  const classes = useStyles()
  const linkClassName = classNames(
    classes[camelCase(type, skin)],
    classes[type],
    classes.link,
    className
  )

  const isHref = to.startsWith('http')

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
