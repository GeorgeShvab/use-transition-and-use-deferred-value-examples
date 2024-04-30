import { FC, useTransition } from 'react'
import Button from './Button'

interface Props {
  children: string
  onClick: () => void
  isActive: boolean
}

// Used transition inside of Tab so which tab is transitioning right now can easily be shown
const TabWithTransition: FC<Props> = ({ onClick, children, isActive }) => {
  const [isTransitioning, startTransition] = useTransition()
  // The first returned value is a boolean that indicates whether the transition is in progress.
  // The second returned value is a function that you can call to start a transition.
  // The function takes a callback as an argument, which is the code that you want to transition.
  // Argument must have set state inside

  return (
    <Button
      className={`text-sm flex-1 ${isTransitioning ? 'opacity-50' : ''} ${isActive ? '!bg-white' : '!text-neutral-400 !bg-neutral-50'}`}
      onClick={() => startTransition(() => onClick())}
      color='white'
    >
      {children}
    </Button>
  )
}

export default TabWithTransition
