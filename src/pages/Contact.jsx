import Header from '../components/Header';
import { Mail, Phone, MapPin } from 'lucide-react';
import contact from '../assets/images/contact.jpg';
import { useEffect } from 'react';

const Contact = () => {
      // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full min-h-screen">
      <Header />

      <section className="w-full py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto py-12">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities? We'd love to hear from you.
            </p>
          </div>

          {/* Equal height columns container */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="flex-1 flex flex-col">
              <div className="p-8  h-full flex flex-col">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-full">
                      <Mail className="text-blue-600 w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Email</h3>
                      <a href="mailto:contact@panza.com" className="text-lg text-gray-900 hover:text-blue-600 transition-colors">
                        contact@panza.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-full">
                      <Phone className="text-blue-600 w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                      <a href="tel:+2348000000000" className="text-lg text-gray-900 hover:text-blue-600 transition-colors">
                        +234 800 000 0000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-full">
                      <MapPin className="text-blue-600 w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Office</h3>
                      <p className="text-lg text-gray-900">Lagos, Nigeria</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 overflow-hidden  flex-grow">
                  <img
                    src={contact}
                    alt="Our office"
                    className="w-full h-full  object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="flex-1">
              <div className=" p-8  h-full">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Business Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your company or brand"
                        className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 ">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="example@domain.com"
                        className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+234 000 000 0000"
                        className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows="5"
                      required
                      placeholder="Tell us about your project..."
                      className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      id="terms" 
                      required
                      className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      I agree to the{' '}
                      <a href="/terms" className="text-blue-600 hover:underline font-medium">
                        Terms & Conditions
                      </a> and{' '}
                      <a href="/privacy" className="text-blue-600 hover:underline font-medium">
                        Privacy Policy
                      </a>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-fancy"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;