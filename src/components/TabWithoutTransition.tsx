import { FC } from 'react'
import Button from './Button'

interface Props {
  children: string
  onClick: () => void
  isActive: boolean
}

const TabWithoutTransition: FC<Props> = ({ onClick, children, isActive }) => {
  return (
    <Button
      className={`text-sm flex-1 ${isActive ? '!bg-white' : '!text-neutral-400 !bg-neutral-50'}`}
      onClick={onClick}
      color='white'
    >
      {children}
    </Button>
  )
}

export default TabWithoutTransition
