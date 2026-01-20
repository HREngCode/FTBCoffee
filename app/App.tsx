import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Locations } from './components/Locations';
import { Menu, MenuItem } from './components/Menu';
import { Cart, CartItem } from './components/Cart';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { OrderConfirmation } from './components/OrderConfirmation';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const handleAddToCart = (item: MenuItem) => {
    setCartItems(prev => {
      const existingItem = prev.find(i => i.id === item.id);
      if (existingItem) {
        return prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      handleRemoveItem(id);
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    // Generate a random order number
    const randomOrderNumber = Math.floor(1000 + Math.random() * 9000).toString();
    setOrderNumber(randomOrderNumber);
    setIsCartOpen(false);
    setIsOrderConfirmed(true);
    setCartItems([]);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      <Header
        cartCount={totalItems}
        onCartClick={() => setIsCartOpen(true)}
      />

      <Hero />
      <About />
      <Locations />
      <Menu onAddToCart={handleAddToCart} />
      <Contact />
      <Footer />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      <OrderConfirmation
        isOpen={isOrderConfirmed}
        onClose={() => setIsOrderConfirmed(false)}
        orderNumber={orderNumber}
      />
    </div>
  );
}