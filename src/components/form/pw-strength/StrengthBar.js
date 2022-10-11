import styles from '../../../styles/components/form.module.scss';

const StrengthBar = ({color, num, str}) => {
  return (
    <div className={`${styles.form_strength__bar} 
        ${num <= str && styles[color]}`}>
    </div>
  )
}

export default StrengthBar;