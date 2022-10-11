import { useContext } from "react";
import GeneratorContext from "../../context/GeneratorContext";
import Password from "./misc/Password";
import CharacterBar from "./char-range/CharacterBar";
import Checkboxes from "./pw-options/Checkboxes";
import Strength from "./pw-strength/Strength";
import GenerateBtn from "./misc/GenerateBtn";
import styles from '../../styles/components/form.module.scss';
// Utils Imports
import generatePW from '../../utils/GeneratePW';

const Form = () => {
  const { charLength, checkedOptions, setPassword} = useContext(GeneratorContext);
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const outputPW = generatePW(charLength, checkedOptions);
    
    if(outputPW !== '') {
      setPassword(outputPW);
    } else {
      return;
    }
    
  }
  return (
    <form onSubmit={e => handleSubmit(e)}>
      <Password />

      <div className={styles.form_container}>
        <CharacterBar />
        <Checkboxes />
        <Strength />
        <GenerateBtn />
      </div>
    </form>
  )
}

export default Form;