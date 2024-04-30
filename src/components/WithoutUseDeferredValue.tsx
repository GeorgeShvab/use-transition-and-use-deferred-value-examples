import { ChangeEvent, FC, useState } from 'react'
import SearchInput from './SearchInput'
import SearchList from './SearchList'

const WithoutDeferredValue: FC = () => {
  const [value, setValue] = useState<string>('')
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

  const clearValue = () => setValue('')

  return (
    <main className='flex gap-20 items-center justify-center h-screen w-screen'>
      <div className='h-96 w-96'>
        <div className='circle'></div>
      </div>
      <div className='border rounded-lg bg-white h-[72vh] w-[500px] md:h-[65vh] min-h-[300px] flex flex-col'>
        <div className='p-3'>
          <SearchInput onChange={handleInput} value={value} onClear={clearValue} />
        </div>
        <SearchList value={value} />
      </div>
    </main>
  )
}

export default WithoutDeferredValue
