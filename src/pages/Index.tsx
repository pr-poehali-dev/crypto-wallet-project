
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="border-b sticky top-0 z-10 bg-white/90 backdrop-blur-md dark:bg-gray-900/90 dark:border-gray-800">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-8 h-8 rounded-lg flex items-center justify-center">
              <Icon name="Wallet" className="text-white h-5 w-5" />
            </div>
            <span className="font-bold text-xl">CryptoWallet</span>
          </div>
          
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Особенности</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Активы</a>
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

      {/* Hero Section */}
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

      {/* Features */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Широкие возможности</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Наш кошелек предлагает множество функций, чтобы обеспечить безопасность и удобство использования ваших криптоактивов.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Мультивалютность",
                description: "Поддержка более 300 различных криптовалют и токенов на разных блокчейнах.",
                icon: "Coins"
              },
              {
                title: "Безопасность",
                description: "Многоуровневая защита с использованием шифрования и биометрической аутентификации.",
                icon: "Shield"
              },
              {
                title: "Быстрые транзакции",
                description: "Моментальные переводы между пользователями кошелька и низкие комиссии.",
                icon: "Zap"
              },
              {
                title: "Обмен валют",
                description: "Встроенный обменник для конвертации криптовалют по выгодному курсу.",
                icon: "RefreshCw"
              },
              {
                title: "Аналитика",
                description: "Детальная статистика ваших активов и транзакций с визуализацией.",
                icon: "BarChart2"
              },
              {
                title: "Поддержка 24/7",
                description: "Наша команда всегда готова помочь вам с любыми вопросами.",
                icon: "HeadphonesIcon"
              }
            ].map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={feature.icon} className="text-white h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Crypto Assets */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Популярные активы</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Следите за курсами криптовалют в реальном времени и управляйте своими инвестициями.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
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
            ].map((crypto, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 p-4">
                    <img 
                      src={crypto.icon} 
                      alt={crypto.name} 
                      className="w-12 h-12 rounded-full object-cover" 
                    />
                    <div>
                      <div className="font-medium">{crypto.name}</div>
                      <div className="text-sm text-gray-500">{crypto.symbol}</div>
                    </div>
                  </div>
                  <div className="border-t p-4 flex items-center justify-between">
                    <div>
                      <div className="text-xl font-bold">${crypto.price}</div>
                      <div className={`text-sm ${crypto.positive ? 'text-green-600' : 'text-red-600'}`}>
                        {crypto.change} {crypto.positive ? <Icon name="TrendingUp" className="inline h-4 w-4" /> : <Icon name="TrendingDown" className="inline h-4 w-4" />}
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Icon name="LineChart" className="mr-1 h-4 w-4" />
                      Детали
                    </Button>
                  </div>
                </CardContent>
              </Card>
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

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы начать?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/80">
            Присоединяйтесь к тысячам пользователей, которые уже доверяют нашему кошельку для хранения и управления своими криптоактивами.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-indigo-700 hover:bg-gray-100 py-6 px-8">
              <Icon name="Download" className="mr-2 h-5 w-5" />
              Скачать приложение
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10 py-6 px-8">
              <Icon name="HelpCircle" className="mr-2 h-5 w-5" />
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-8 h-8 rounded-lg flex items-center justify-center">
                  <Icon name="Wallet" className="text-white h-5 w-5" />
                </div>
                <span className="font-bold text-xl">CryptoWallet</span>
              </div>
              <p className="text-gray-400 mb-4">
                Самый безопасный способ хранить и управлять вашими криптоактивами.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Icon name="Twitter" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Icon name="Instagram" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Icon name="Facebook" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Icon name="Github" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Компания</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">О нас</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Карьера</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Блог</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Пресса</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Поддержка</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Помощь</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Контакты</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Статус</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Документация</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Информация</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Условия использования</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Политика конфиденциальности</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Безопасность</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Правовая информация</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 CryptoWallet. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
