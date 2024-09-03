import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {
 

  return (
    <>
    <h1>Learn about redux toolkit</h1>
    <AddTodo/>
    <Todo/>

    </>
  )
}

export default App
// Redux toolkit ki notes
// 1. Create Store - single source of truth
// it has configureStore
// introduce reducer

// 2. Create Slice(functions) method(createSlice)
// Slice has name, initialState, reducers :{key: function}
// Access of two things (State, action)
// state = state value in the store
// action = action.payload 
// export individual functionality 
// export main source export

// 3. Add Todo - Give values to State i.e Dispatch Courier  = use method useDispatch()
//  dispatch(addTodo())

// 4. Take Values - useSelector((state) =>state.todos) state ka access chaiye
// variable me values lelo ek baar aagaie uske baad pure JS concept hai 

// Note: Todo's Project basic nai hote xD  :)

