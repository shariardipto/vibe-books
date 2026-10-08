import React from "react";
import Image from "next/image";
import bannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="container mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-stone-100 via-white to-stone-200 shadow-sm">
        <div className="grid items-center gap-10 px-6 py-10 md:px-10 md:py-14 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:py-16">
          
          <div className="space-y-6">
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              Discover your next read
            </span>

            <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-stone-900 md:text-5xl lg:text-6xl">
              Books to freshen up your bookshelf
            </h1>

            <p className="max-w-lg text-base leading-7 text-stone-600 md:text-lg">
              Explore handpicked books, discover new stories, and give your
              bookshelf a fresh new collection.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button className="btn btn-success rounded-full px-7">
                Explore Books
              </button>

              <button className="btn btn-ghost rounded-full px-7">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={bannerImg}
                alt="Books banner"
                priority
                className="h-[320px] w-full object-cover transition duration-500 hover:scale-105 md:h-[420px] lg:h-[500px]"
              />
            </div>

            <div className="absolute -bottom-4 -left-4 hidden rounded-2xl bg-white px-5 py-4 shadow-lg md:block">
              <p className="text-sm text-stone-500">Featured collection</p>
              <p className="font-semibold text-stone-900">
                100+ curated books
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;