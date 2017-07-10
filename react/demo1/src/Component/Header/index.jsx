import React, {Component} from 'react';
import {AppBar, IconButton, IconMenu, MenuItem} from 'material-ui/';
import LogSide from '../Side';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const Logged = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem primaryText="刷新"/>
        <MenuItem primaryText="设置"/>
        <MenuItem primaryText="退出"/>
    </IconMenu>
)
class AppHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        return (
            <div>
                <AppBar
                    title="工作日志"
                    onLeftIconButtonTouchTap={this.handleToggle}
                    iconElementRight={<Logged />}
                />
                <LogSide toggle={this.state.open} handleToggle={this.handleToggle}></LogSide>
            </div>
        );
    }
}
;
export default AppHeader;
