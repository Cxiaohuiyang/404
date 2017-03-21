import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Drawer from 'material-ui/Drawer';

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
  >
    <MenuItem primaryText="刷新" />
    <MenuItem primaryText="设置" />
    <MenuItem primaryText="退出" />
  </IconMenu>
);

class DrawerApp extends Component {

  constructor(props) {
    super(props);
    this.handleToggle = this.props.handleToggle;
  }


  render() {
    let wodth = window.screen.availWidth-70;
    return (
      <Drawer
        docked={false}
        width={wodth}
        open={this.props.toggle}
        disableSwipeToOpen={true}
        onRequestChange={this.handleToggle}
      >
      </Drawer>
    );

  }
}


class AppBarExampleIcon extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open }); 

  render() {
    return (
      <div>
        <AppBar
          title="工作日志"
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={<Logged />
          }
        /> 
        <DrawerApp toggle={this.state.open} handleToggle={this.handleToggle}></DrawerApp>
      </div>
    );
  }
}


export default AppBarExampleIcon;