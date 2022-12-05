import ArrowRight from 'public/icons/arrow-right.svg';
import ArrowLeft from 'public/icons/arrow-left.svg';
import Home from 'public/icons/home.svg';
import Search from 'public/icons/search.svg';
import Product from 'public/icons/product.svg';
import Support from 'public/icons/support.svg';
import ChevronUp from 'public/icons/chevron-up.svg';
import ChevronDown from 'public/icons/chevron-down.svg';
import React from 'react';

export type IconName = 
  'arrow-right' | 
  'arrow-left' | 
  'home' | 
  'search' | 
  'support' |
  'chevron-up' |
  'chevron-down' |
  'product';

export type IconSize = 'small' | 'medium' | 'large';

export type IconColor = 'default' | 'black' | 'white';

export interface IconProps {
  name: IconName;
  focused?: boolean;
  color?: IconColor;
  size?: IconSize;
}

const Icon: React.FC<IconProps> = ({ name, focused, size = 'small', color = 'default' }) => {
  const iconMap = {
    'arrow-right': ArrowRight,
    'arrow-left': ArrowLeft,
    home: Home,
    search: Search,
    product: Product,
    support: Support,
    'chevron-up': ChevronUp,
    'chevron-down': ChevronDown,
  };

  const colorMap = {
    default: 'fill-gray-400',
    black: 'fill-black',
    white: 'fill-white',
  };

  const sizeMap = {
    small: 'w-6 h-6',
    medium: 'w-8 h-8',
    large: 'w-10 h-10',
  };

  const IconComponent = iconMap[name];

  return (
    <IconComponent
      className={`${colorMap} ${sizeMap[size]} ${focused ? 'fill-primary-700' : ''}`}
    />
  );
};

export default Icon;

