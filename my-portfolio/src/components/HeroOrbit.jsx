import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

export const HeroOrbit = ({ children, size, rotation, shouldOrbit = false, orbitDuration, shouldSpin = false, spinDuration }) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
      <div className={twMerge(shouldOrbit === true &&
      "animate-spin")} style={{
        animationDuration: orbitDuration,
      }}>
      <div
        className="flex items-start justify-start"
        style={{
          transform: `rotate(${rotation}deg)`,
          height: `${size}px`,
          width: `${size}px`,
        }}
      >
        <div className={twMerge(shouldSpin === true && 'animate-spin')} style={{
          animationDuration: spinDuration
        }}>
        <div className="inline-flex"
        style={{
            transform: `rotate(${rotation * -1}deg)`,
        }}
        >{children}</div>
      </div>
    </div>
    </div>
    </div>
  );
};

HeroOrbit.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.number.isRequired,
  rotation: PropTypes.number.isRequired,
  shouldOrbit: PropTypes.bool, // optional
  shouldSpin: PropTypes.bool, // optional
  spinDuration: PropTypes.bool, // optional
  orbitDuration: PropTypes.string, // optional
};
