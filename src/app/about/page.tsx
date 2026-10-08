import React from "react";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-stone-50">
      <section className="container mx-auto px-4 py-16 md:px-6 lg:px-8 lg:py-20">

        {/* Hero */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            About Vibe Book
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-stone-900 md:text-5xl lg:text-6xl">
            Discover books that match your vibe
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-stone-600 md:text-lg">
            Vibe Book is a simple and modern platform designed to help readers
            discover books, explore authors, and find their next great read.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {/* Mission */}
          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm md:p-10">
            <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-xl">
              📚
            </span>

            <h2 className="text-2xl font-bold text-stone-900">
              Our Mission
            </h2>

            <p className="mt-4 leading-8 text-stone-600">
              Our mission is to make book discovery simple, enjoyable, and
              accessible. Whether you love fiction, history, science,
              technology, or timeless classics, Vibe Book helps you explore
              books in one clean and organized place.
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm md:p-10">
            <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-100 text-xl">
              ✨
            </span>

            <h2 className="text-2xl font-bold text-stone-900">
              Our Vision
            </h2>

            <p className="mt-4 leading-8 text-stone-600">
              We want to create a reading experience where users can quickly
              browse books, learn about authors, view book details, and
              discover new titles without unnecessary complexity.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              What We Offer
            </p>

            <h2 className="text-3xl font-bold text-stone-900 md:text-4xl">
              Everything you need to explore books
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-stone-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 text-3xl">🔍</div>

              <h3 className="text-xl font-bold text-stone-900">
                Discover Books
              </h3>

              <p className="mt-3 leading-7 text-stone-600">
                Browse a wide collection of books from different genres,
                authors, and publication years.
              </p>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 text-3xl">📖</div>

              <h3 className="text-xl font-bold text-stone-900">
                Book Details
              </h3>

              <p className="mt-3 leading-7 text-stone-600">
                View book covers, authors, descriptions, categories, and other
                useful information.
              </p>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 text-3xl">🌍</div>

              <h3 className="text-xl font-bold text-stone-900">
                Open Library Data
              </h3>

              <p className="mt-3 leading-7 text-stone-600">
                Book information is powered by Open Library, giving access to a
                large public collection of book data.
              </p>
            </div>

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 overflow-hidden rounded-3xl bg-stone-950 px-6 py-12 text-center text-white md:px-10 md:py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Start Exploring
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Your next favorite book might be one click away
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-stone-400">
            Browse our collection and discover stories, ideas, and knowledge
            that inspire you.
          </p>

          <a
            href="/books"
            className="btn mt-7 rounded-full border-0 bg-white px-8 text-stone-900 hover:bg-stone-200"
          >
            Browse Books
          </a>
        </div>

      </section>
    </main>
  );
};

export default AboutPage;