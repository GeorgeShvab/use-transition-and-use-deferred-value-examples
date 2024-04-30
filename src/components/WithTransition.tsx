import { FC, useState } from 'react'
import TabWithTransition from './TabWithTransition'
import List from './List'
import { getUsers } from '../getUsers'

type Tab = 1 | 2 | 3

const users1 = getUsers(500)
const users2 = getUsers(500)
const users3 = getUsers(500)

const WithTransition: FC = () => {
  const [tab, setTab] = useState<Tab>(1)

  /*
  const [isTransitioning, startTransition] = useTransition()

  const handleSetTab = (tab: Tab) => startTransition(() => setTab(tab))*/

  return (
    <main className='flex gap-20 items-center justify-center h-screen w-screen'>
      <div className='h-96 w-96'>
        <div className='circle'></div>
      </div>
      <div className='border rounded-lg bg-white h-[72vh] w-[500px] md:h-[65vh] min-h-[300px] flex flex-col'>
        <div className='flex top-full py-3 px-3 gap-2 w-full mb-2'>
          <TabWithTransition onClick={() => setTab(1)} isActive={tab === 1}>
            First List
          </TabWithTransition>
          <TabWithTransition onClick={() => setTab(2)} isActive={tab === 2}>
            Second List
          </TabWithTransition>
          <TabWithTransition onClick={() => setTab(3)} isActive={tab === 3}>
            Third List
          </TabWithTransition>
        </div>
        <div className='bg-neutral-200 h-1 w-full block mb-4'></div>
        {tab === 1 && <List data={users1} className='bg-sky-200' />}
        {tab === 2 && <List data={users2} className='bg-red-200' />}
        {tab === 3 && <List data={users3} className='bg-yellow-200' />}
      </div>
    </main>
  )
}

export default WithTransition
