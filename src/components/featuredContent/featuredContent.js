import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const FeaturedContent = () => {
  return (
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-left text-primary">Featured Content</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

        <div class="featured-content-card overflow-hidden">
          <div class="relative p-4 text-right">
            <p class="text-gray-600 leading-relaxed">
              <b className="text-primary">QuitYourAddiction</b>, a personal blog
              dedicated to helping individuals break free from the grips of
              addiction and embrace a happier life. This section will introduce
              you to the core idea behind this approach. To get started, it's
              important to understand the concept by taking the time to watch
              the following videos and think about the ideas presented.
            </p>
          </div>
        </div>

        <div class=" rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform duration-300 ease-in-out">
          <div class="relative">
            <Link to="#">
              <StaticImage
                src="../../images/featured_tedx_talk.jpg"
                alt="Featured Image 2"
                class="w-full h-64 object-cover"
              />
            </Link>
            <div class="inset-0 flex flex-col justify-center items-center text-center opacity-0 hover:opacity-90 transition-opacity duration-300 ease-in-out absolute  p-6 bg-primary">
              <h3 class="text-xl font-semibold text-white mb-2">
                Featured Content Title
              </h3>
              <p class="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <div class=" rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform duration-300 ease-in-out">
          <div class="relative">
            <Link to="#">
              <StaticImage
                src="../../images/featured_youtube_interview.jpg"
                alt="Featured Image 2"
                class="w-full h-64 object-cover"
              />
            </Link>
            <div class="inset-0 flex flex-col justify-center items-center text-center opacity-0 hover:opacity-90 transition-opacity duration-300 ease-in-out absolute  p-6 bg-primary">
              <h3 class="text-xl font-semibold text-white mb-2">
                Featured Content Title
              </h3>
              <p class="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <div class=" rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform duration-300 ease-in-out">
          <div class="relative">
            <Link to="#">
              <StaticImage
                src="../../images/featured_spotify_podcast.jpg"
                alt="Featured Image 2"
                class="w-full h-64 object-cover"
              />
            </Link>
            <div class="inset-0 flex flex-col justify-center items-center text-center opacity-0 hover:opacity-90 transition-opacity duration-300 ease-in-out absolute  p-6 bg-primary">
              <h3 class="text-xl font-semibold text-white mb-2">
                Featured Content Title
              </h3>
              <p class="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedContent;
