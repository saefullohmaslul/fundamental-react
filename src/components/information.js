import React from 'react'

const Information = ({ isInformationShow, showInformation }) => {
  return (
    // membuat inline css
    <div className="information" style={{
      backgroundColor: 'green'
    }}>
      <p>This is component information</p>

      {
        isInformationShow ?
          <h2>Hari Minggu Libur</h2>
          : null
      }

      <button onClick={() => showInformation()}>Show Information</button>
    </div>
  )
}

export default Information