import React from 'react'
import { useState } from 'react';

function Home() {
    const [roomcode, setRoomCode] = useState();
  return (
      <>
          <div className='homepage'>
              <form className='form'>
                  <div>
                      <label>
                          Enter Room Code
                      </label>
                      
                      <input value={roomcode} onChange={(e)=>{setRoomCode(e.target.value)}}
                          
                          type='text' placeholder="Room code" name='roomcode' required />    
                      
                  </div>
                  <button type='submit'>Enter Room</button>
              </form>
              
          </div>
      </>
  )
}

export default Home