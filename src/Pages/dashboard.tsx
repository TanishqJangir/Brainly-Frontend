import "../App.css"
import { Button } from '../Components/Ui/Button'
import { PlusIcon } from '../Icons/PlusIcon'
import { ShareIcon } from '../Icons/shareIcon'
import { Card } from '../Components/Ui/Card'
import { CreateContentModal } from '../Components/Ui/CreateModal'
import { useState } from 'react'
import { Sidebar } from '../Components/Ui/Sidebar'
import { useContent, type contentType } from "../hooks/useContent"
import { Loader } from "../Components/Ui/Loader"

export const Dashboard = () => {

  const [ modalOpen, setModalOpen ] = useState(false);
  const { contents, loading, refetch } = useContent();

  return <div className=' h-screen'>
    <div>
      <Sidebar />



      <div className='p-6 bg-body ml-72 h-screen'>

        <CreateContentModal open={modalOpen} onClose={() => setModalOpen(prev => !prev)}  onContentAdded={refetch}/>
        <div className='flex justify-end mb-6 gap-3'>
          <Button varient='secondary' text='Share Brain' size="md" startIcon={<ShareIcon size={"md"} />} />
          <Button varient='primary' text='Add Content' size="md" startIcon={<PlusIcon size={"md"} />} onClick={() => setModalOpen(true)} />
        </div>


        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {loading && <Loader color={"black"}/>}
          {contents.map(({ type, link, title, body }: contentType) => <Card key={link} type={type} title={title} link={link} body={body}/>)}


        </div>
      </div>
    </div>
  </div>
}
