
import Icon from "@/components/ui/icon";

const FooterLinkColumn = ({ title, links }: { title: string, links: { label: string, url: string }[] }) => (
  <div>
    <h3 className="font-semibold text-lg mb-4">{title}</h3>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.url} className="text-gray-400 hover:text-white">{link.label}</a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const footerColumns = [
    {
      title: "Компания",
      links: [
        { label: "О нас", url: "#" },
        { label: "Карьера", url: "#" },
        { label: "Блог", url: "#" },
        { label: "Пресса", url: "#" }
      ]
    },
    {
      title: "Поддержка",
      links: [
        { label: "Помощь", url: "#" },
        { label: "Контакты", url: "#" },
        { label: "Статус", url: "#" },
        { label: "Документация", url: "#" }
      ]
    },
    {
      title: "Информация",
      links: [
        { label: "Условия использования", url: "#" },
        { label: "Политика конфиденциальности", url: "#" },
        { label: "Безопасность", url: "#" },
        { label: "Правовая информация", url: "#" }
      ]
    }
  ];

  const socialIcons = [
    { name: "Twitter", url: "#" },
    { name: "Instagram", url: "#" },
    { name: "Facebook", url: "#" },
    { name: "Github", url: "#" }
  ];

  return (
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
              {socialIcons.map((social, index) => (
                <a key={index} href={social.url} className="text-gray-400 hover:text-white">
                  <Icon name={social.name} />
                </a>
              ))}
            </div>
          </div>
          
          {footerColumns.map((column, index) => (
            <FooterLinkColumn 
              key={index} 
              title={column.title} 
              links={column.links} 
            />
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2025 CryptoWallet. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
