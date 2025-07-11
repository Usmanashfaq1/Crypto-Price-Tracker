export default function Contact() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-pink-100 p-6">
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-4xl font-bold text-pink-600 mb-4 text-center">
          Contact Us
        </h1>
        <p className="text-gray-700 mb-6 text-center">
          Have a question or just want to say hi? We'd love to hear from you!
        </p>

        <form className="space-y-4">
          <div>
            <label
              className="block text-gray-600 font-medium mb-1"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-pink-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label
              className="block text-gray-600 font-medium mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-pink-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              className="block text-gray-600 font-medium mb-1"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full border border-pink-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-pink-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-pink-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
