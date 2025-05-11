
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export interface CryptoCardProps {
  name: string;
  symbol: string;
  price: string;
  change: string;
  icon: string;
  positive: boolean;
}

const CryptoCard = ({ name, symbol, price, change, icon, positive }: CryptoCardProps) => {
  return (
    <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="flex items-center gap-4 p-4">
          <img 
            src={icon} 
            alt={name} 
            className="w-12 h-12 rounded-full object-cover" 
          />
          <div>
            <div className="font-medium">{name}</div>
            <div className="text-sm text-gray-500">{symbol}</div>
          </div>
        </div>
        <div className="border-t p-4 flex items-center justify-between">
          <div>
            <div className="text-xl font-bold">${price}</div>
            <div className={`text-sm ${positive ? 'text-green-600' : 'text-red-600'}`}>
              {change} {positive ? <Icon name="TrendingUp" className="inline h-4 w-4" /> : <Icon name="TrendingDown" className="inline h-4 w-4" />}
            </div>
          </div>
          <Button variant="outline" size="sm">
            <Icon name="LineChart" className="mr-1 h-4 w-4" />
            Детали
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CryptoCard;
