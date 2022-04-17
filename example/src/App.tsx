import React from 'react'
import { Button, SLink, colorUtils, PersonSleep } from 'clean-ui'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <section>
        <h4>Buttons</h4>

        <div className='split'>
          <Button
            type={'primary'}
            colors={{
              main: colorUtils.springYellow,
              secondary: colorUtils.springPurple
            }}
          >
            Primary
          </Button>
          <Button
            type={'secondary'}
            onClick={() => {
              console.log(1)
            }}
          >
            Secondary
          </Button>
        </div>
      </section>
      <hr />
      <section>
        <h4>SLinks</h4>

        <div className={'split'}>
          <SLink to='https://www.baidu.com' type='primary'>
            Primary
          </SLink>

          <SLink to='/' type='secondary'>
            Secondary
          </SLink>

          <SLink
            to='/'
            type='cover'
            colors={{
              main: 'linear-gradient(90deg, rgba(0,212,255,1) 7%, rgba(77,77,145,1) 100%)',
              secondary: colorUtils.dark,
              mainGradient:
                'linear-gradient(90deg, rgba(0,212,255,1) 7%, rgba(77,77,145,1) 100%)'
            }}
          >
            Cover
          </SLink>

          <SLink to='/' type='article'>
            Article
          </SLink>
        </div>

        <article>
          It's a link to
          <SLink
            to={'https://www.google.com'}
            type={'article'}
            colors={{ articleBg: colorUtils.springBlue }}
          >
            Google
          </SLink>
        </article>
      </section>
      <hr />

      <section>
        <h4>Fun</h4>
        <div>
          <div
            style={{
              width: '3em',
              height: '3em',
              border: '1px solid black',
              display: 'inline-block',
              margin: '0 1em'
            }}
          >
            <PersonSleep pSize={'1em'} />
          </div>
          <div
            style={{
              width: '3em',
              height: '3em',
              border: '1px solid black',
              display: 'inline-block',
              margin: '0 1em'
            }}
          >
            <PersonSleep pSize={'1em'} color={colorUtils.springPurple} />
          </div>
        </div>
      </section>
    </BrowserRouter>
  )
}

export default App
