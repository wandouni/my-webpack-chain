// import _ from 'lodash'
// import './style/style.less'
// import printMe from './print'
import { cube } from './math.js'

function component() {
    // var element = document.createElement('div')
    // var btn = document.createElement('button')
    // element.innerHTML = _.join(['hello', 'webpack'], '')
    // element.classList.add('hello')
    // btn.innerHTML = 'Click me and check the console'
    // btn.onclick = printMe
    // element.appendChild(btn)
    var element = document.createElement('pre');
    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');
    return element
}
let element = component()
document.getElementById('app').appendChild(element)
// if (module.hot) {
//     module.hot.accept('./print.js', function () {
//         console.log('Accepting the updated printMe module!')
//         // printMe()
//         document.body.removeChild(element)
//         element = component()
//         document.body.appendChild(element)
//     })
// }