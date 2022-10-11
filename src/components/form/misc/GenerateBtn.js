import styles from '../../../styles/components/form.module.scss';

const GenerateBtn = () => {
  return (
    <button type='submit' className={styles.form__generate}>
      <span className={styles.form__generate__text}>
        Generate
      </span>
      
      <svg width="12" height="12" fill='inherit' xmlns="http://www.w3.org/2000/svg"><path d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"/></svg>
    </button>
  )
}

export default GenerateBtn;