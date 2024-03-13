import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { SocialIcon } from 'react-social-icons'

export default function footer() {
  const additionalStyles = {
    margin: '10px',
  };

  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span style={{ marginTop: '100px' }}>Get connected with us on social networks:</span>
        </div>

        <div>

          <SocialIcon url="https://twitter.com" style={{ margin: '10px', fontSize: '1.5rem' }} />
          <SocialIcon url="https://facebook.com" style={additionalStyles} />
          <SocialIcon url="https://instagram.com" style={additionalStyles} />

        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5 custom-con'>
          <MDBRow className='mt-3  custom-row'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3 " />
                PARK!T
              </h6>
              <p>
JHFJLJKJ              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>SERVICES</h6>
              <p>
                <a href='#!' className='text-reset link-no-decoration'>
                  
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset link-no-decoration'>
                  
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset link-no-decoration'>
                  
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset link-no-decoration'>
                  
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset link-no-decoration'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset link-no-decoration'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset link-no-decoration'>
                  BOOKIGNG
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset link-no-decoration'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                GEC PKD
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                park!t@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" />8921287515
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> 
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright :
        <a className='text-reset fw-bold link-no-decoration' href=''>
          &nbsp; OrdersGo
        </a>
      </div>
    </MDBFooter>
  );
}