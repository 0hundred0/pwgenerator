import { useContext, useState } from 'react';
import styles from '../../../styles/components/form.module.scss';
import GeneratorContext from '../../../context/GeneratorContext';

const BoxItem = ({labelTxt, option}) => {
    const [checked, setChecked] = useState(false);

    const {
        pwStrength, setPwPasswordStrength, checkedOptions, setCheckedOptions 
    } = useContext(GeneratorContext);
      
    const handleChange = (opt) => {
        setChecked(!checked);
        let opts = checkedOptions;
    
        if(opts.includes(opt) === true) {
          for(let i = 0; i < opts.length; i++) {
            if(opts[i] === opt) {
              opts.splice(i, 1);
              setPwPasswordStrength(pwStrength - 1);
            }
          }
          setCheckedOptions(opts);
        }
        else if(opts.includes(opt) === false) {
          opts.push(opt);
          setPwPasswordStrength(pwStrength + 1);
          setCheckedOptions(opts);
        }
    }
  return (
    <div className={styles.form_item}>
        <input type="checkbox" name="options" id={option}
        checked={checked} onChange={() => handleChange(option)} />
        <label htmlFor={option}>{labelTxt}</label>
    </div>      
  )
}

export default BoxItem;