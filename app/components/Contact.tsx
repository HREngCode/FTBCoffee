import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-amber-100">
            Find us on the road or reach out for catering and events
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold mb-1">Phone</p>
                  <a href="tel:+1234567890" className="text-amber-100 hover:text-white">
                    (123) 456-7890
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold mb-1">Email</p>
                  <a href="mailto:hello@faithfulandtruebrew.com" className="text-amber-100 hover:text-white">
                    hello@faithfulandtruebrew.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold mb-1">Service Area</p>
                  <p className="text-amber-100">
                    Greater Metropolitan Area<br />
                    Check our social media for daily locations
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-amber-800 hover:bg-amber-700 p-3 rounded-lg transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="bg-amber-800 hover:bg-amber-700 p-3 rounded-lg transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-amber-800 border border-amber-700 text-white placeholder-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-amber-800 border border-amber-700 text-white placeholder-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-amber-800 border border-amber-700 text-white placeholder-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="Tell us about your event or inquiry..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-500 text-white py-3 rounded-lg font-bold transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
