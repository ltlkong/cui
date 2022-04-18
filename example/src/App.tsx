import React from 'react'
import { Button, SLink, colorUtils, PersonSleep, Html } from 'clean-ui'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <section className='links-container'>
          <h1>Quick links:&nbsp;</h1>
          <div style={{ marginTop: '25px' }}>
            <SLink to='#' skin='light'>
              Top
            </SLink>
            <SLink to='#buttons' skin='light'>
              Buttons
            </SLink>
            <SLink to='#links' skin='light'>
              Links
            </SLink>
            <SLink to='#fun' skin='light'>
              Fun
            </SLink>
            <SLink to='#functionalities' skin='light'>
              Functionalities
            </SLink>
          </div>
        </section>
        <div className='all-container'>
          <section>
            <div id='buttons' className='anchor'></div>
            <h4>Buttons</h4>

            <div className='split'>
              <Button sType={'primary'} skin={'light'}>
                Primary dark
              </Button>
              <Button sType={'secondary'} skin='dark'>
                Secondary dark
              </Button>
            </div>
          </section>
          <hr />
          <section>
            <div id='links' className='anchor'></div>
            <h4>SLinks</h4>

            <div className={'split'}>
              <SLink
                to='https://www.baidu.com'
                sType='primary'
                skin='none'
                className='bg-blue'
              >
                Primary None
              </SLink>

              <SLink to='https://www.baidu.com' sType='primary' skin='dark'>
                Primary Dark
              </SLink>

              <SLink to='/' sType='secondary' skin='dark'>
                Secondary Dark
              </SLink>

              <SLink to='/' sType='secondary' skin='springBlue'>
                Secondary SpringBlue
              </SLink>

              <SLink to='/' sType='cover' skin='light'>
                Cover
              </SLink>

              <SLink to='/' sType='cover' skin='dark'>
                Cover Dark
              </SLink>

              <SLink to='/' sType='article' skin='springBlue'>
                Article
              </SLink>
            </div>
          </section>
          <hr />

          <section>
            <div id='fun' className='anchor'></div>
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

          <hr />
          <section>
            <div id='functionalities' className='anchor'></div>
            <h4>Func</h4>

            <div style={{ border: '1px solid black', padding: '20px' }}>
              <Html>
                {`
                <h1 id="sample-markdown">Sample Render Html in React</h1> <p>This is some basic, sample markdown.</p> <h2 id="second-heading">Second Heading</h2> <ul> <li>Unordered lists, and:<ol> <li>One</li> <li>Two</li> <li>Three</li> </ol> </li> <li>More</li> </ul> <blockquote> <p>Blockquote</p> </blockquote> <p>And <strong>bold</strong>, <em>italics</em>, and even <em>italics and later <strong>bold</strong></em>. Even <del>strikethrough</del>. <a href="https://markdowntohtml.com">A link</a> to somewhere.</p> <p>And code highlighting:</p> <pre><code class="lang-js"><span class="hljs-keyword">var</span> foo = <span class="hljs-string">'bar'</span>; <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">baz</span><span class="hljs-params">(s)</span> </span>{ <span class="hljs-keyword">return</span> foo + <span class="hljs-string">':'</span> + s; } </code></pre> <p>Or inline code like <code>var foo = &#39;bar&#39;;</code>.</p> <p>Or an image of bears</p> <p><img src="http://placebear.com/200/200" alt="bears"></p> <p>The end ...</p> <script> alert('hi') alert('hell') </script>
              `}
              </Html>
            </div>
          </section>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
