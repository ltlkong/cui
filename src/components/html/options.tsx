import * as React from 'react'
import { domToReact, attributesToProps } from 'html-react-parser'
import SLink from '../link'

const buildOptions = (
  allowScripts: boolean,
  callback?: (node: any) => any
) => ({
  replace: (node: any): any => {
    if (callback) {
      const customOptions = callback(node)

      if (customOptions) {
        return callback(node)
      }
    }

    const { attribs, children, name, type } = node

    if (type === 'script' && allowScripts) {
      const script = document.createElement('script')
      const { src, type: scriptType } = attribs

      if (src) script.setAttribute('src', src)
      if (scriptType) script.setAttribute('src', scriptType)

      script.onload = function () {
        console.log('Script loaded: ' + src)
      }

      script.textContent = children[0].data

      document.head.appendChild(script)

      return null
    }

    if (name === 'a') {
      return (
        <SLink
          to={attribs.href}
          sType='article'
          skin='dark'
          {...attributesToProps(attribs)}
        >
          {domToReact(children, buildOptions(allowScripts, callback))}
        </SLink>
      )
    }
  }
})

export default buildOptions
