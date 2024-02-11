const isWebPSupported = () => {
  const element = document.createElement('canvas');
  return element.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

import bigShoe1WEBP from './big-shoe1.webp';
import bigShoe1PNG from './big-shoe1.png';

import bigShoe2WEBP from './big-shoe2.webp';
import bigShoe2PNG from './big-shoe2.png';

import bigShoe3WEBP from './big-shoe3.webp';
import bigShoe3PNG from './big-shoe3.png';

import customer1WEBP from './customer1.webp';
import customer1PNG from './customer1.png';
import customer2 from './customer2.svg';

import footerLogo from './footer-logo.svg';
import headerLogo from './header-logo.svg';

import offer from './offer.svg';

import shoe4 from './shoe4.svg';
import shoe5 from './shoe5.svg';
import shoe6 from './shoe6.svg';
import shoe7 from './shoe7.svg';
import shoe8 from './shoe8.svg';

import thumbnailBackground from './thumbnail-background.svg';
import thumbnailShoe1 from './thumbnail-shoe1.svg';
import thumbnailShoe2 from './thumbnail-shoe2.svg';
import thumbnailShoe3 from './thumbnail-shoe3.svg';

const bigShoe1 = isWebPSupported() ? bigShoe1WEBP : bigShoe1PNG;
const bigShoe2 = isWebPSupported() ? bigShoe2WEBP : bigShoe2PNG;
const bigShoe3 = isWebPSupported() ? bigShoe3WEBP : bigShoe3PNG;
const customer1 = isWebPSupported() ? customer1WEBP : customer1PNG;

export {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  footerLogo,
  headerLogo,
  offer,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  shoe8,
  thumbnailBackground,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
};
