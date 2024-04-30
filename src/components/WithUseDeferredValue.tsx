import { ChangeEvent, FC, useDeferredValue, useState } from 'react'
import SearchInput from './SearchInput'
import SearchList from './SearchList'

const WithDeferredValue: FC = () => {
  const [value, setValue] = useState<string>('')
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

  const clearValue = () => setValue('')

  const deferredValue = useDeferredValue(value)
  // receives a value and returns a deferred value.
  // The deferred value will be a previous passed value.
  // When value changes, react starts background rendering of the new value.

  /*
  The same behaviour we can achive with useTransition hook, but it requiress more code. (see below)

  const [transition, startTransition] = useTransition()
  const [deferredValue, setDeferredValue] = useState('')

  useEffect(() => {
    startTransition(() => {
      setDeferredValue(value)
    })
  }, [value])*/

  return (
    <main className='flex gap-20 items-center justify-center h-screen w-screen'>
      <div className='h-96 w-96'>
        <div className='circle'></div>
      </div>
      <div className='border rounded-lg bg-white h-[72vh] w-[500px] md:h-[65vh] min-h-[300px] flex flex-col'>
        <div className='p-3'>
          <SearchInput onChange={handleInput} value={value} onClear={clearValue} />
        </div>
        <SearchList value={deferredValue} />
      </div>
    </main>
  )
}

export default WithDeferredValue
