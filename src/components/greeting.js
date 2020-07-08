import React, { useState } from 'react'

// membuat internal css
const greetingStyle = {
  backgroundColor: 'blue'
}

// transfer props ke childern
const Greeting = ({ greeting }) => {
  // deklarasi state di functional component menggunakan useState
  const [data, setData] = useState('Halo selamat datang')

  return (
    <div className="greeting" style={greetingStyle} >
      {/* merender props di element h2 */}
      <h2>props: {greeting}</h2>

      {/* render state di functional component */}
      <h2>state di functional component: {data}</h2>

      {/* button untuk memanggil function setData (mengubah state) */}
      <button onClick={() => setData('Berubah selamat datang')}>Ubah Kata</button>
    </div>
  )
}

export default Greeting