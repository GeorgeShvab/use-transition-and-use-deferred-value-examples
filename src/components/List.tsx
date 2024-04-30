import { FC } from 'react'
import Item from './Item'

interface Props {
  data: { name: string; id: number }[]
  className?: string
}

const List: FC<Props> = ({ data, className }) => {
  return (
    <ul className={`overflow-auto pretty-scrollbar transition-all pb-2 px-2 pl-3`}>
      {data.map((item) => (
        <Item {...item} key={item.id} className={className} />
      ))}
    </ul>
  )
}

export default List
