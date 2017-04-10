// npm libs
import React from 'react';
import {
	browserHistory
} from 'react-router';

// js utils
import APP from 'utils/app';
import routerUrls from 'utils/routerUrls';

// styles
import styles from './MainMenu.less';

class MainMenu extends React.Component {

	constructor() {

		super();

		document.addEventListener('DOMContentLoaded', () => {

			const myMenu = document.getElementById('menu-container');

			const toggleClassMenu = () => {
				myMenu.classList.add(styles.menuContainer__animatable);
				if (!myMenu.classList.contains(styles.menuContainer__visible)) {
					myMenu.classList.add(styles.menuContainer__visible);
				} else {
					myMenu.classList.remove(styles.menuContainer__visible);
				}
			};

			const OnTransitionEnd = () => {
				myMenu.classList.remove(styles.menu__animatable);
				if (this.selectedItemPath) {
					browserHistory.push(this.selectedItemPath);
					this.selectedItemPath = '';
				}
			};

			myMenu.addEventListener('transitionend', OnTransitionEnd, false);
			myMenu.addEventListener('click', toggleClassMenu, false);
			document.getElementById('header-menu-icon').addEventListener('click', toggleClassMenu, false);

		}, false);

		this.onClickLink = this.onClickLink.bind(this);
	}

	onClickLink(event) {
		this.selectedItemPath = event.currentTarget.getAttribute('data-link');
	}

	render() {

		return (
			<div className={styles.menuContainer} id="menu-container">
				<div className={styles.menuContainerInner}>
					<div className={styles.username}>
						@hey
					</div>
					<ul className={styles.menu}>
						<li className={styles.menuItem}>
							<a onClick={this.onClickLink} data-link={routerUrls.HOME} className={styles.menuItemLink}>
								<i className={`material-icons ${styles.menuItemIcon}`}>&#xE8B6;</i>
								<span>Home</span>
							</a>
						</li>
						<li className={styles.menuItem}>
							<a onClick={this.onClickLink} data-link={routerUrls.ABOUT} className={styles.menuItemLink}>
								<i className={`material-icons ${styles.menuItemIcon}`}>&#xE030;</i>
								<span>About</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		);

	}

}

export default MainMenu;