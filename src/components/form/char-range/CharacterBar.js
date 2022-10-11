import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import GeneratorContext from '../../../context/GeneratorContext';
import styles from '../../../styles/components/form.module.scss';
const SSR = typeof window === 'undefined';

const CharInput = styled.input`
    background: linear-gradient(to right, #A4FFAF 0%, 
        #A4FFAF ${props => (props.chars ? props.chars / 20 * 100 : 0) + '%'}, 
        #191820 ${props => (props.chars ? props.chars / 20 * 100 : 0) + '%'},
        #191820 100%
    );
`;

const CharacterBar = () => {
    const [pwLength, setPwLength] = useState(0);
    const {charLength, setCharLength} = useContext(GeneratorContext);

    useEffect(() => {
        setCharLength(pwLength);
    }, [pwLength, setCharLength]);

  return (
    <div>
        <p className={styles.form_charText}>
            Character Length
            <span>{charLength ? charLength : 0}</span>
        </p>

        <CharInput value={charLength} chars={pwLength}
        	min={0} max={20} className={styles.form_input__range}
        	onChange={e => setPwLength(e.target.value)}
        	type="range" name="charLength" id="charLength"
				/>
    </div>
  )
}

export default CharacterBar;