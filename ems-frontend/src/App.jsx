import './App.css'
import EmployeeComponent from './components/EmployeeComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
          <Routes>
            {/* http://localhost:300 */}
            <Route path='/' element = {<ListEmployeeComponent/>}></Route>
            {/* http://localhost:300/employees */}
            <Route path='/employees' element = {<ListEmployeeComponent/>}></Route>
            {/* http://localhost:300/add-employee */}
            <Route path='/add-employee' element= {<EmployeeComponent/>} ></Route>
            {/* http://localhost:300/edit-employee/1 */}
            <Route path='/edit-employee/:id' element= {<EmployeeComponent/>}></Route> {/* the :id is to send the id dinamically */}
          </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
