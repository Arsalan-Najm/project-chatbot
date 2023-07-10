import {
  BsStarFill,
  BsFire,
  BsSkipForwardFill,
  BsTrophyFill,
  BsBarChartLineFill,
  BsCodeSlash,
  BsNintendoSwitch,
  BsAndroid2,
} from 'react-icons/bs';
import {
  FaCrown,
  FaGamepad,
  FaDownload,
  FaFolderOpen,
  FaGhost,
  FaHashtag,
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaHome,
} from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
export const HomeData = {
  name: 'Home',
  url: '/games',
  icon: <FaHome className='m-auto scale-[1.3]' />,
};

export const SidebarLinks = [
  {
    name: 'New Releases',
    links: [
      {
        name: 'Last 30 days',
        url: '/games/last-30-days',
        icon: <BsStarFill className='m-auto scale-[1.3]' />,
      },
      {
        name: 'This week',
        url: '/games/this-week',
        icon: <BsFire className='m-auto scale-[1.3]' />,
      },
      {
        name: 'Next week',
        url: '/games/next-week',
        icon: <BsSkipForwardFill className='m-auto scale-[1.3]' />,
      },
    ],
  },
  {
    name: 'Top',
    links: [
      {
        name: 'Best of the year',
        url: '/games/best-of-the-year',
        icon: <BsTrophyFill className='m-auto scale-[1.3]' />,
      },
      {
        name: 'Popular in 2022',
        url: '/games/popular-in-2022',
        icon: <BsBarChartLineFill className='m-auto scale-[1.3]' />,
      },
      {
        name: 'All time top 100',
        url: '/games/all-time-top',
        icon: <FaCrown className='m-auto scale-[1.3]' />,
      },
    ],
  },
  {
    name: 'Browse',
    links: [
      {
        name: 'Platforms',
        url: '/platforms',
        icon: <FaGamepad className='m-auto scale-[1.3]' />,
      },
      {
        name: 'Stores',
        url: '/stores',
        icon: <FaDownload className='m-auto scale-[1.3]' />,
      },
      {
        name: 'Genres',
        url: '/genres',
        icon: <FaGhost className='m-auto scale-[1.3]' />,
      },
      {
        name: 'Creators',
        url: '/creators',
        icon: <FiUser className='m-auto scale-[1.3]' />,
      },
      {
        name: 'Tags',
        url: '/tags',
        icon: <FaHashtag className='m-auto scale-[1.3]' />,
      },
      {
        name: 'Developers',
        url: '/developers',
        icon: <BsCodeSlash className='m-auto scale-[1.3]' />,
      },
      {
        name: 'Publishers',
        url: '/publishers',
        icon: <FaFolderOpen className='m-auto scale-[1.3]' />,
      },
    ],
  },
  {
    name: 'Platforms',
    links: [
      {
        name: 'PC',
        url: '/games/pc',
        icon: <FaWindows className='m-auto scale-[1.3]' />,
      },
      {
        name: 'PlayStation',
        url: '/games/playstation',
        icon: <FaPlaystation className='m-auto scale-[1.3]' />,
      },
      {
        name: 'Xbox',
        url: '/games/lxbox',
        icon: <FaXbox className='m-auto scale-[1.3]' />,
      },
      {
        name: 'Nintendo Switch',
        url: '/games/nintendo-switch',
        icon: <BsNintendoSwitch className='m-auto scale-[1.3]' />,
      },
      {
        name: 'IOS',
        url: '/games/ios',
        icon: <FaApple className='m-auto scale-[1.3]' />,
      },
      {
        name: 'Android',
        url: '/games/android',
        icon: <BsAndroid2 className='m-auto scale-[1.3]' />,
      },
    ],
  },
];
