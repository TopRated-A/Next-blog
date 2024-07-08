import Link from 'next/link'
import Toggle from './Toggle'
import { avatar_url } from '../const/data'
import { FaPhoneAlt } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div>
      <div className="sidebar-info">
      <figure className="avatar-box">
        <a href="#" alt="Daniel Gologorsky">
          <img src={avatar_url} alt="Daniel Gologorsky" />
        </a>
      </figure>
      <div className="info-content">
        <h1 className="name" title="Daniel Gologorsky">Daniel Gologorsky, MD, MBA</h1>

        <p className="title">Ophthalmologist & Retina Specialist</p>
        <div id="job-contact" className="text-center text-uppercase small pt-2">
          <a
            className="sidebar-schedule-btn btn btn-primary btn-sm text-light"
            href="https://squareup.com/appointments/book/mb34w9v87o2g0a/L6WQ2ZCD1V07V/start/"
            target="_blank"
            rel="nofollow noreferrer noopener">Schedule a consultation</a>
        </div>
      </div>

      <button className="info_more-btn" data-sidebar-btn>
        <span>Show Contacts</span>
        <ion-icon name="chevron-down"></ion-icon>
      </button>
      
      </div>

      <div className="sidebar-info_more">

        <div className="separator"></div>

        <ul className="contacts-list">

          <li className="contact-item">

            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a
                  className="sidebar-email-btn contact-link"
                  href="mailto:support@miamiretina.com"
                  target="_blank" rel="noopener noreferrer">support@miamiretina.com</a>
            </div>

          </li>

          <li className="contact-item">

            <div className="icon-box">
              <FaPhoneAlt className='text-primary'/>
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a className="contact-link contact-section-call-btn" href="tel:3059023200">305-902-3200</a>
            </div>

          </li>

          <li className="contact-item">

            <div className="icon-box">
              <ion-icon name="print-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Fax</p>
              <a className="contact-link contact-section-call-btn" href="fax:305-834-4371">305-834-4371</a>
            </div>

          </li>

          <li className="contact-item">

            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>
              
              <address>
                  <a className="contact-section-get-direction-btn contact-link"
                    href="https://www.google.com/maps/place/4308+Alton+Road+Suite+610+Miami+Beach+FL+33140/@25.8135422,-80.1456993,17z"
                    target="_blank" rel="noopener noreferrer"> 4308 Alton Road, Suite 610<br />Miami Beach, FL 33140</a></address>
            </div>
                
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="star"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Reviews</p>
              <a className="contact-link" href="https://www.healthgrades.com/physician/dr-daniel-gologorsky-y9qfc2z"
                    target="_blank"
                    rel="noopener noreferrer">
                    Healthgrades Reviews
              </a>
            </div>

          </li>

        </ul>

        <div className="separator"></div>
      </div>
    </div>
  )
}
