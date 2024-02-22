import { Fade, Grid } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import styles from './burgerMenu.module.css'
import { Dispatch, SetStateAction } from 'react';

const BurgerMenu = ({ openMenu, setOpenMenu }: {
	openMenu: boolean,
	setOpenMenu: Dispatch<SetStateAction<boolean>>
}) => {
	return (
		<Fade in={openMenu}>
			<div className={styles.container}>
				<ul className={styles.listContainer}>
					<li>
						<Grid container spacing={2}>
							<Grid item xs={10}><h2 className={styles.menuTitle}>Menu</h2></Grid>
							<Grid item xs={2} className={styles.closeIcon}><CloseIcon onClick={() => setOpenMenu(false)} data-testid="closeBurgerMenu" /></Grid>
						</Grid>
					</li>
					<li>
						<ul className={styles.innerListContainer}>
							<li className={styles.innerTitle}>Book and Manage</li>
							<li className={styles.subMenu}>Book a flight</li>
							<li className={styles.subMenu}>Home check-in</li>
							<li className={styles.subMenu}>Airport transfer</li>
							<li className={styles.subMenu}>Book with promo code</li>
							<li className={styles.subMenu}>Book a flight+hotel</li>
							<li className={styles.subMenu}>Manage your booking</li>
							<li className={styles.subMenu}>Update to business class</li>
							<li className={styles.subMenu}>Online check-in</li>
						</ul>
					</li>
					<li>
						<ul className={styles.innerListContainer}>
							<li className={styles.innerTitle}>Flying with us</li>
							<li className={styles.subMenu}>Fare type and rules</li>
							<li className={styles.subMenu}>Visa and Passport</li>
							<li className={styles.subMenu}>Ways to pay</li>
							<li className={styles.subMenu}>Timetable</li>
							<li className={styles.subMenu}>Flight status</li>
							<li className={styles.subMenu}>Business class</li>
							<li className={styles.subMenu}>Economy class</li>
							<li className={styles.subMenu}>Online check-in</li>
						</ul>
					</li>
				</ul>
			</div>
		</Fade>
	)
}
export default BurgerMenu