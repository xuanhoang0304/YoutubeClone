"use client";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
// AIzaSyAJtjylfB2RF7PESijZZ01VZtnl3rcdCpg
export default function HeaderSearch() {
  const [searchText, setSearchText] = useState<string>("");
  const searchParams = useSearchParams();
  const routerHistory = useRouter();
  const createQueryString = (name: string, value: string): string => {
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    return params.toString();
  };
  const handleChangeI = (e: any) => {
    setSearchText(e.target.value);
  };
  type OptionsYTB = {
    part : string,
    maxResults : number,
    key : string,
    chart : "mostPopular",
    regionCode : string
  }
  const options :OptionsYTB = {
    part : "contentDetails,snippet,statistics,liveStreamingDetails,id",
    maxResults : 20,
    key : "AIzaSyAJtjylfB2RF7PESijZZ01VZtnl3rcdCpg",
    chart : "mostPopular",
    regionCode : "VN"
  }
  const handleGetVideos = async() => {
    // routerHistory.push(
    //   `/videos?${createQueryString("query", searchText)}`
    // );

    // const res = await axios.get(`https://www.googleapis.com/youtube/v3/videos?key=${options.key}&part=${options.part}&chart=${options.chart}&regionCode=${options.regionCode}&maxResults=${options.maxResults}`)
    // console.log('res :>> ', res.data.items);

    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?key=AIzaSyAJtjylfB2RF7PESijZZ01VZtnl3rcdCpg&part=snippet&maxResults=20&id=UCovvTRDnB3XraOrB9jiSB3A`
    );
    const dt = await res.json();
    console.log('dt :>> ', dt);
  }
  return (
    <div className="bg-[#303030] border-[1px] border-[#303030] rounded-sm flex items-center">
      <input
        className="px-[7px] py-[7px] bg-[#121212] min-w-[363px] caret-white text-white "
        type="text"
        placeholder="Search a video..."
        value={searchText}
        onChange={handleChangeI}
      />
      <button
        className="flex items-center justify-center min-w-[64px] h-[38px]"
        onClick={handleGetVideos}
      >
        <svg
          width="50"
          height="36"
          viewBox="0 0 50 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-full object-cover"
        >
          <rect width="50" height="36" fill="#303030" />
          <path
            d="M33.87 26.17L28.28 20.58C29.35 19.35 30 17.75 30 16C30 12.13 26.87 9 23 9C19.13 9 16 12.13 16 16C16 19.87 19.13 23 23 23C24.75 23 26.35 22.35 27.58 21.29L33.17 26.88L33.87 26.17ZM23 22C19.69 22 17 19.31 17 16C17 12.69 19.69 10 23 10C26.31 10 29 12.69 29 16C29 19.31 26.31 22 23 22Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
}
