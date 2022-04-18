import * as React from 'react'
import { FC, HTMLProps } from 'react'
import parse from 'html-react-parser'
import buildOptions from './options'

interface HtmlProps extends HTMLProps<HTMLDivElement> {
  children: string
  allowScripts?: boolean
  replace?: (node: any) => any
}

const Html: FC<HtmlProps> = ({
  children,
  allowScripts = false,
  replace,
  ...rest
}) => {
  const options = buildOptions(allowScripts, replace)
  const element = parse(children, options)

  return <div {...rest}>{element}</div>
}

export default Html
