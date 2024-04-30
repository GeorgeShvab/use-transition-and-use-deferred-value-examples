import { FC } from 'react'

interface Props {
  name: string
  className?: string
}

const Item: FC<Props> = ({ name, className }) => {
  // slowed to simulate some heavy component
  let startTime = performance.now()
  while (performance.now() - startTime < 4) {}

  return (
    <li
      className={
        `px-6 pr-3 gap-0.5 text-sm flex items-center justify-between transition-colors border rounded-lg h-10 mb-2 ` +
        className
      }
    >
      <span className='text-neutral-700'>{name}</span>
    </li>
  )
}

export default Item
