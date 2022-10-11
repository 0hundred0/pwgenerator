import { useContext, useEffect, useState } from 'react';
import styles from '../../../styles/components/form.module.scss';
import GeneratorContext from '../../../context/GeneratorContext';
import StrengthBar from './StrengthBar';

const _LEVELS = [
  'Too Weak!',
  'Weak',
  'Medium',
  'Strong'
]

const Strength = () => {
  const [color, setColor] = useState('');
  const {pwStrength} = useContext(GeneratorContext);

  // Changes color state based on pwStrength #
  useEffect(() => {
    switch (pwStrength) {
      case 1:
        setColor('red');
        return;
      case 2:
        setColor('orange');
        return;
      case 3:
        setColor('yellow');
        return;
      case 4:
        setColor('green');
        return;      
      default:
        setColor('');
        return;
    }
  }, [pwStrength])
  return (
    <div className={styles.form_strength}>
      <p className={styles.form_strength__header}>
        Strength
      </p>
      
      <div className={styles.form_strength__wrapper}>
        <span className={styles.form_strength__level}>
          {pwStrength >= 1 && _LEVELS[pwStrength - 1]}
        </span>

        <StrengthBar num={1} str={pwStrength} color={color} />
        <StrengthBar num={2} str={pwStrength} color={color} />
        <StrengthBar num={3} str={pwStrength} color={color} />
        <StrengthBar num={4} str={pwStrength} color={color} />
      </div>
    </div>
  )
}

export default Strength;