import { FC, useState } from 'react'
import Tab from './TabWithTransition'
import List from './List'
import { getUsers } from '../getUsers'
import TabWithoutTransition from './TabWithoutTransition'

type Tab = 1 | 2 | 3

const users1 = getUsers(500)
const users2 = getUsers(500)
const users3 = getUsers(500)

const WithoutTransition: FC = () => {
  const [tab, setTab] = useState<Tab>(1)

  return (
    <main className='flex gap-20 items-center justify-center h-screen w-screen'>
      <div className='h-96 w-96'>
        <div className='circle'></div>
      </div>
      <div className='border rounded-lg bg-white h-[72vh] w-[500px] md:h-[65vh] min-h-[300px] flex flex-col'>
        <div className='flex top-full py-3 px-3 gap-2 w-full mb-2'>
          <TabWithoutTransition onClick={() => setTab(1)} isActive={tab === 1}>
            First List
          </TabWithoutTransition>
          <TabWithoutTransition onClick={() => setTab(2)} isActive={tab === 2}>
            Second List
          </TabWithoutTransition>
          <TabWithoutTransition onClick={() => setTab(3)} isActive={tab === 3}>
            Third List
          </TabWithoutTransition>
        </div>
        <div className='bg-neutral-200 h-1 w-full block mb-4'></div>
        {tab === 1 && <List data={users1} className='bg-sky-200' />}
        {tab === 2 && <List data={users2} className='bg-red-200' />}
        {tab === 3 && <List data={users3} className='bg-yellow-200' />}
      </div>
    </main>
  )
}

export default WithoutTransition
