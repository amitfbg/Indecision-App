import React from 'react';
import ReactDOM from 'react-dom';
import Indecision from './components/Indecision';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// const Layout=()=>{
//     return (
//         <div>
//             <p>Header</p>
//             <p>Footer</p>
//         </div>
//     );
// }




ReactDOM.render(<Indecision/>,document.getElementById('app'));


// //-------------
// class OldSyntax{
//     constructor(){
//         this.name='mike';
//     }
// }

// const oldSyntax=new OldSyntax();
// console.log(oldSyntax);

// //--------
// //constructor overhead removed
// class NewSyntax{
//     name='hhhj';
// }

// const newSyntax=new NewSyntax();
// console.log(newSyntax);
