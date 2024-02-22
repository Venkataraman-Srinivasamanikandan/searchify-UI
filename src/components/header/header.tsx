import { useState } from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuIcon from '@mui/icons-material/Menu';
import GridViewIcon from '@mui/icons-material/GridView';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import BurgerMenu from '../burgerMenu/burgerMenu';
import styles from './header.module.css';

const Header = () => {
	const [openMenu, setOpenMenu] = useState<boolean>(false)
	const navigate = useNavigate()
	return (
		<header className={styles.mainNav}>
			<div className={styles.container}>
				<div className={styles.menuIcon}>
					<MenuIcon data-testid="menuIcon" onClick={() => setOpenMenu(true)} />
				</div>
				<nav>
					<ul className={styles.navListContainer}>
						<li className={styles.navList}>
							<NotificationsNoneIcon />
							<div className={styles.notificationDot}></div>
						</li>
						<li className={styles.navListAvatar}><Avatar sx={{ bgcolor: '#0a8ed3' }}>VK</Avatar></li>
						<li className={styles.navList}><GridViewIcon data-testid="getidView" onClick={() => navigate("/")} /></li>
					</ul>
				</nav>
			</div>
			<BurgerMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
		</header>
	)
}

export default Header