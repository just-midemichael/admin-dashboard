import { Route, Routes } from 'react-router-dom'
import Dashboard from '../scenes/dashboard'
import { Team } from '../scenes/team/Team'
import { Invoices } from '../scenes/invoices/Invoices'
import Contact from '../scenes/contact/Contact'
import Calendar from '../scenes/calendar/Calendar'
import { Faq } from '../scenes/faq/Faq'
import { Geography } from '../scenes/geography/geography'
import Line from '../scenes/line/Line'
import TreeMap from '../scenes/treeMap/TreeMap'
import { Pie } from '../scenes/pie/Pie'
import Bar from '../scenes/bar/Bar'
import { Form } from '../scenes/form/Form'

export const PageRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/invoices' element={<Invoices/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/calendar' element={<Calendar/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/geography' element={<Geography/>}/>
        <Route path='/line' element={<Line/>}/>
        <Route path='/treemap' element={<TreeMap/>}/>
        <Route path='/pie' element={<Pie/>}/>
        <Route path='/bar' element={<Bar/>}/>
    </Routes>
  )
}