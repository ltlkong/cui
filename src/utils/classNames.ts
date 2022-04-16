type Arg = string | undefined

const classNames = (...args: Arg[]) => {
  return args.join(' ')
}

export default classNames
