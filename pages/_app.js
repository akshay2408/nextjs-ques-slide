import React, { useEffect, useState } from 'react';
import styles from './style.css';

export default function Home() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timeoutThree = setInterval(() => {
      if (show) {
        setShow(false)
      } else {
        setShow(true)
      }
    }, 3000)
    return () => clearInterval(timeoutThree)
  }, [show])

	return (
		<div className='appDiv'>
			{show && (
				<center>
					<div className="blue-border-box">
						<h2>Which of the below statements about electricity is not true?</h2>
						<div className="question-box">
							<div className="question-first-box animated fadeOutUp">
								<label>
									<input type="radio" name="group1" className="" />
									<span className="dots"></span>
									<span className="question-text">Electricity is measured in units called watts</span>
								</label>
							</div>
							<div className="question-first-box animated fadeOutUp">
								<label>
									<input type="radio" name="group1" className="" />
									<span className="dots"></span>
									<span className="question-text">Electricity flows at the speed of light</span>
								</label>
							</div>
							<div className="question-first-box animated fadeOutUp">
								<label>
									<input type="radio" name="group1" className="" />
									<span className="dots"></span>
									<span className="question-text">Electricity is a primary energy source</span>
								</label>
							</div>
						</div>
					</div>
				</center>
			)}
		</div>
	)
}
