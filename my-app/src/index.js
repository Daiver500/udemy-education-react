import React from 'react'; // отвечает за работу с реактом, jsx и другими возможностями, react импортируется с 17 версии только в главный файл, ранее импортировался в каждый файл
import ReactDOM from 'react-dom'; // позволяет работать с дом структурой на странице (позволяет вставлять реакт на страницу)
import './index.css';
import App from './App';

const element = <h2>Hello World</h2>;       // можно создать элемент таким образом, основной способ, это реакт элемент

const elem = (               // если элемент имеет многострочную стркутуру, несколько тегов, такая структура оборачивается в круглые скобки
  <div>                      {/* при создании многострочного элемента у него всегда должен быть один родитель*/}
      <h2>Hello World!</h2>
      <input type="text"></input>
      <button></button> 
  </div>
);



// const element = React.createElement('h2', {className: "greetings"}, 'Hello World'); // создавая элемент таким образом мы передаем три элемента как аргументы: название, css класс, содержимое элемента
// в таком виде не работает babel

// через React.createElement создается объект (см пример ниже)

// const element = {
//  type: "h1",
//  props: {
//    className: "greetings",
//    children: "Hello world"
//  }
// }

ReactDOM.render(         // сюда передаем, что будем рендерить на страницу
  elem,
  document.getElementById('root')   // куда помещаем
);

// ReactDOM.render вызывается только один раз в верху нашего приложения