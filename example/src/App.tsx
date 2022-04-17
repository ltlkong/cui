import React from 'react'
import { Button, SLink, colorUtils, PersonSleep } from 'clean-ui'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <section>
          <h4>Buttons</h4>

          <div className='split'>
            <Button type={'primary'} skin={'light'}>
              Primary dark
            </Button>
            <Button type={'secondary'} skin='dark'>
              Secondary dark
            </Button>
          </div>
        </section>
        <hr />
        <section>
          <h4>SLinks</h4>

          <div className={'split'}>
            <SLink
              to='https://www.baidu.com'
              type='primary'
              skin='none'
              className='bg-blue'
            >
              Primary None
            </SLink>

            <SLink to='https://www.baidu.com' type='primary' skin='dark'>
              Primary Dark
            </SLink>

            <SLink to='/' type='secondary' skin='dark'>
              Secondary Dark
            </SLink>

            <SLink to='/' type='secondary' skin='springBlue'>
              Secondary SpringBlue
            </SLink>

            <SLink to='/' type='cover' skin='light'>
              Cover
            </SLink>

            <SLink to='/' type='cover' skin='dark'>
              Cover Dark
            </SLink>

            <SLink to='/' type='article' skin='springBlue'>
              Article
            </SLink>
          </div>

          <article>
            It's a link to
            <SLink to={'https://www.google.com'} type={'article'}>
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
              <PersonSleep
                pSize={'1em'}
                color={colorUtils.springPurple}
                zText='zzzz'
              />
            </div>
          </div>
        </section>
      </div>
    </BrowserRouter>
  )
}

export default App
