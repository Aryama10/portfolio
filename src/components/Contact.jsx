function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "80px 20px",
        textAlign: "center"
      }}
    >
      <h1
        style={{
          fontSize: "40px",
          marginBottom: "20px"
        }}
      >
        Contact Me
      </h1>

      <p
        style={{
          color: "gray",
          marginBottom: "40px"
        }}
      >
        Feel free to reach out for collaborations or opportunities.
      </p>

      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          margin: "auto",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 2px 10px gray",
          boxSizing: "border-box"
        }}
      >
        <input
          type="text"
          placeholder="Enter your name"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        />

        <input
          type="email"
          placeholder="Enter your email"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        />

        <textarea
          placeholder="Enter your message"
          rows="5"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            resize: "none"
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#094e93",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Send Message
        </button>
      </div>
    </section>
  )
}

export default Contact;
