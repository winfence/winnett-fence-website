export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h2>Quality Fence Repair You Can Trust</h2>
          <p>
            Expert fence repair and installation for homeowners across
            Attleboro, MA and surrounding Massachusetts towns.
          </p>
          <a href="#contact" className="btn-primary">
            Request a Free Quote
          </a>
        </div>
      </section>

      <section id="repairs" className="focus">
        <div className="container">
          <h3>Fence Repairs Are Our Specialty</h3>
          <p>
            From storm damage and leaning posts to broken panels and gates,
            Winnett Fence LLC focuses on fast, durable repairs that restore
            safety, appearance, and value.
          </p>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <h3>Our Fence Services</h3>
          <div className="grid">
            <div className="card">Vinyl Fencing</div>
            <div className="card">Chain Link Fencing</div>
            <div className="card">Aluminum Fencing</div>
            <div className="card">Wood Fencing</div>
            <div className="card">Fence Repairs</div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h3>Request a Quote</h3>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone" required />
            <textarea placeholder="Tell us about your project"></textarea>
            <button type="submit" className="btn-primary">
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
