import {Component, StrictMode} from 'react'; // если писать компоненты на классах, то понадобится такая строчка
import logo from './logo.svg';
import './App.css';

const Header = () => {  // реакт компонент
  return <h2>Hello</h2>  // реакт элемент
}

const Field = () => {
  const holder = "Enter here"
  const styledField = {         // стили создаются при помощи объекта
    width: "300px"
  } 
  return <input 
          placeholder={holder} 
          type="text" 
          style={styledField}></input>
}

/*class Field extends Component {      // можно писать компоненты на классах
   render() {                          // обязательно долежн быть метод render
    const holder = "Enter here"
    const styledField = {         
      width: "300px"
    } 
    return <input 
    placeholder={holder} 
    type="text" 
    style={styledField}></input>
   }
}*/

function Button () {                               // можно использовать как обычные так и стрелочные функции
   const text = "login"
   //const res = () => {                             // внутрь компонента можно помещать функции и разные элементы
      //return "login"
   //}
   //const p = <p>login</p>
   const logged = false;
   
   const test = () => {   // условия через if else прописываются так 
    if (logged) {
     return "Enter"
   } else {
     return text
   }
  }
   
  return <button tabIndex="0">{test()}</button>

   // return <button tabIndex="0">{logged ?  "Enter" : text}</button>  // if else нельзя использовать внутри фигурных скобок, можно использовать только тернартный оператор
}
 
function App() {    // реакт компоненты пишутся с большой буквы и могут переиспользоваться, компонент это функция которая возвращает JSX элементы
  return (    // многострочный элемент поэтому в круглых скобках
    <div className="App">   {/*один родитель*/}
      <StrictMode>
        <Header></Header>
      </StrictMode>
       <Field></Field>
       <Button></Button>
    </div>
  );
}

export default App;
export {Header};
