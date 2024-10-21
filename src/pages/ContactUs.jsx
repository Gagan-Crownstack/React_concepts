import React, { useEffect, useMemo, useRef, useCallback } from "react";
import { useInfiniteQuery } from "react-query";

const colorData = [
  "bg-amber-400",
  "bg-blue-600",
  "bg-rose-400",
  "bg-violet-500",
  "bg-green-600",
  "bg-teal-500",
];

const ContactUs = () => {
  const observer = useRef();

  const fetchPhoto = async (pageParam = 1) => {
    const response = await fetch(
      `https://api.unsplash.com/photos/?client_id=nxqsfFYnW7Kmx88PonlFI9AQCUpeHyVyzPrb85RlK-Q&page=${pageParam}&per_page=10`
    );
    const photos = await response.json();
    return photos;
  };

  const { data, error, fetchNextPage, hasNextPage, isFetching, isLoading } =
    useInfiniteQuery({
      queryKey: ["photos"],
      queryFn: ({ pageParam = 1 }) => fetchPhoto(pageParam), // Pass pageParam directly
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length ? allPages.length + 1 : undefined;
      },
    });

  const lastElementRef = useCallback(
    (node) => {
      if (isLoading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetching) {
          fetchNextPage();
        }
      });

      if (node) observer.current.observe(node);
    },
    [fetchNextPage, hasNextPage, isFetching, isLoading]
  );

  const photos = useMemo(() => {
    return data?.pages.reduce((acc, page) => {
      return [...acc, ...page];
    }, []);
  }, [data]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row-dense-dense gap-4 mt-4">
      {photos &&
        photos.map((photo, index) => (
          <div
            className={` h-min col-span-1 p-4 rounded-xl ${
              colorData[index % 6]
            }`}
            key={index}
            ref={lastElementRef}
          >
            <img src={photo.urls.small} alt="" className="w-full h-auto" />
          </div>
        ))}
    </div>
  );
};

export default ContactUs;
