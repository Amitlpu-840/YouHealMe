// import icons
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';

// import images
import AboutImg from '../src/assets/img/about.jpg';
import Feature1Img from '../src/assets/img/features/feature1.jpg';
import Feature2Img from '../src/assets/img/features/feature2.jpg';
import Feature3Img from '../src/assets/img/features/feature3.jpg';
import Feature4Img from '../src/assets/img/features/feature4.jpg';
import Avatar1Img from '../src/assets/img/testimonials/avatar1.png';
import Avatar2Img from '../src/assets/img/testimonials/avatar2.png';
import Avatar3Img from '../src/assets/img/testimonials/avatar3.png';
import LogoV2 from '../src/assets/img/logo-v2.png';
import HeroImage from '../src/assets/img/features/newHer.png';
import Feature1BgImg from '../src/assets/img/features/feature1_bg.png';
import Feature2BgImg from '../src/assets/img/features/feature2_bg.png';
import Feature3BgImg from '../src/assets/img/features/feature3_bg.png';
import Feature4BgImg from '../src/assets/img/features/feature4_bg.png';

export const navigationData = [
  {
    name: 'Relax with music',
    href: '#',
  },
  {
    name: 'Books',
    href: '#',
  },
  {
    name: 'Community',
    href: '#',
  },
  {
    name: 'Connect',
    href: '#',
  },
];

export const heroData = {
  title: `Relax and let go of stress - it's time to recharge!`,
  subtitle:
    'Refresh your mind, body, and soul - with our services enjoy one moment of relaxation at a time.',
  btnText: 'Get Started',
  image: HeroImage,
};

export const aboutData = {
  image: AboutImg,
  title: 'Find Out A Little More About Us',
  subtitle:
    'We are a company dedicated to the distribution of products by delivery to your home or to the place where you are, with the best quality of delivery.',
};

export const featuresData = {
  title: 'Some Services We Offer',
  subtitle:
    'With our app you can view the route of your order, from our local headquarters to the place where you are. Look for the app now!',
  list: [
    {
      image: Feature1Img,
      bgImage: Feature1BgImg,
      title: 'Calm Music & Sounds',
      description:
        'Relax and unwind with our soothing sounds.',
      linkText: 'Learn more',
      delay: '400',
    },
    {
      image: Feature2Img,
      bgImage: Feature2BgImg,
      title: 'Chat Anonymously with Strangers',
      description:
        'Connect with the world, without revealing yourself',
      linkText: 'Learn more',
      delay: '700',
    },
    {
      image: Feature3Img,
      bgImage: Feature3BgImg,
      title: 'Become Part of Communities',
      description:
        'Connect with Like-minded People and Explore Shared Interests through Joining Communities.',
      linkText: 'Learn more',
      delay: '1000',
    },
    {
      image: Feature4Img,
      bgImage: Feature4BgImg,
      title: 'Unleashing the Power of Fun',
      description:
        'Discover the Joy of Life with Fun Activities to Boost Your Mood and Enhance Well-being!',
      linkText: 'Learn more',
      delay: '1300',
    },
  ],
};

export const testimonialsData = [
  {
    image: Avatar1Img,
    name: 'Serena',
    web: 'rena.com',
    message:
      'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '300',
  },
  {
    image: Avatar2Img,
    name: 'Natalia',
    web: 'nataliya.com',
    message:
      'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '600',
  },
  {
    image: Avatar3Img,
    name: 'Vebin',
    web: 'vebin.com',
    message:
      'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '900',
  },
];

export const ctaData = {
  title: 'Contact Us From Here',
  subtitle: 'Get limited 1 week free try our features!',
  btnText1: 'Learn more',
  btnText2: 'Request Demo',
};

export const footerData = {
  logo: LogoV2,
  address: 'EliteHackers',
  email: 'thisisag840@gmail.com',
  phone: '( call us )',
  list1: [
    {
      name: 'Profile',
      href: '#',
    },
    {
      name: 'Features',
      href: '#',
    },
    {
      name: 'Careers',
      href: '#',
    },
    {
      name: 'DW News',
      href: '#',
    },
  ],
  list2: [
    {
      name: 'Support',
      href: '#',
    },
    {
      name: 'Sign Up',
      href: '#',
    },
    {
      name: 'Guide',
      href: '#',
    },
    {
      name: 'Reports',
      href: '#',
    },
    {
      name: 'Q & A',
      href: '#',
    },
  ],
  socialList: [
    {
      icon: <FaYoutube />,
      href: '#',
    },
    {
      icon: <FaInstagram />,
      href: '#',
    },
    {
      icon: <FaGithub />,
      href: '#',
    },
  ],
};

export const copyrightData = {
  text: '© ElitHackers, 2023. All rights reserved.',
  icon: <BsChatDotsFill />,
};
