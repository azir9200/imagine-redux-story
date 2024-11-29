const ContactPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-6">
              Have a question or want to reach out? We'd love to hear from you!
            </p>
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-700">Address:</h3>
              <p className="text-gray-600">
                123 Fitness Street, Lisbon, Portugal
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-700">Phone:</h3>
              <p className="text-gray-600">+351 123 456 789</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-700">Email:</h3>
              <p className="text-gray-600">info@fitnessstore.com</p>
            </div>
            <div className="flex space-x-4 mt-4">
              {/* Social Media Links */}
              <a
                href="#"
                className="text-gray-500 hover:text-gray-800"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-800"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-800"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Send a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-200 focus:outline-none px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-200 focus:outline-none px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  placeholder="Your Message"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-200 focus:outline-none px-3 py-2"
                  rows={4}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 shadow-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
