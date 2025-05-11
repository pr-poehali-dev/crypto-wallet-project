
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="border-b sticky top-0 z-10 bg-white/90 backdrop-blur-md dark:bg-gray-900/90 dark:border-gray-800">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-8 h-8 rounded-lg flex items-center justify-center">
            <Icon name="Wallet" className="text-white h-5 w-5" />
          </div>
          <span className="font-bold text-xl">CryptoWallet</span>
        </div>
        
        <nav className="hidden md:flex gap-6">
          <a href="#features" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Особенности</a>
          <a href="#assets" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Активы</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Безопасность</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">О нас</a>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            Войти
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
            Регистрация
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
