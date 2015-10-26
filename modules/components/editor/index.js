'use strict';

import React from 'react';
import './style.less';


export default class Editor extends React.Component {
  constructor(){
    super();
    this.state = { text: "" };
  }

  render(){
    return (
      <div ref="code_editor" className="codeEditor">
        
      </div>
    );
  }
}

