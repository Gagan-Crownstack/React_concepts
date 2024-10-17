import React, { useEffect, useMemo, useRef } from "react";
import { InfiniteQueryObserver } from "react-query";

// component for Infinite scroll

const ContactUs = () => {
  const fetchPhoto = async (pageParams = 1) => {
    const response = await fetch(
      `https://api.unsplash.com/photos/?client_id=nxqsfFYnW7Kmx88PonlFI9AQCUpeHyVyzPrb85RlK-Q&page=${pageParams}&per_page=10`
    );
    const photos = await response.json();
    return photos;
  };

  const { data, error, fetchNextPage, hasNextPage, isFetching, isLoading } =
    useInfiniteQuery({
      queryKey: ["photos"],
      queryFn: ({ pageParam }) => fetchPhoto({ pageParam }),
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length ? allPages.length + 1 : undefined;
      },
    });

  useEffect(() => {
    fetchPhoto();
  }, []);

  return <div></div>;
};

export default ContactUs;
