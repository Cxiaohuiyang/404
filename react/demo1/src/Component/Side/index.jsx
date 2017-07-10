import React from 'react';
import Drawer from 'material-ui/Drawer';


class LogSide extends React.Component {

  constructor(props) {
    super(props);
    this.handleToggle = this.props.handleToggle;
  }

  render() {
    let width = window.screen.availWidth - 70;
    return (
      <Drawer
        docked={false}
        width={100}
        open={this.props.toggle}
        disableSwipeToOpen={true}
        onRequestChange={this.handleToggle}
      > 
      </Drawer>
    );
  }
}
LogSide.propTypes ={
    handleToggle:React.PropTypes.func,
    toggle: React.PropTypes.bool
}
LogSide.defaultProps = {
    handleToggle: ()=>{console.log(11);},
    toggle: false
};


export default LogSide;