import { Coffee } from 'lucide-react';
import heroImage from './assets/Hero.jpg';

export function Hero() {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Mobile Coffee Shop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <Coffee className="w-16 h-16 text-amber-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Faithful & True Brew
        </h1>
        <p className="text-xl sm:text-2xl mb-4">
          Premium Coffee on the Go
        </p>
        <p className="text-lg sm:text-xl mb-8 text-gray-200">
          Serving handcrafted beverages from our mobile coffee shop
        </p>
        <button
          onClick={scrollToMenu}
          className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg text-lg transition-colors"
        >
          Order Ahead
        </button>
      </div>
    </section>
  );
}