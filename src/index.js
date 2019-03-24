// import React from 'react'
// import ReactDom from "react-dom"
import _ from 'lodash';
import "./index.css"
import "./styles/markdown.scss"
import printMe from './print.js';
import { cube} from "./math.js"
// import Icon from "./assets/1.jpeg"
console.log("process.env.NODE_ENV ", process.env.NODE_ENV )
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}
function component() {
    var element = document.createElement('div');
    var btn = document.createElement("button")
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add("hello")
    // var myIcon = new Image()
    // myIcon.src = Icon
    // element.appendChild(myIcon)
    btn.innerHTML = 'Click me and check the console!'
    btn.onclick = printMe
    element.appendChild(btn)
    return element;
}

document.body.appendChild(component());

if(module.hot){
    module.hot.accept('./print.js',function(){
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}