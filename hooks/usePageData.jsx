import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useApp } from '@/context/AppContext';

const usePageData = () => {
  const { data, setData, page, setPage, loading, setLoading, setTotalPages } = useApp();
  const path = usePathname();

  useEffect(() => {
    const fetchPageData = async () => {
      setLoading(true);

      let apiUrl = '';

      if (path === '/games') {
        apiUrl = `/api/games?page=${page}`;
      } else if (path === '/games/last-30-days') {
        apiUrl = `/api/games/last-30days?page=${page}`;
      } else if (path === '/games/this-week') {
        apiUrl = `/api/games/this-week?page=${page}`;
      } else if (path === '/games/next-week') {
        apiUrl = `/api/games/next-week?page=${page}`;
      } else if (path === '/games/best-of-the-year') {
        apiUrl = `/api/games/best-of-the-year?page=${page}`;
      } else if (path === '/games/popular-in-2022') {
        apiUrl = `/api/games/top-2022?page=${page}`;
      } else if (path === '/games/all-time-top') {
        apiUrl = `/api/games/top-100?page=${page}`;
      }

      const response = await fetch(apiUrl);
      const data = await response.json();
      const mappedData = data.results.map((item) => ({
        ...item,
        isFavorite: false,
        expand: false,
        isAdded: false,
      }));
      setData(mappedData);
      setTotalPages(Math.ceil(data.count / 20));
      setLoading(false);
    };

    setData([]);
    fetchPageData();
  }, [path, page]);

  useEffect(() => {
    setPage(1);
  }, [path]);

  const handleLoadMore = (selectedPage) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setPage(selectedPage.selected + 1);
  };

  return { data, loading, handleLoadMore };
};

export default usePageData;
