import './App.css';
import { Component, Fragment } from "react"; // Fragment может использоваться для замены родительского элемента в верстке, также используется пустой тег
import styled from "styled-components";

// КОМПОНЕНТЫ (ФУНКЦИОНАЛЬНЫЕ И КЛАССОВЫЕ)

/*const WhoAmI = (props) => {               // аргумент props(либо через деструктуризацию {name, surname, link}), это объект и мы передаем данные в него, функция используется как шаблон
  return (                               
    <div>
      <h1>My name is {props.name}, surname - {props.surname}</h1>
      <a href={props.link}>Мой профиль</a>
    </div>
  )
}*/

const WhoAmIFirst = ({name, surname, link}) => {               // аргумент props(либо через деструктуризацию {name, surname, link}), это объект и мы передаем данные в него, функция используется как шаблон
  return (                               
    <div>
      <h1>My name is {name}, surname - {surname}</h1>
      <a href={link}>Мой профиль</a>
    </div>
  )
}


const WhoAmI = ({name, surname, link, className}) => {               // аргумент props(либо через деструктуризацию {name, surname, link}), это объект и мы передаем данные в него, функция используется как шаблон
  return (                               
    <div>
      <h1>My name is {name.firstName}, surname - {surname}</h1>
      <a className = {className} href = {link} >Мой профиль</a>
    </div>
  )
}

const WhoAmINext = ({name, surname, link}) => {               // аргумент props(либо через деструктуризацию {name, surname, link}), это объект и мы передаем данные в него, функция используется как шаблон
  return (                               
    <div>
      <h1>My name is {name()}, surname - {surname}</h1>
      <a href={link}>Мой профиль</a>
    </div>
  )
}

// Styled components (использование стилей прямо в JS), такие компоненты поддерживают свои пропсы

const Wrapper = styled.div `                 
  width: 600px;
  margin: 80px auto 0 auto;
`;

// ссылки внутри родительского элемента будут определенного стиля, таким образом нам не надо стилизовать каждый компонент
const EmptyItem = styled.div `
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  a {
    display: block;
    margin: 0 10px 0;
    color: ${props => props.active ? "orange" : "black" /**здесь проверяем есть ли active и в зависимости от этого назначаем цвет */}
  }
  input {
    display: block;
    margin-top: 10px;
  }
`;

const Header = styled.h2 `
  font-size: 22px;
`;

// можно экспортировать стили

export const Button = styled.button `                  
  display: block;
  padding:  5px 15px;
  background-color: gold;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2)
`;

function App() {
  return (
    //<Fragment>                                                           {/** на fragment можно заменить лишние элементы, к примеру <div></div> */}
    // <div className="App">
    <Wrapper>                
                                                     
       <EmptyItem active> <WhoAmIFirst name="Petr" surname="Ivanov" link="facebook.com" className="test"></WhoAmIFirst> </EmptyItem>  
       <WhoAmIFirst name="Semen" surname="Ivanov" link="facebook.com"></WhoAmIFirst> 

       <WhoAmI name={{firstName: "John"}} surname="Ivanov" link="facebook.com"></WhoAmI>    {/*объект props будет формироваться из тех атрибутов, по сути это и есть props
       , что мы будем передавать в компонент, значения не изменяемые (только чтение), чтобы это сделать надо полностью пересоздать компонент, передаваться может все, что угодно */}
       <WhoAmI name="Alex" surname="Pupkin" link="vk.com"></WhoAmI>

       <WhoAmINext name={() => {return "Ivan"}} surname="Ivanov" link="facebook.com"></WhoAmINext> 
       <WhoAmINext name={() => {return "Vasya"}} surname="Ivanov" link="facebook.com"></WhoAmINext> 

       <WhoAmIClass name="T800" surname="Ivanov" link="facebook.com"></WhoAmIClass>            {/* props изменить динамически нельзя!!! */}
       <WhoAmIClass name="T1000" surname="Pupkin" link="facebook.com"></WhoAmIClass> 

    </Wrapper>
    //</div>
    // </Fragment>
  );
}

// СОСТОЯНИЯ КЛАССОВЫХ КОМПОНЕНТОВ
class WhoAmIClass extends Component {     
  constructor (props) {                            // для передачи props в классовый компонент используется constructor (к примеру массив данных data)     
    super(props)                                   // чтобы мы могли их использоваться передаем через super
    this.state = {                                 // динамически изменяемые параметры
      years: 27,
      text: "+++",
      position: ''
    }
    // this.nextAge = this.nextAge.bind(this)         // используется когда функция не стрелочная, когда стрелочная не нужно, если увеличится количество методов их всех придется bind, если они используются в обработчиках событий 
  }   
  
  nextAge = () => {                // когда функция не стрелочная используется bind (см выше), но это устаревший метод
    this.setState({                // команда для изменения текущего состояния (запускает перерисовку компонента)        
      years: this.state.years + 1
    })
    this.setState(state => ({             // тоже самое, что и выше, используется когда state зависит от предыдущего состояния (к примеру, счетчик)
      years: state.years + 1
    }))
  }

  commitInputChanges = (evt, color) => {
    console.log(color)
    this.setState ({
      position: evt.target.value
    })
  }
   
  render() {                             // когда вызывается setState каждый раз вызывается render
    const {name, surname, link} = this.props
    const {position, text, years} = this.state
    return (                               
      <EmptyItem active>                                                       {/* также вместо Fragment можно использовать пустой тег, в styled components можно передавать props */}   
        <Button onClick={this.nextAge}>{text}</Button>      {/* пример обработчика событий */}
        {/* <button onClick={() => this.nextAge()}>{text}</button>  также, когда функция не стрелочная ее можно вызвать через анонимную функцию*/}
        <Header>My name is {name}, surname - {surname}, age - {years}, position - {position}</Header>
        <a href={link}>Мой профиль</a>
        <form>
          <span>Введите должность</span>  
          <input type="text" onChange={(evt) => this.commitInputChanges(evt, "some color")}></input>          {/*в реакте всегда используется onChange, чтобы передать аргументы мы можем сделать это через функцию */}
        </form>
      </EmptyItem>
    )
  }
}


export default App;
