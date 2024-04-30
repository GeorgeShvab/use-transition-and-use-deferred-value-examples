import { FC, memo, useMemo } from 'react'
import SearchItem from './Item'
import { getUsers } from '../getUsers'

interface Props {
  value: string
}

const users = getUsers(500)

const SearchList: FC<Props> = ({ value }) => {
  const filteredData = useMemo(() => {
    return value ? users.filter((item) => new RegExp(`${value}`, 'gi').test(item.name)) : users
  }, [value])

  return (
    <ul className={`overflow-auto pretty-scrollbar transition-all pb-2 px-2 pl-3`}>
      {filteredData.map((item) => (
        <SearchItem {...item} key={item.id} />
      ))}
    </ul>
  )
}

export default memo(SearchList)
