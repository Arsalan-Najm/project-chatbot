import { HomeData, SidebarLinks } from '@/utils/data';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Sidebar = ({ session, toggle, setToggle }) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <>
      {/* desktop sidebar */}
      <div className='sticky top-0 bg-transparent  px-5 hidden lg:block'>
        <aside className='w-[200px] mt-10 mr-5'>
          <nav>
            <div>
              <Link
                href={HomeData.url}
                className={`flex gap-2 justify-start items-center mr-2 text-lg ${
                  pathname === HomeData.url ? 'text-white font-bold' : 'text-sub-200 font-normal'
                }`}
              >
                <span className='bg-main-200 flex items-center min-w-[32px] w-[32px] h-[32px] rounded-md object-cover'>
                  {HomeData.icon}
                </span>
                <span className='text-lg'>{HomeData.name}</span>
              </Link>
            </div>
            <div className='h-4'></div>
            <div>
              {SidebarLinks.map((link) => (
                <>
                  <span className='block text-3xl mb-4 font-bold text-sub-100'>{link.name}</span>
                  <ul className='p-0 mb-6'>
                    {link.links.map((item) => (
                      <li className='mb-2'>
                        <Link
                          href='/'
                          className='flex gap-2 justify-start items-center mr-2 text-lg text-sub-200 font-normal'
                        >
                          <span className='bg-main-200 flex items-center min-w-[32px] w-[32px] h-[32px] rounded-md object-cover'>
                            {item.icon}
                          </span>
                          <span className='text-lg text-sub-200 font-normal'>{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ))}
            </div>
          </nav>
        </aside>
      </div>

      {/* mobile sidebar */}
      {toggle && (
        <aside className='lg:hidden max-w-[1280px]'>
          <nav className='fixed top-0 left-0 right-0 bottom-0 z-50 w-full h-full p-6 bg-main-200 overflow-auto'>
            <div className='flex flex-col gap-6'>
              <div className='flex gap-3 justify-between'>
                <h2 className='text-lg md:text-2xl font-bold text-sub-100'>Welcome! {session?.user?.name}</h2>
                <button className='px-2 py-px rounded-full text-sub-100 bg-main-100 text-sm drop-shadow-sm font-medium hover:bg-opacity-50'>
                  Sign Out
                </button>
              </div>
              <div className='gap-3 grid grid-cols-2'>
                {SidebarLinks.map((item) => (
                  <div className='flex flex-col mt-5'>
                    <h3 className='text-lg md:text-2xl text-sub-200 font-semibold'>{item.name}</h3>
                    <div className='flex flex-col gap-3'>
                      {item.links.map((link) => (
                        <div className='flex gap-2'>
                          <button className='text-main-200 w-6 h-6 md:w-8 md:h-8 rounded-lg bg-sub-200'>
                            {link.icon}
                          </button>
                          <Link href={'/'} className='text-sm md:text-lg text-sub-200 font-medium'>
                            {link.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </nav>
          <div className='fixed right-4 bottom-3 z-50' onClick={() => setToggle(!toggle)}>
            <button className='p-4 rounded-full bg-sub-100 text-main-200'>
              <BiX className='scale-[2]' />
            </button>
          </div>
        </aside>
      )}
    </>
  );
};

export default Sidebar;
