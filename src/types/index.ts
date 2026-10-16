export interface MenuItem {
  id: string;
  name: string;
  price: string;
  priceNum: number;
  category: 'asin' | 'manis';
  desc?: string;
  tag?: string;
  img?: string;
}

export interface Review {
  name: string;
  rating: number;
  quote: string;
  quoteEn?: string;
}

export interface FeatureItem {
  title: string;
  desc: string;
  iconName: 'Flame' | 'Compass' | 'ChefHat' | 'Clock' | 'HeartHandshake' | 'Wallet';
}
