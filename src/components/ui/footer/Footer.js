import styles from '../../../styles/pwgenerator.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3>Made with <span>🧋</span> by {''}
				<a href="http://0hundred.dev" target="_blank" rel="noopener noreferrer">
					0hundred
				</a>
			</h3>
    </footer>
  )
}

export default Footer