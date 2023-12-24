import { React, useLayoutEffect} from 'react'
import '../stylesheets/LandingPage.css'

function LandingPage() {

  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#ffe6fe"
  });

  return (
    <div className='background'>
      <div>
        <p>
          <span className='landingPageTxtB'>date</span>
          <span className='landingPageTxtR'>McGill</span>
        </p>
        <div className='buttons'>
          <button className = 'buttonLanding'>
            <p className = 'buttonText'>Create Account</p>
          </button>
          <button className = 'buttonLanding'>
            <p className='buttonText'>Login</p>
          </button>
        </div>
        <p className='bottomText'>Dating app made for McGill students, by a McGill student!</p>
      </div>
    </div>
  )
}

export default LandingPage
