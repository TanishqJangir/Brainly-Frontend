import './App.css'
import { Button } from './Components/Ui/Button'
import { PlusIcon } from './Icons/PlusIcon'
import { ShareIcon } from './Icons/shareIcon'
import { Card } from './Components/Ui/Card'

function App() {

  return <div className='p-6 bg-body h-screen'>
    <div className='flex justify-end mb-6 gap-3'>
    <Button varient='secondary' text='Share Brain' size="md" startIcon={<ShareIcon size={"md"}/>}/>
    <Button varient='primary' text='Add Content' size="md" startIcon={<PlusIcon size={"md"}/>}/>
    </div>

    <Card />
  </div>
}

export default App
