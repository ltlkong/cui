import { createUseStyles } from 'react-jss';

interface IStylesProps {
  color: string;
}

const position = (leftV: number, bottomV: number) => ({
  left: leftV - 0.4 + 'em',
  bottom: bottomV + 'em'
});
const size = (widthV: number, heightV: number) => ({
  width: widthV + 'em',
  height: heightV + 'em'
});

const useStyles = createUseStyles((props: IStylesProps) => {
  return {
    '@keyframes personFunSleepZ ': {
      from: {
        ...position(1, 2.5),
        opacity: 1
      },
      to: {
        ...position(2, 3.5),
        opacity: 0
      }
    },
    personSleep: {
      ...size(2.3, 3.2),
      position: 'relative',
      userSelect: 'none',
      zIndex: 1,

      '& div': {
        position: 'absolute',
        backgroundColor: props.color,
        borderColor: props.color,
        zIndex: 1
      },

      '& div:first-child': {
        ...position(1, 2),
        ...size(1.1, 1),
        borderWidth: '0.05em',
        borderStyle: 'solid',
        borderRadius: '50%',
        backgroundColor: 'transparent',
        transformOrigin: '40% 90%',
        transform: 'rotate(40deg)',
        '& span': {
          position: 'absolute',
          fontWeight: 300,
          fontSize: '.4em',
          color: props.color,
          borderColor: 'transparent',
          background: 'transparent',
          animation: '$personFunSleepZ 1.5s infinite linear'
        }
      },
      '& div:nth-child(2) ': {
        ...position(1.3, 0.9),
        ...size(0.03, 1.1),
        transform: 'rotate(30deg)'
      },

      '& div:nth-child(3) ': {
        ...position(1.05, 0.95),
        ...size(0.33, 0.03)
      },

      '& div:nth-child(4) ': {
        ...position(1.35, -0.05),
        ...size(0.05, 1),
        transformOrigin: 'top left',
        transform: 'rotate(-40deg)'
      },

      '& div:nth-child(5) ': {
        ...position(0.8, 0.9),
        ...size(0.5, 0.05)
      },

      '& div:nth-child(6) ': {
        ...position(0.78, 0.9),
        ...size(0.03, 1)
      },

      '& div:nth-child(7) ': {
        ...position(1.5, 1.8),
        ...size(0.8, 0.03),
        transform: 'rotate(20deg)',
        transformOrigin: 'left'
      },

      '& div:nth-child(8) ': {
        ...position(1.9, 1.5),
        ...size(0.7, 0.03)
      },

      '& div:nth-child(9) ': {
        ...position(1.9, 1.52),
        ...size(0.6, 0.03),
        transformOrigin: 'left',
        transform: 'rotate(0deg)'
      }
    }
  };
});

export default useStyles;
