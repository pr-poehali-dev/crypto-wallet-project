
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <Badge className="mb-4 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">Новое поколение кошельков</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              Безопасный крипто кошелек для будущего
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">
              Храните, отправляйте и получайте криптовалюты с легкостью. Ваши активы всегда под защитой с помощью новейших технологий безопасности.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-6 px-8">
                <Icon name="Wallet" className="mr-2 h-5 w-5" />
                Создать кошелек
              </Button>
              <Button variant="outline" className="py-6 px-8">
                <Icon name="FileText" className="mr-2 h-5 w-5" />
                Узнать больше
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&auto=format&fit=crop&q=80" 
              alt="Crypto Wallet" 
              className="rounded-xl shadow-2xl w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
