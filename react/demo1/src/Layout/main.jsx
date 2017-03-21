import React, { Component, PropTypes } from 'react';

import Style from './main.css';
 

class MainLayout extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: false,
    } 
  }
  render() {
      const {
      style,
      containerStyle,
      children,
      expandable 
    } = this.props;
    console.log(this.props);
    return (
        <div className={Style.layout}>
            <div className={Style.header}>

            </div>
            <div className={Style.content}> 
                {this.props.children} 
            </div>
            <div className={Style.footer}>
              xxxxxx
            </div>
        </div>
    );
  }
}
module.exports.MainLayout =MainLayout; 