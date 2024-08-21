
import React  from "react";
import Image from "next/image";
import { getPublishedAtVideo } from "@/app/common/func";

 const getChannel = async (channelId) => {
   return fetch(
      `https://www.googleapis.com/youtube/v3/channels?key=AIzaSyAJtjylfB2RF7PESijZZ01VZtnl3rcdCpg&part=snippet&maxResults=20&id=${channelId}`
    );
  };

const YoutubeItem = async ({ data }) => {
 
  const ch = await getChannel(data.snippet.channelId)
  const d = ch.json()
  console.log('ch :>> ', {ch});
  return (
    <div>hello
      {/* <div className="w-full h-[155px]">
        {true ? (
          <Image
            width={500}
            height={500}
            // onMouseEnter={() => {
            //   setTimeout(() => {
            //     setPlayVideo(true);
            //   }, 500);
            // }}
            alt="iamge"
            className="size-full object-cover"
            quality={100}
            src={
              data?.snippet?.thumbnails?.maxres?.url ||
              data?.snippet?.thumbnails?.high?.url
            }
          ></Image>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${data.id}?autoplay=1&mute=1`}
            width="100%"
            height="486"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // onMouseLeave={() => setPlayVideo(false)}
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="object-cover h-full mx-auto"
          ></iframe>
        )}
      </div>

      <div className="mt-3 mr-6 flex gap-x-3">
        <figure className="size-9 rounded-full shrink-0">
          <Image
            width={100}
            height={100}
            alt="iamge"
            className="size-full object-cover rounded-full"
            quality={100}
            src="https://images.unsplash.com/photo-1723894960978-3f1e1cead774?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
          ></Image>
        </figure>
        <div>
          <h3 className="line-clamp-2  text-white font-[700] text-[12px]">
            {data?.snippet?.title}
          </h3>
          <p className="mt-2 text-[12px] text-[#AAA]">
            {data?.snippet?.channelTitle}
          </p>
          <p className="mt-1 text-[12px] text-[#AAA]">
            {getPublishedAtVideo(data?.snippet?.publishedAt)}
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default YoutubeItem;
