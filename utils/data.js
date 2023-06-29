import {
  BsBoxArrowRight,
  BsStarFill,
  BsFire,
  BsSkipForwardFill,
  BsCalendarDate,
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
} from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
export const HomeData = {
  name: 'Home',
  url: '/',
  icon: <BsBoxArrowRight className='m-auto scale-[1.3]' />,
};

export const SidebarLinks = [
  {
    name: 'New Releases',
    links: [
      {
        name: 'Last 30 days',
        icon: <BsStarFill className='m-auto scale-[1.3]' />,
      },
      {
        name: 'This week',
        icon: <BsFire className='m-auto scale-[1.3]' />,
      },
      {
        name: 'Next week',
        icon: <BsSkipForwardFill className='m-auto scale-[1.3]' />,
      },
      {
        name: 'Release calendar',
        icon: <BsCalendarDate className='m-auto scale-[1.3]' />,
      },
    ],
  },
  {
    name: 'Top',
    links: [
      {
        name: 'Best of the year',
        icon: <BsTrophyFill className='m-auto scale-[1.3]' />,
      },
      {
        name: 'Popular in 2022',
        icon: <BsBarChartLineFill className='m-auto scale-[1.3]' />,
      },
      {
        name: 'All time top 50',
        icon: <FaCrown className='m-auto scale-[1.3]' />,
      },
    ],
  },
  {
    name: 'Browse',
    links: [
      {
        name: 'Platforms',
        icon: <FaGamepad className='m-auto scale-[1.3]' />,
      },
      {
        name: 'Stores',
        icon: <FaDownload className='m-auto scale-[1.3]' />,
      },
      {
        name: 'Genres',
        icon: <FaGhost className='m-auto scale-[1.3]' />,
      },
      {
        name: 'Creators',
        icon: <FiUser className='m-auto scale-[1.3]' />,
      },
      {
        name: 'Tags',
        icon: <FaHashtag className='m-auto scale-[1.3]' />,
      },
      {
        name: 'Developers',
        icon: <BsCodeSlash className='m-auto scale-[1.3]' />,
      },
      {
        name: 'Publishers',
        icon: <FaFolderOpen className='m-auto scale-[1.3]' />,
      },
    ],
  },
  {
    name: 'Platforms',
    links: [
      {
        name: 'PC',
        icon: <FaWindows className='m-auto scale-[1.3]' />,
      },
      {
        name: 'PlayStation',
        icon: <FaPlaystation className='m-auto scale-[1.3]' />,
      },
      {
        name: 'Xbox',
        icon: <FaXbox className='m-auto scale-[1.3]' />,
      },
      {
        name: 'Nintendo Switch',
        icon: <BsNintendoSwitch className='m-auto scale-[1.3]' />,
      },
      {
        name: 'IOS',
        icon: <FaApple className='m-auto scale-[1.3]' />,
      },
      {
        name: 'Android',
        icon: <BsAndroid2 className='m-auto scale-[1.3]' />,
      },
    ],
  },
];
