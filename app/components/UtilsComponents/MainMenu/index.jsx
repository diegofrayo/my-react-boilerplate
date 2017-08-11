// npm libs
import React from 'react';
import PropTypes from 'prop-types';
import {
  connect,
} from 'react-redux';

// material-ui
import withStyles from 'material-ui/styles/withStyles';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import ListItemIcon from 'material-ui/List/ListItemIcon';
import ListItemText from 'material-ui/List/ListItemText';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';

// material-ui-icons
import ExitToAppIcon from 'material-ui-icons/ExitToApp';
import KeyboardArrowRightIcon from 'material-ui-icons/KeyboardArrowRight';
import MenuIcon from 'material-ui-icons/Menu';
// import ShoppingCartIcon from 'material-ui-icons/ShoppingCart';
import PersonIcon from 'material-ui-icons/Person';

// constants
import {
  routes,
} from 'constants/index';

// redux
import {
  logOutRequest as logOutRequestAction,
} from 'actions/auth';
import {
  goTo as goToAction,
} from 'actions/router';

// styles
import StyleSheet from './stylesheet';

class MainMenu extends React.Component {

  constructor() {
    super();
    this.state = {
      open: {
        left: false,
      },
    };
    this.goTo = this.goTo.bind(this);
    this.handleLeftClose = this.handleLeftClose.bind(this);
    this.handleLeftOpen = this.handleLeftOpen.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer(side, open) {
    const drawerState = {};
    drawerState[side] = open;
    this.setState({
      open: drawerState,
    });
  }

  handleLeftOpen() {
    this.toggleDrawer('left', true);
  }

  handleLeftClose() {
    this.toggleDrawer('left', false);
  }

  goTo(route) {
    return () => this.props.actions.goTo(route);
  }

  render() {

    const classes = this.props.classes;

    const mainListItems = this.props.authState.isLoggedIn === true ? (
      <List className={classes.list} disablePadding>
        <div>
          <ListItem button onClick={this.goTo(routes.PROPERTY_LIST)}>
            <ListItemIcon>
              <KeyboardArrowRightIcon />
            </ListItemIcon>
            <ListItemText primary="Inventory Management" />
          </ListItem>
          <ListItem button onClick={this.goTo(routes.PROPERTY_PROFILE_LIST)}>
            <ListItemIcon>
              <KeyboardArrowRightIcon />
            </ListItemIcon>
            <ListItemText primary="Property Profile Management" />
          </ListItem>
          <ListItem button onClick={this.goTo(routes.PRICE_TOOL)}>
            <ListItemIcon>
              { /* <ShoppingCartIcon /> */ }
              <KeyboardArrowRightIcon />
            </ListItemIcon>
            <ListItemText primary="Price Tool" />
          </ListItem>
          <ListItem button onClick={this.goTo(routes.USER_LIST)}>
            <ListItemIcon>
              <KeyboardArrowRightIcon />
            </ListItemIcon>
            <ListItemText primary="User Management" />
          </ListItem>
          <ListItem button onClick={this.goTo(routes.VENDOR_LIST)}>
            <ListItemIcon>
              <KeyboardArrowRightIcon />
            </ListItemIcon>
            <ListItemText primary="Vendor Management" />
          </ListItem>
        </div>
      </List>
    ) : null;

    const otherListItems = (
      <List className={classes.list} disablePadding>
        <div>
          {this.props.authState.isLoggedIn !== true && (
            <ListItem button onClick={this.goTo(routes.LOG_IN)}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Sign In" />
            </ListItem>
          )}
          {this.props.authState.isLoggedIn === true && (
            <ListItem button onClick={this.props.actions.logOut}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Log out" />
            </ListItem>
          )}
        </div>
      </List>
    );

    const sideList = (
      <div>
        {mainListItems}
        <Divider />
        {otherListItems}
      </div>
    );

    return (
      <div>
        <IconButton onClick={this.handleLeftOpen}>
          <MenuIcon className={classes.menuIcon} />
        </IconButton>
        <Drawer
          open={this.state.open.left}
          onRequestClose={this.handleLeftClose}
          onClick={this.handleLeftClose}
        >
          {sideList}
        </Drawer>
      </div>
    );

  }

}

MainMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  authState: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  authState: state.auth,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    goTo: route => dispatch(goToAction(route)),
    logOut: () => dispatch(logOutRequestAction()),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(StyleSheet)(MainMenu));
