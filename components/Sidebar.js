// import Link from 'next/link'
import Toggle from './Toggle'
import { useState } from 'react';
import { useContext } from "react";

import { ImLocation2 } from "react-icons/im";
import { IoMailSharp } from "react-icons/io5";
import { FaPhoneAlt,FaChevronDown, FaFax,FaStar,FaLinkedin,FaRssSquare } from 'react-icons/fa';
import { Form, Dropdown, DropdownToggle, DropdownItem,DropdownMenu } from 'react-bootstrap';
import "../node_modules/flag-icons/css/flag-icons.min.css";
import { Lang_Mode } from '../context/context';
import { avatar_url } from '../const/data'

export default function Sidebar() {

  const [countries] = useState([
    { code: 'fi fi-ru mr-1 text-xl', title: 'Ru'},
    { code: 'fi fi-il mr-1 text-xl', title: 'He'},
    { code: 'fi fi-es mr-1 text-xl', title: 'Es'},
    { code: 'fi fi-us mr-1 text-xl', title: 'En'}
  ]);

  const [toggleContents, setToggleContents] = useState(<i className='fi fi-us mr-1 text-xl'/>);
  const [selectedCountry, setSelectedCountry] = useState();
  const { lang, setLangMode } = useContext(Lang_Mode);
  return (
    <div className="sidebar" data-sidebar>
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
              className="sidebar-schedule-btn text-light"
              href="https://squareup.com/appointments/book/mb34w9v87o2g0a/L6WQ2ZCD1V07V/start/"
              target="_blank"
              rel="nofollow noreferrer noopener">Schedule a consultation</a>
          </div>
        </div>

        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>
            <FaChevronDown />
        </button>    
      </div>

      <div className="sidebar-info_more">

        <div className="separator"></div>

        <ul className="contacts-list">

          <li className="contact-item">

            <div className="icon-box">
              <IoMailSharp />
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
              <FaPhoneAlt />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a className="contact-link contact-section-call-btn" href="tel:3059023200">305-902-3200</a>
            </div>

          </li>

          <li className="contact-item">

            <div className="icon-box">
              <FaFax />
            </div>

            <div className="contact-info">
              <p className="contact-title">Fax</p>
              <a className="contact-link contact-section-call-btn" href="fax:305-834-4371">305-834-4371</a>
            </div>

          </li>

          <li className="contact-item">

            <div className="icon-box">
              <ImLocation2 />
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
              <FaStar />
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
        <div className='side-footer'>
          <div className='social'>
            <ul className="social-list">
              <li className="social-item">
                <a href="https://www.linkedin.com/in/daniel-gologorsky-md-mba" target="_blank" className="social-link">
                  <FaLinkedin />
                </a>
              </li>
              <li className="social-item">
                <a className="social-link"
                    href="https://www.asrs.org/find-a-specialist/profile/23232/Daniel-Gologorsky"
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                >
                  <FaRssSquare />
                </a>
              </li>
            </ul>
          </div>
          <div className='lang-mode'>
            <Form className='lang-form'>
              <Dropdown
                onSelect={eventKey => {
                  const { code, title } = countries.find(({ code }) => eventKey === code);
                  setSelectedCountry(eventKey);
                  setLangMode(title);
                  setToggleContents(<i className={code}/>);
                }}
              >
                <Dropdown.Toggle variant="secondary" id="dropdown-flags" className="text-secondary text-left">
                  {toggleContents}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {countries.map(({ code, title }) => (
                    <Dropdown.Item key={code} eventKey={code}><i className={code}/>&nbsp;&nbsp; {title}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Form>
          </div>
          <Toggle/>
        </div>
      </div>
    </div>
  )
}
