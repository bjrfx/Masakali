import React from 'react'
import bgimage from '../../../assets/images/1520x400atopb.png';
const HeaderImage = () => {
  return (
    <div style={{ backgroundImage: `url(${bgimage})`, height: '400px' }}>
      <div style={{background:'#0000007a',height:'400px'}}>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1
                style={{marginTop: '175px', textAlign: 'center', color:'white',    fontFamily: 'Pinyon Script', textTransform: 'none'}}>
                About Us</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderImage