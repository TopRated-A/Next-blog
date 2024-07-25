import { RxDotFilled } from "react-icons/rx";

export default function Expertise() {
    return (
      <div>
        <section className="colorlib-expertise" id="expertise">
            <div className="colorlib-narrow-content">
                <div className="row">
                <div className="col-md-12">
                    <h3 className="colorlib-heading mb-2">Expertise</h3>
                    <div className="about-desc">
                    We offer expert medical and surgical treatments for the following conditions:
                            <div className="expertise-table grid grid-cols-3 gap-y-1">
                                <div className="d-flex items-center"><span><RxDotFilled /></span>Annual Eye Exams</div>
                                <div className="d-flex items-center"><span><RxDotFilled /></span>Diabetic Retinopathy</div>
                                <div className="d-flex items-center"><span><RxDotFilled /></span>Macular Degeneration</div>
                                <div className="d-flex items-center"><span><RxDotFilled /></span>Glaucoma</div>
                                <div className="d-flex items-center"><span><RxDotFilled /></span>Dry Eye</div>
                                <div className="d-flex items-center"><span><RxDotFilled /></span>Cataract</div>
                            </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
      </div>
  )
}
