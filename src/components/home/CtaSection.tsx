
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CtaSection = () => {
  return (
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
  );
};

export default CtaSection;
