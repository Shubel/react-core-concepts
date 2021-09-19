import './App.css';

// First Example
// function App() {
//   return (
//     <div>
//       <Person name= 'Shubel' job= 'Programmer'></Person>
//       <Person name= 'Islam' job= 'Developer'></Person>
//       <Person name= 'Sunny' job ='Engineer'></Person>
//     </div>
//   )
// }

// function Person(props) {
//   const styleColor = {
//     backgroundColor: 'hotpink',
//     color: 'white',
//     margin: '10px',
//     padding: '20px',
//     borderRadius: '20px'
//   }
//   return (
//     <div style= {styleColor}>
//       <h1>Name: {props.name}</h1>
//       <h3>Job: {props.job}</h3>
//     </div>
//   )
// }

// Second Example
function App() {
  const styleColor = {
    backgroundColor: 'lightseagreen',
    margin: '10px',
    padding: '20px',
    border: '5px solid yellow',
    borderRadius: '20px'
  }
  const cinemas = [
    { nayok: 'Koober', nayika: 'kopila' },
    { nayok: 'Rubel', nayika: 'Moushumi' },
    { nayok: 'Razzak', nayika: 'Shabana' },
    { nayok: 'Jashim', nayika: 'Suchorita' }
  ]
  return (
    <div style={styleColor}>
      {
        cinemas.map(cinema => <Cinema nayok={cinema.nayok} nayika={cinema.nayika}></Cinema>)
      }
    </div>
  )
}

function Cinema(props) {
  return (
    <div>
      <h2>Nayok: {props.nayok}</h2>
      <h4>Nayika: {props.nayika}</h4>
    </div>
  )
}

export default App;
