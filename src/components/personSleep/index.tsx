import * as React from 'react';
import { ReactElement, HTMLProps } from 'react';
import useStyles from '../../styles/personSleepStyle';
import { classNames, colorUtils } from '../../utils';

interface IPersonSleepProps
  extends HTMLProps<HTMLDivElement> {
  pSize: string;
  zText?: string;
  color?: string;
}

function PersonSleepFun({
  className,
  pSize,
  style,
  color,
  zText = 'Z',
  ...rest
}: IPersonSleepProps): ReactElement {
  const newColor = color || colorUtils.dark;
  const classes = useStyles({ theme: { color: newColor } });

  return (
    <div
      className={classNames(className, classes.personSleep)}
      {...rest}
      style={{ fontSize: pSize, ...style }}>
      <div>
        <span>{zText}</span>
      </div>
      {[...Array(9)].map((_, key) => (
        <div key={key}></div>
      ))}
    </div>
  );
}

export default PersonSleepFun;
