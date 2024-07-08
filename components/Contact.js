export default function Contact() {
    return (
        <div>
            <header>
                <h2 className="h2 article-title">Contact</h2>
            </header>

            <section className="mapbox" data-mapbox>
            <figure>
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3591.6977974535753!2d-80.1456993!3d25.8135422!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b377ac8720ff%3A0xc91d221a2c73d32a!2sGolden%20Medical%20Office%20Building%2C%204308%20Alton%20Rd%20%23610%2C%20Miami%20Beach%2C%20FL%2033140%2C%20USA!5e0!3m2!1sen!2sit!4v1719956611568!5m2!1sen!2sit"
                width="400" height="300" loading="lazy"></iframe>
            </figure>
            </section>

            <section className="contact-form">

                <h3 className="h3 form-title">Contact Form</h3>

                <form action="https://formspree.io/mpzyppro" className="form" data-form>

                    <div className="input-wrapper">
                        <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input/>

                        <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input/>
                    </div>

                    <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>

                    <button className="contact-section-form-submission-btn form-btn" type="submit" disabled data-form-btn>
                        <ion-icon name="paper-plane"></ion-icon>
                    <span>Send Message</span>
                    </button>
                </form>
            </section>
        </div>
  )
}
