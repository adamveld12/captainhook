'use strict';

import React from 'react';
import AceEditor from 'react-ace';

import Brace from 'brace';
import 'brace/mode/java';
import 'brace/theme/github';

import './style.less';


export default class CreateHook extends React.Component {
  constructor(){
    super();

    this.state = { code };
  }


  render(){
    const { code } = this.state;

    return (
      <section id="hookeditor">
        <AceEditor  className="codeEditor"
                    maxLines="16"
                    tabSize="2"
                    width="100%"
                    mode="javascript"
                    theme="github"
                    value={code} />
        <button>Run</button>
      </section>
    );
  }
}






const code = 
`
import { Datastore } from "captainhook";


export default (request, response) => {

   console.log("Hello Captain Hook!");

   Datastore.increment("request_count", (value) =>
      res.send("Your handler has ran \$\{value\} time(s) in Captain Hook!")  
    );

};
`;
