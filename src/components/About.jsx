import Abimg from "../assets/images/fullstack.jpg";

function About() {
  return (
    <>
      <section className="container py-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold">About Me</h1>
          <p className="text-muted">
            Learn more about my background and experience.
          </p>
        </div>

        <div className="row align-items-center">
          {/* Image */}
          <div className="col-lg-5 text-center mb-4 mb-lg-0">
            <img
              src={Abimg}
              alt="About"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Content */}
          <div className="col-lg-7">
            <h2 className="fw-bold mb-3">
              Full Stack MERN Developer
            </h2>

            <p className="text-muted">
              I am a passionate MERN Stack Developer with experience in building
              responsive and user-friendly web applications. I enjoy creating
              modern websites and continuously learning new technologies.
            </p>

            <div className="row mt-4">
              <div className="col-md-6">
                <p>
                  <strong>Name:</strong> Aryama Tripathi
                </p>

                <p>
                  <strong>Email:</strong> aryamatripathi10@gmail.com
                </p>

                <p>
                  <strong>Phone:</strong> +91 6307723752
                </p>
              </div>

              <div className="col-md-6">
                <p>
                  <strong>Experience:</strong> 1+ Years
                </p>

                <p>
                  <strong>Location:</strong> Lucknow, Uttar Pradesh
                </p>

                <p>
                  <strong>Freelance:</strong> Available
                </p>
              </div>
            </div>

            <button className="btn btn-primary mt-3">
              Contact Me
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;