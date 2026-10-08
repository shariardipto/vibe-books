import BooksGrid from "./BooksGrid";

type Book = {
  key: string;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  cover_i?: number;
};

const Books = async () => {
  const res = await fetch(
    "https://openlibrary.org/search.json?q=fiction&limit=15",
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch books: ${res.status}`);
  }

  const data = await res.json();

  const books: Book[] = data.docs || [];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-600">
            Discover
          </p>

          <h2 className="text-3xl font-bold text-stone-900 md:text-4xl">
            Popular Books
          </h2>

          <p className="mt-3 text-stone-500">
            Explore some amazing books from our collection.
          </p>
        </div>

        <BooksGrid books={books} />

      </div>
    </section>
  );
};

export default Books;