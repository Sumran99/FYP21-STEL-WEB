import React from 'react'
import "./updatedriver.css"
export default function UpdateDriver() {
  return (
    <div className='boxes'>

      {/* <input className='textarea' placeholder='Enter Driver CNIC'></input>
      <button className='Buttonupdate'>Serach Driver</button>
       */}
       <form action="" class="search-bar">
	<input type="search" name="search" pattern=".*\S.*" required/>
	<button class="search-btn" type="submit">
		<span>Search</span>
	</button>
</form>
    </div>
  )
}

