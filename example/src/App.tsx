import React from 'react'
import { Button, Link , colorUtils} from 'clean-ui'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <section>
      <h4>Buttons</h4>

      <div className='split'> 
        <Button type={'primary'} colors={{main:colorUtils.springYellow,secondary:colorUtils.springPurple  }}>Primary</Button>
        <Button type={'secondary'} onClick={()=> {console.log(1)}}>Secondary</Button>
      </div>
    </section>
      <hr/>
      <section>
        <h4>Links</h4>

  <div className={'split'}>
    <Link to='/' type='primary'>Primary</Link>
    <Link to='/' type='secondary'>Secondary</Link>
    </div>

      <article>
        It's a link <Link to={'/'} type={'article'} colors={{articleBg:colorUtils.springBlue  }}>Link</Link>
      </article>
      </section>
    </BrowserRouter>
  )
}

export default App
