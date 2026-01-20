import { MapPin, Clock, Heart } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-4">
            About Us
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Bringing exceptional coffee to your neighborhood with faith, dedication, and a passion for quality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <MapPin className="w-12 h-12 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-amber-900 mb-3">
              Mobile Service
            </h3>
            <p className="text-gray-600">
              We bring the café to you! Find us at events, farmers markets, and neighborhoods throughout the area.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <Clock className="w-12 h-12 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-amber-900 mb-3">
              Order Ahead
            </h3>
            <p className="text-gray-600">
              Skip the wait! Place your order in advance and pick it up when you arrive at our location.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <Heart className="w-12 h-12 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-amber-900 mb-3">
              Crafted with Care
            </h3>
            <p className="text-gray-600">
              Every drink is made with premium ingredients and attention to detail, served with a smile.
            </p>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1675306408031-a9aad9f23308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFuc3xlbnwxfHx8fDE3Njg4NTA3NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Fresh Coffee Beans"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-amber-900 mb-4">
              Our Story
            </h3>
            <p className="text-gray-700 mb-4">
              Faithful & True Brew was born from a simple belief: great coffee should be accessible to everyone, everywhere. Our mobile coffee shop allows us to bring premium, handcrafted beverages directly to our community.
            </p>
            <p className="text-gray-700">
              We source our beans from ethical suppliers and roast them to perfection. Every cup we serve represents our commitment to quality, community, and the joy of a perfectly brewed beverage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
