
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import CryptoCard, { CryptoCardProps } from "./CryptoCard";

const cryptoAssets: CryptoCardProps[] = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: "56,789.32",
    change: "+5.6%",
    icon: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=100&auto=format&fit=crop&q=80",
    positive: true
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: "3,432.16",
    change: "+3.2%",
    icon: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=100&auto=format&fit=crop&q=80",
    positive: true
  },
  {
    name: "Solana",
    symbol: "SOL",
    price: "178.90",
    change: "-1.8%",
    icon: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=100&auto=format&fit=crop&q=80",
    positive: false
  },
  {
    name: "Cardano",
    symbol: "ADA",
    price: "2.12",
    change: "+0.7%",
    icon: "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=100&auto=format&fit=crop&q=80",
    positive: true
  }
];

const CryptoAssetsSection = () => {
  return (
    <section id="assets" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Популярные активы</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Следите за курсами криптовалют в реальном времени и управляйте своими инвестициями.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cryptoAssets.map((crypto, index) => (
            <CryptoCard 
              key={index}
              name={crypto.name}
              symbol={crypto.symbol}
              price={crypto.price}
              change={crypto.change}
              icon={crypto.icon}
              positive={crypto.positive}
            />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="outline" className="py-6 px-8">
            <Icon name="Plus" className="mr-2 h-5 w-5" />
            Показать все активы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CryptoAssetsSection;
