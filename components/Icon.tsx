import ArrowRight from 'public/icons/arrow-right.svg';
import ArrowLeft from 'public/icons/arrow-left.svg';
import Home from 'public/icons/home.svg';
import Search from 'public/icons/search.svg';
import Hosting from 'public/icons/hosting.svg';
import Product from 'public/icons/product.svg';
import React from 'react';

export type IconName = 
  'arrow-right' | 
  'arrow-left' | 
  'home' | 
  'search' | 
  'hosting' | 
  'product';

export type IconSize = 'small' | 'medium' | 'large';

export interface IconProps {
  name: IconName;
  focused?: boolean;
  size?: IconSize;
}

const Icon: React.FC<IconProps> = ({ name, focused, size = 'small' }) => {
  const iconMap = {
    'arrow-right': ArrowRight,
    'arrow-left': ArrowLeft,
    home: Home,
    search: Search,
    hosting: Hosting,
    product: Product,
  };

  const sizeMap = {
    small: 'w-6 h-6',
    medium: 'w-8 h-8',
    large: 'w-10 h-10',
  };

  const IconComponent = iconMap[name];

  return (
    <IconComponent
      className={`fill-current text-gray-400 ${sizeMap[size]} ${focused ? 'text-primary-700' : ''}`}
    />
  );
};

export default Icon;

