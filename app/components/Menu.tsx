import { Plus } from 'lucide-react';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

interface MenuProps {
  onAddToCart: (item: MenuItem) => void;
}

const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Classic Espresso',
    description: 'Rich, bold espresso shot',
    price: 3.50,
    category: 'Espresso',
    image: 'https://images.unsplash.com/photo-1648062165414-25e2e1aeb422?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBkcmlua3xlbnwxfHx8fDE3Njg4NzAxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '2',
    name: 'Cappuccino',
    description: 'Espresso with steamed milk and foam',
    price: 4.50,
    category: 'Espresso',
    image: 'https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGFydHxlbnwxfHx8fDE3Njg3NjEwMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '3',
    name: 'Vanilla Latte',
    description: 'Espresso with vanilla and steamed milk',
    price: 5.00,
    category: 'Lattes',
    image: 'https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGFydHxlbnwxfHx8fDE3Njg3NjEwMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '4',
    name: 'Caramel Macchiato',
    description: 'Espresso with caramel and foam',
    price: 5.50,
    category: 'Lattes',
    image: 'https://images.unsplash.com/photo-1648062165414-25e2e1aeb422?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBkcmlua3xlbnwxfHx8fDE3Njg4NzAxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '5',
    name: 'Mocha',
    description: 'Espresso with chocolate and steamed milk',
    price: 5.25,
    category: 'Lattes',
    image: 'https://images.unsplash.com/photo-1648062165414-25e2e1aeb422?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBkcmlua3xlbnwxfHx8fDE3Njg4NzAxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '6',
    name: 'Cold Brew',
    description: 'Smooth, refreshing cold-steeped coffee',
    price: 4.75,
    category: 'Cold Drinks',
    image: 'https://images.unsplash.com/photo-1648062165414-25e2e1aeb422?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBkcmlua3xlbnwxfHx8fDE3Njg4NzAxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '7',
    name: 'Iced Vanilla Latte',
    description: 'Vanilla latte over ice',
    price: 5.25,
    category: 'Cold Drinks',
    image: 'https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGFydHxlbnwxfHx8fDE3Njg3NjEwMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '8',
    name: 'Americano',
    description: 'Espresso with hot water',
    price: 3.75,
    category: 'Espresso',
    image: 'https://images.unsplash.com/photo-1648062165414-25e2e1aeb422?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBkcmlua3xlbnwxfHx8fDE3Njg4NzAxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '9',
    name: 'Hot Chocolate',
    description: 'Rich chocolate with steamed milk',
    price: 4.25,
    category: 'Specialty',
    image: 'https://images.unsplash.com/photo-1648062165414-25e2e1aeb422?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBkcmlua3xlbnwxfHx8fDE3Njg4NzAxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '10',
    name: 'Chai Latte',
    description: 'Spiced chai tea with steamed milk',
    price: 4.75,
    category: 'Specialty',
    image: 'https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGFydHxlbnwxfHx8fDE3Njg3NjEwMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '11',
    name: 'Matcha Latte',
    description: 'Premium matcha green tea latte',
    price: 5.50,
    category: 'Specialty',
    image: 'https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGFydHxlbnwxfHx8fDE3Njg3NjEwMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '12',
    name: 'Affogato',
    description: 'Espresso over vanilla ice cream',
    price: 6.00,
    category: 'Specialty',
    image: 'https://images.unsplash.com/photo-1648062165414-25e2e1aeb422?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBkcmlua3xlbnwxfHx8fDE3Njg4NzAxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
];

export function Menu({ onAddToCart }: MenuProps) {
  const categories = Array.from(new Set(menuItems.map(item => item.category)));

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-gray-700">
            Order ahead and skip the wait
          </p>
        </div>

        {categories.map(category => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-bold text-amber-900 mb-6">{category}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {menuItems
                .filter(item => item.category === category)
                .map(item => (
                  <div
                    key={item.id}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-amber-900 mb-2">{item.name}</h4>
                      <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-amber-900">
                          ${item.price.toFixed(2)}
                        </span>
                        <button
                          onClick={() => onAddToCart(item)}
                          className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
