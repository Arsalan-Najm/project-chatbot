import { HomeData, SidebarLinks } from '@/utils/data';
import Link from 'next/link';
import { BiX } from 'react-icons/bi';
const Sidebar = ({ session, toggle, setToggle }) => {
  return (
    <>
      {/* desktop sidebar */}
      <div className='hidden lg:flex px-[40px] flex-row items-start bg-main-100'>
        <div className='sticky top-0 '>
          <aside className='w-[180px] mr-[20px] my-[40px]'>
            <nav>
              <div className='flex gap-3'>
                <Link href={HomeData.url} className=' text-2xl text-sub-200 font-semibold'>
                  {HomeData.name}
                </Link>
              </div>
              <div className='flex flex-col mt-6 gap-6'>
                {SidebarLinks.map((item) => (
                  <div>
                    <h3 className='text-2xl text-sub-200 font-semibold'>{item.name}</h3>
                    <div className='flex gap-3 flex-col  '>
                      {item.links.map((link) => (
                        <div className='flex gap-3 mt-4 items-center'>
                          <button className='text-main-200 w-8 h-8 rounded-lg bg-sub-200'>{link.icon}</button>
                          <Link href={'/'} className='text-lg text-sub-200 font-medium'>
                            {link.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </nav>
          </aside>
        </div>
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
                          <button className='text-main-200 w-6 h-6 md:w-8 md:h-8 rounded-lg bg-sub-200'>{link.icon}</button>
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
