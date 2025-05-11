
import FeatureCard, { FeatureCardProps } from "./FeatureCard";

const features: FeatureCardProps[] = [
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
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Широкие возможности</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Наш кошелек предлагает множество функций, чтобы обеспечить безопасность и удобство использования ваших криптоактивов.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              title={feature.title} 
              description={feature.description} 
              icon={feature.icon} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
