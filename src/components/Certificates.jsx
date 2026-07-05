import "./Certificates.css";
import certfimg from '../assets/images/certificate.jpeg'

function Certificates() {
  return (
    <section className="container py-5" id="certificates">

      <div className="text-center mb-5">
        <h2 className="fw-bold">My Certificates</h2>
        <p className="text-muted">
          Certifications and achievements I've earned.
        </p>
      </div>

        {/* Certificate 2 */}
        <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div className="certificate-card">

            <img
              src={certfimg}
              className="certificate-img"
              alt="Certificate 2"
            />

            <div className="certificate-content">

              <h4>Training Program</h4>

              <p>
                Completed the Summer Internship Training Program on Development Fundamentals(Full Stack with Python) conducted by Shri Ramswaroop Digital Technologies Pvt-Ltd
              </p>

              <a href="#" className="btn btn-success w-100">
                View Certificate
              </a>

            </div>

          </div>
        </div>
        </div>
    </section>
  );
}

export default Certificates;