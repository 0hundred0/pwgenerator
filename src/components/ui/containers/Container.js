import Header from '../header/Header';
import styles from '../../../styles/pwgenerator.module.scss';

const Container = ({ children }) => {
  return (
    <div className={styles.container}>
        <Header />
        { children }
    </div>
  )
}

export default Container;