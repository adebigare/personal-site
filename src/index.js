import _ from 'lodash';
import printMe from './print.js';
import './scss/styles.scss';

const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;

function component() {
  var element = document.createElement('div');

  var btn = document.createElement('button')

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me';
  btn.onclick = printMe;

  element.appendChild(btn)

  return element;
}

let element = component();
document.body.appendChild(element);

  if (module.hot) {
  	module.hot.accept('./print.js', function () {
  		console.loag('Accepting the updated printMe module!');
  		document.body.removeChld(element);
  		element = component();

  	});
  }
