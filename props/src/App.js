import './App.css';
import { Component, Fragment } from "react"; // Fragment может использоваться для замены родительского элемента в верстке, также используется пустой тег

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


const WhoAmI = ({name, surname, link}) => {               // аргумент props(либо через деструктуризацию {name, surname, link}), это объект и мы передаем данные в него, функция используется как шаблон
  return (                               
    <div>
      <h1>My name is {name.firstName}, surname - {surname}</h1>
      <a href={link}>Мой профиль</a>
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

function App() {
  return (
    //<Fragment>                                                           {/** на fragment можно заменить лишние элементы, к примеру <div></div> */}
    <div className="App">
       <WhoAmIFirst name="Petr" surname="Ivanov" link="facebook.com"></WhoAmIFirst> 
       <WhoAmIFirst name="Semen" surname="Ivanov" link="facebook.com"></WhoAmIFirst> 
       <WhoAmI name={{firstName: "John"}} surname="Ivanov" link="facebook.com"></WhoAmI>    {/*объект props будет формироваться из тех атрибутов, по сути это и есть props
       , что мы будем передавать в компонент, значения не изменяемые, чтобы это сделать надо полностью пересоздать компонент, передаваться может все, что угодно */}
       <WhoAmI name={{firstName: "Alex"}} surname="Pupkin" link="vk.com"></WhoAmI>
       <WhoAmINext name={() => {return "Ivan"}} surname="Ivanov" link="facebook.com"></WhoAmINext> 
       <WhoAmINext name={() => {return "Vasya"}} surname="Ivanov" link="facebook.com"></WhoAmINext> 
       <WhoAmIClass name="T800" surname="Ivanov" link="facebook.com"></WhoAmIClass>            {/* props изменить динамически нельзя!!! */}
       <WhoAmIClass name="T1000" surname="Pupkin" link="facebook.com"></WhoAmIClass> 
    </div>
    // </Fragment>
  );
}

// СОСТОЯНИЯ КЛАССОВЫХ КОМПОНЕНТОВ
class WhoAmIClass extends Component {     
  constructor (props) {                            // для передачи props в классовый компонент используется constructor      
    super(props)                                   // чтобы мы могли их использоваться передаем через super
    this.state = {                                 // состояние это объект
      years: 27,
      text: "+++",
      position: ''
    }
    // this.nextAge = this.nextAge.bind(this)         // используется когда функция не стрелочная, когда стрелочная не нужно, если увеличится количество методов их всех придется bind, если они используются в обработчиках событий 
  }   
  
  nextAge = () => {                // когда функция не стрелочная используется bind (см выше), но это устаревший метод
    this.setState({                 // команда для изменения состояния, поменяет только то, что указано тут, все остальное оставит как есть                                                                                                               
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
      <>                                                       {/* также вместо Fragment можно использовать пустой тег */}   
        <button onClick={this.nextAge}>{text}</button>      {/* пример обработчика событий */}
        {/* <button onClick={() => this.nextAge()}>{text}</button>  также, когда функция не стрелочная ее можно вызвать через анонимную функцию*/}
        <h1>My name is {name}, surname - {surname}, age - {years}, position - {position}</h1>
        <a href={link}>Мой профиль</a>
        <form>
          <span>Введите должность</span>
          <input type="text" onChange={(evt) => this.commitInputChanges(evt, "some color")}></input>          {/*в реакте всегда используется onChange, чтобы передать аргументы мы можем сделать это через функцию */}
        </form>
      </>
    )
  }
}


export default App;
