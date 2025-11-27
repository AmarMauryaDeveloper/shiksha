import React, { useState } from "react";
import { mainVideo as defaultMainVideo, nextVideos } from "../../data/data";

export default function VideoSection() {
  const [mainVideo, setMainVideo] = useState(defaultMainVideo);

  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold mb-8 leading-snug">
          Learn more about Colleges and Exams in these short Videos
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT — Main Video */}
          <div className="lg:col-span-2">
            <div className="relative w-full p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl bg-white shadow-md h-[220px] sm:h-[300px] md:h-[380px] lg:h-[430px] overflow-hidden">
              <iframe
                src={mainVideo.url}
                title={mainVideo.title}
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-lg"
              ></iframe>
            </div>

            {/* Video Title */}
            <h3 className="text-lg md:text-xl font-semibold mt-4">
              {mainVideo.title}
            </h3>

            {/* Meta Info */}
            <p className="text-gray-600 text-sm mt-1">
              {mainVideo.views} | {mainVideo.date} | {mainVideo.likes}
            </p>
          </div>

          {/* RIGHT — Next Videos */}
          <div className="border rounded-xl shadow-sm p-4 md:p-5 max-h-[550px] overflow-y-auto bg-white">
            <h4 className="font-semibold text-lg mb-4">Watch Next Videos</h4>

            <div className="space-y-4">
              {nextVideos.map((video, index) => (
                <div
                  key={index}
                  onClick={() => setMainVideo(video)}
                  className="flex gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition"
                >
                  <img
                    src={video.thumbnail}
                    alt="thumbnail"
                    className="w-28 h-16 object-cover rounded-md flex-shrink-0"
                  />

                  <div>
                    <p className="text-sm font-semibold leading-tight line-clamp-2">
                      {video.title}
                    </p>
                    <p className="text-[11px] text-gray-600 mt-1">
                      {video.views} | {video.date} | {video.likes}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
