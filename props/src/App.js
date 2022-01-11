import './App.css';

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
    <div className="App">
       <WhoAmIFirst name="Petr" surname="Ivanov" link="facebook.com"></WhoAmIFirst> 
       <WhoAmIFirst name="Semen" surname="Ivanov" link="facebook.com"></WhoAmIFirst> 
       <WhoAmI name={{firstName: "John"}} surname="Ivanov" link="facebook.com"></WhoAmI>    {/*объект props будет формироваться из тех атрибутов, по сути это и есть props
       , что мы будем передавать в компонент, значения не изменяемые, чтобы это сделать надо полностью пересоздать компонент, передаваться может все, что угодно */}
       <WhoAmI name={{firstName: "Alex"}} surname="Pupkin" link="vk.com"></WhoAmI>
       <WhoAmINext name={() => {return "Ivan"}} surname="Ivanov" link="facebook.com"></WhoAmINext> 
       <WhoAmINext name={() => {return "Vasya"}} surname="Ivanov" link="facebook.com"></WhoAmINext> 
    </div>
  );
}

export default App;
