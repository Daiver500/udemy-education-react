import React from 'react'; // отвечает за работу с реактом, jsx и другими возможностями, react импортируется с 17 версии только в главный файл, ранее импортировался в каждый файл
import ReactDOM from 'react-dom'; // позволяет работать с дом структурой на странице (позволяет вставлять реакт на страницу)
import './index.css';
import App from './App';

const element = <h2>Hello World</h2>;       // можно создать элемент таким образом, основной способ, это реакт элемент

const text = "Hello World!";
const elem = (               // если элемент имеет многострочную стркутуру, несколько тегов, такая структура оборачивается в круглые скобки
  <div>                      {/* при создании многострочного элемента у него всегда должен быть один родитель*/}
      <h2>Text: {text}</h2>          {/*переменную можно прописывать через фигурные скобки, похоже на интерполяцию, объекты помещать нельзя, массив можно*/}
      <h2 className="text">Text: {2+2}</h2> {/*так прописывается класс*/}
      <h2>Text: {[2+2]}</h2> 
      <label htmlFor=''></label> {/*так прописывается htmlFor*/}
      <input type="text"></input>
      <button tabIndex="0">Click</button> {/*атрибуты пишутся через camelCase*/}
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