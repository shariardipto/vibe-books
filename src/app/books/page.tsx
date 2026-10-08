import Image from "next/image";
import Link from "next/link";

type Book = {
  key: string;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  cover_i?: number;
  edition_count?: number;
};

const BooksPage = async () => {
  const res = await fetch(
    "https://openlibrary.org/search.json?q=book&limit=40",
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  const data = await res.json();

  const books: Book[] = data.docs || [];

  return (
    <main className="min-h-screen bg-stone-50">
      <section className="container mx-auto px-4 py-14 md:px-6 lg:px-8">

        {/* Page Heading */}
        <div className="mb-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Explore
          </p>

          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-stone-900 md:text-5xl">
                All Books
              </h1>

              <p className="mt-3 max-w-2xl text-stone-500">
                Discover books from different authors, genres, and publishing
                years.
              </p>
            </div>

            <p className="text-sm text-stone-500">
              Showing {books.length} books
            </p>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {books.map((book) => {
            const cover = book.cover_i
              ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
              : null;

            const bookId = book.key.split("/").pop();

            return (
              <article
                key={book.key}
                className="group overflow-hidden rounded-3xl border border-stone-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Cover */}
                <div className="flex h-80 items-center justify-center overflow-hidden bg-gradient-to-br from-stone-100 to-stone-200 p-7">
                  {cover ? (
                    <Image
                      src={cover}
                      alt={book.title}
                      width={220}
                      height={320}
                      className="h-full w-auto rounded-lg object-contain shadow-lg transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center rounded-xl bg-stone-200 text-sm text-stone-400">
                      No Cover Available
                    </div>
                  )}
                </div>

                {/* Information */}
                <div className="p-5">
                  <h2 className="line-clamp-2 min-h-14 text-lg font-bold leading-7 text-stone-900">
                    {book.title}
                  </h2>

                  <p className="mt-2 line-clamp-1 text-sm text-stone-500">
                    {book.author_name?.join(", ") || "Unknown Author"}
                  </p>

                  <div className="mt-4 flex items-center justify-between text-xs text-stone-400">
                    <span>
                      {book.first_publish_year
                        ? `Published ${book.first_publish_year}`
                        : "Year unknown"}
                    </span>

                    {book.edition_count && (
                      <span>{book.edition_count} editions</span>
                    )}
                  </div>

                  {/* Details Button */}
                  <Link
                    href={`/books/${bookId}`}
                    className="btn btn-neutral mt-5 w-full rounded-full"
                  >
                    View Details
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default BooksPage;