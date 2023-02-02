import React from 'react'
import clientLogo01 from '../../assets/images/client_logo_01.png'
import clientLogo02 from '../../assets/images/client_logo_02.png'
import clientLogo03 from '../../assets/images/client_logo_03.png'
import clientLogo04 from '../../assets/images/client_logo_04.png'

function ClientLogoArea() {
  return (
<section className="client-logo-area">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-6">
            <div className="single-client mt-30 text-center">
              <img src={clientLogo01} alt="Logo" />
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="single-client mt-30 text-center">
            <img src={clientLogo02} alt="Logo" />
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="single-client mt-30 text-center">
            <img src={clientLogo03} alt="Logo" />
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="single-client mt-30 text-center">
            <img src={clientLogo04} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientLogoArea