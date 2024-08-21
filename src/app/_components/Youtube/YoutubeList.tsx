
import React from "react";
import YoutubeItem from "./YoutubeItem";
import { OptionsYTB } from "@/app/common/types";
import axios from "axios";
const YoutubeList = async () => {
  const options: OptionsYTB = {
    part: "snippet",
    maxResults: 20,
    key: "AIzaSyAJtjylfB2RF7PESijZZ01VZtnl3rcdCpg",
    chart: "mostPopular",
    regionCode: "VN",
  };
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?key=${options.key}&part=${options.part}&chart=${options.chart}&regionCode=${options.regionCode}&maxResults=${options.maxResults}`
  );
  const data = await res.json();
 

  return (
    <div className="grid grid-cols-4 gap-x-4 gap-y-10">
      {data?.items?.length > 0 &&
        data.items.map((item) => (
          <YoutubeItem key={item.id} data={item}></YoutubeItem>
        ))}
    </div>
  );
};

export default YoutubeList;
