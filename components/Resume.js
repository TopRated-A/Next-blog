
import { education, awards } from "../const/data";

export default function Resume() {
    return (
      <div>
        <header>
	        <h2 className="h2 article-title">Resume</h2>
        </header>

        <section className="timeline">

            <div className="title-wrapper">
            <div className="icon-box">
                <ion-icon name="book-outline"></ion-icon>
            </div>

            <h3 className="colorlib-heading">Education & Training</h3>
            </div>

            <ol className="timeline-list">
                { education.map((item,index) => <li className="timeline-item" key={index}>
                    <h4 className="h4 timeline-item-title">{item.college}</h4>
                    <p className="timeline-text"> {item.study} </p></li>)
                }
            </ol>

        </section>

        <section className="timeline">

            <div className="title-wrapper">
            <div className="icon-box">
                <ion-icon name="trophy"></ion-icon>
            </div>

            <h3 className="colorlib-heading">Awards</h3>
            </div>

            <ol className="timeline-list">
                { awards.map((item,index) => <li className="timeline-item" key={index}>
                    <h4 className="h4 timeline-item-title">{item.name}</h4>
                    <p className="timeline-text"> {item.desc} </p></li>)
                }
            </ol>

        </section>
      </div>
    
  )
}
