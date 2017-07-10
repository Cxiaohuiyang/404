import React, { Component } from 'react'; 
import  {  AppBar, IconButton,IconMenu,MenuItem} from 'material-ui/';
import LogSide from './Component/Side/index'
 

 
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'; 

const Logged = (props) => ( <IconMenu
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

class AppBarExampleIcon extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  
}


export default AppBarExampleIcon;