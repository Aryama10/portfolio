import pro1img from '../assets/images/project.avif'
import pro2img from '../assets/images/facebook.avif'

function Projects() { 
  return (
     <section 
        id="projects"
         style={{ padding: "50px",
         textAlign: "center" }} >
       <h1 
       style={{ fontSize: "40px",
        marginBottom: "30px" }} > Projects </h1>
 <div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap"
  }}
>

  {/* Project 1 */}
  <div
    style={{
      width: "350px",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0px 2px 10px gray"
    }}
  >
    <img
      src={pro1img}
      alt="Roastery Cafe Website"
      style={{
        width: "100%",
        height: "200px",
        objectFit: "cover",
        borderRadius: "10px"
      }}
    />

    <h2>Roastery Cafe Website</h2>

    <p>
      A responsive cafe website built using HTML, CSS and JavaScript.
    </p>

    <a
      href="https://aryama10.github.io/Roasterycafe"
      target="_blank"
      rel="noreferrer"
      style={{
        textDecoration: "none",
        color: "white",
        backgroundColor: "#212529",
        padding: "10px 20px",
        borderRadius: "5px",
        display: "inline-block",
        marginTop: "10px"
      }}
    >
      View Project
    </a>
  </div>

  {/* Project 2 */}
  <div
    style={{
      width: "350px",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0px 2px 10px gray"
    }}
  >
    <img
      src={pro2img}
      alt="Facebook Login Page"
      style={{
        width: "100%",
        height: "200px",
        objectFit: "cover",
        borderRadius: "10px"
      }}
    />

    <h2>Facebook Login Page</h2>

    <p>
      A responsive Facebook login page clone built using HTML and CSS.
    </p>

    <a
      href="https://aryama10.github.io/facebook-login-page/"
      style={{
        textDecoration: "none",
        color: "white",
        backgroundColor: "#212529",
        padding: "10px 20px",
        borderRadius: "5px",
        display: "inline-block",
        marginTop: "10px"
      }}
    >
      View Project
    </a>
  </div>

</div>
</section>
  );
}
export default Projects;