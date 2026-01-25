import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 inline-block rounded-full bg-gray-100 px-4 py-1 text-sm font-medium">
              Winnett Fence LLC · Est. 2023
            </p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Quality Fence Repair You Can Trust
            </h1>
            <p className="mb-8 max-w-xl text-lg text-gray-600">
              Premium fence repair and installation serving Attleboro, MA and
              surrounding Massachusetts towns. Fast response, honest pricing,
              and craftsmanship that lasts.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#quote"
                className="rounded-xl bg-black px-6 py-3 text-white shadow hover:bg-gray-800"
              >
                Get a Free Quote
              </a>
              <a
                href="tel:8577029780"
                className="rounded-xl border border-gray-300 px-6 py-3 text-gray-800 hover:bg-gray-50"
              >
                Call 857-702-9780
              </a>
            </div>
          </div>

          {/* Quote Form */}
          <div
            id="quote"
            className="rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow"
          >
            <h2 className="mb-4 text-2xl font-semibold">Request a Quote</h2>
            <form
  className="grid gap-4"
  onSubmit={async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        service: formData.get("service"),
        message: formData.get("message"),
      }),
    });

    if (res.ok) {
      alert("Thanks! We’ll be in touch shortly.");
      form.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  }}
>
  <input name="name" type="text" placeholder="Full Name" className="rounded-lg border border-gray-300 p-3" required />
  <input name="email" type="email" placeholder="Email" className="rounded-lg border border-gray-300 p-3" required />
  <input name="phone" type="tel" placeholder="Phone" className="rounded-lg border border-gray-300 p-3" required />
  <select name="service" className="rounded-lg border border-gray-300 p-3">
    <option>Fence Repair</option>
    <option>Vinyl Fence</option>
    <option>Wood Fence</option>
    <option>Chain Link Fence</option>
    <option>Aluminum Fence</option>
  </select>
  <textarea name="message" placeholder="Brief description of the project" className="rounded-lg border border-gray-300 p-3" rows={4} />
  <button type="submit" className="rounded-xl bg-black px-6 py-3 text-white hover:bg-gray-800">
    Submit Request
  </button>
</form>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-100 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-3xl font-bold">Our Services</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Fence Repairs",
                desc: "Post replacement, storm damage, sagging gates, and more.",
                href: "/fence-repairs",
              },
              {
                title: "Vinyl Fencing",
                desc: "Low-maintenance, clean, and long-lasting fencing solutions.",
                href: "/vinyl-fencing",
              },
              {
                title: "Wood Fencing",
                desc: "Classic New England style with quality materials.",
                href: "/wood-fencing",
              },
              {
                title: "Chain Link Fencing",
                desc: "Durable, practical, and cost-effective installations.",
                href: "/chain-link-fencing",
              },
              {
                title: "Aluminum Fencing",
                desc: "Elegant, strong, and maintenance-free fencing.",
                href: "/aluminum-fencing",
              },
            ].map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="rounded-2xl bg-white p-6 shadow hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-semibold">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-6 text-3xl font-bold">Service Area</h2>
        <p className="mb-4 max-w-2xl text-gray-600">
          We proudly serve Attleboro and surrounding Massachusetts towns within
          a 20-mile radius.
        </p>
        <p className="text-gray-700">
          Attleboro · North Attleboro · Mansfield · Norton · Wrentham · Plainville
          · Seekonk · Rehoboth · Foxborough · Easton
        </p>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Winnett Fence LLC · Attleboro, MA
      </footer>
    </main>
  );
}
