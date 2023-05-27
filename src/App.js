import { connect, useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchData } from './redux/react-redux/fetchData';

function App() {
  const users = useSelector(state => state.users.users)
  const dispatch = useDispatch()
  const getUsers = ()=>{
    fetchData(dispatch)
  }
  return (
    <div className="app">
      {users.map(user => (
        <h2 key={user.id}>{user.name}</h2>
      ))}
      <button onClick={getUsers}>getUsers</button>
    </div>
  );
}

export default App;
// const mapStateToProps = state =>{
//   return {
//     ...state,
//     users:state.users.users
//   }
// }
// const mapDispatchToProps = dispatch =>{
//   return {
//     getUsers:()=> fetchData(dispatch)
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(App);
