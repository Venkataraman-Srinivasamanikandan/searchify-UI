import styles from './footer.module.css';
import logo from '../../assets/flydubai.png';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<img src={logo} alt="flydubai logo" className={styles.footerLogo} />
			</div>
		</footer>
	)
}

export default Footer