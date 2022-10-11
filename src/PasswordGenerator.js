import { useEffect, useState } from "react";
import GeneratorContext from "./context/GeneratorContext";
import Container from "./components/ui/containers/Container";
import Form from "./components/form/_Form";
import Footer from './components/ui/footer/Footer';
import styles from './styles/pwgenerator.module.scss';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [pwStrength, setPwPasswordStrength] = useState(0);
  const [charLength, setCharLength] = useState(0);
  const [checkedOptions, setCheckedOptions] = useState([]);

  return (
    <GeneratorContext.Provider value={{
      password, setPassword,
      pwStrength, setPwPasswordStrength,
      charLength, setCharLength,
      checkedOptions, setCheckedOptions
    }}>
      <main className={styles.page}>
        <Container>
          <Form />
        </Container>

        <Footer />
      </main>
    </GeneratorContext.Provider>
  )
}

export default PasswordGenerator;