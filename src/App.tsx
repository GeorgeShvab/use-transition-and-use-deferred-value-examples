import { Link, Route, Routes } from 'react-router-dom'
import WithTransition from './components/WithTransition'
import WithoutTransition from './components/WithoutTransition'
import WithoutDeferredValue from './components/WithoutUseDeferredValue'
import WithDeferredValue from './components/WithUseDeferredValue'

function App() {
  return (
    <>
      <div className='top-6 left-1/2 translate-x-[-50%] absolute flex gap-10'>
        <Link to='/without-transition'>Without Transition</Link>
        <Link to='/with-transition'>With Transition</Link>
        <Link to='/without-useDeferredValue'>Without useDeferredValue</Link>
        <Link to='/with-useDeferredValue'>With useDeferredValue</Link>
      </div>
      <Routes>
        <Route path='/with-transition' element={<WithTransition />} />
        <Route path='/without-transition' element={<WithoutTransition />} />
        <Route path='/without-useDeferredValue' element={<WithoutDeferredValue />} />
        <Route path='/with-useDeferredValue' element={<WithDeferredValue />} />
      </Routes>
    </>
  )
}

export default App
