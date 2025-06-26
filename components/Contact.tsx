export default function Contact() {
  return (
    <div className="section-padding flex justify-center items-center min-h-[400px]">
      <form className="bg-background-800 rounded-2xl shadow-yellow-glow p-8 w-full max-w-xl border border-border">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">
          Request a Demo
        </h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-text mb-2 font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 rounded-lg bg-background-700 text-text border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-text mb-2 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 rounded-lg bg-background-700 text-text border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="you@email.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-text mb-2 font-semibold"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full p-3 rounded-lg bg-background-700 text-text border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="How can we help you?"
            required
          />
        </div>
        <button
          type="submit"
          className="btn-primary w-full text-lg flex justify-center items-center gap-2"
        >
          Request Demo
        </button>
      </form>
    </div>
  );
}
