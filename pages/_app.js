import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import About from "../components/About";
import Expertise from "../components/Expertise";
import Consult from "../components/Consult";
import Resume from "../components/Resume";
import TextBook from "../components/Textbook";
import Publications from "../components/Publicians";
import Contact from "../components/Contact";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "highlight.js/styles/atom-one-dark.css";

function MyApp({ Component, pageProps }) {
  return (
    <main className="max-w-max mx-auto px-2">
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-end px-5">
          <Header />
        </div>
        <div className="main-content d-flex justify-content-around max-w-max mx-auto">
          <Sidebar />
          <div className="main-content" id="main-wrapper">
            <nav className="navbar">
              <ul className="navbar-list">
                <li className="navbar-item">
                  <button className="navbar-link active" data-nav-link>
                    About
                  </button>
                </li>

                <li className="navbar-item">
                  <button className="navbar-link" data-nav-link>
                    Resume
                  </button>
                </li>

                <li className="navbar-item">
                  <button className="navbar-link" data-nav-link>
                    TextBook
                  </button>
                </li>

                <li className="navbar-item">
                  <button className="navbar-link" data-nav-link>
                    Publications
                  </button>
                </li>

                <li className="navbar-item">
                  <button className="navbar-link" data-nav-link>
                    Blog
                  </button>
                </li>

                <li className="navbar-item">
                  <button className="navbar-link" data-nav-link>
                    Contact
                  </button>
                </li>
              </ul>
            </nav>

            <article className="about active" data-page="about">
              <About />
              <section className="service">
                <Expertise />
              </section>
              <section className="consult">
                <Consult />
              </section>
            </article>

            <article className="resume" data-page="resume">
              <Resume />
            </article>

            <article className="textbook" data-page="textbook">
              <TextBook />
            </article>

            <article className="publicians" data-page="publications">
              <Publications />
            </article>

            <article className="blog" data-page="blog">
              <Component {...pageProps} />
            </article>

            <article className="contact" data-page="contact">
              <Contact />
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MyApp;
