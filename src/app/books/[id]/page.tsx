import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type BookDetails = {
  key: string;
  title: string;

  description?:
    | string
    | {
        type?: string;
        value: string;
      };

  covers?: number[];

  subjects?: string[];

  first_publish_date?: string;

  authors?: {
    author: {
      key: string;
    };
    type?: {
      key: string;
    };
  }[];
};

type Author = {
  name: string;
};

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

const BookDetailsPage = async ({ params }: PageProps) => {
  const { id } = await params;

  // Fetch book details
  const res = await fetch(
    `https://openlibrary.org/works/${id}.json`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!res.ok) {
    notFound();
  }

  const book: BookDetails = await res.json();

  // Fetch author names
  let authors: string[] = [];

  if (book.authors?.length) {
    authors = await Promise.all(
      book.authors.slice(0, 3).map(async (item) => {
        try {
          const authorRes = await fetch(
            `https://openlibrary.org${item.author.key}.json`,
            {
              next: {
                revalidate: 3600,
              },
            }
          );

          if (!authorRes.ok) {
            return "Unknown Author";
          }

          const author: Author = await authorRes.json();

          return author.name;
        } catch {
          return "Unknown Author";
        }
      })
    );
  }

  // Book cover
  const coverId = book.covers?.[0];

  const cover = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
    : null;

  // Description
  const description =
    typeof book.description === "string"
      ? book.description
      : book.description?.value ||
        "No description is available for this book.";

  return (
    <main className="min-h-screen bg-stone-50">
      <section className="container mx-auto px-4 py-12 md:px-6 lg:px-8 lg:py-16">

        {/* Back Button */}
        <Link
          href="/books"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-stone-500 transition hover:text-stone-900"
        >
          <span>←</span>
          Back to Books
        </Link>

        {/* Book Details */}
        <div className="grid gap-10 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm md:p-10 lg:grid-cols-[380px_1fr] lg:gap-14">

          {/* LEFT - COVER */}
          <div className="flex items-start justify-center">
            <div className="flex w-full max-w-sm items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-stone-100 to-stone-200 p-8">

              {cover ? (
                <Image
                  src={cover}
                  alt={book.title}
                  width={320}
                  height={480}
                  priority
                  className="max-h-[500px] w-auto rounded-xl object-contain shadow-2xl"
                />
              ) : (
                <div className="flex h-[450px] w-full items-center justify-center rounded-2xl bg-stone-200 text-stone-400">
                  No Cover Available
                </div>
              )}

            </div>
          </div>

          {/* RIGHT - INFO */}
          <div className="flex flex-col justify-center">

            {/* Label */}
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Book Details
            </p>

            {/* Title */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-stone-900 md:text-5xl">
              {book.title}
            </h1>

            {/* Author */}
            <p className="mt-4 text-lg text-stone-500">
              by{" "}
              <span className="font-semibold text-stone-800">
                {authors.length > 0
                  ? authors.join(", ")
                  : "Unknown Author"}
              </span>
            </p>

            {/* Meta */}
            <div className="mt-6 flex flex-wrap gap-3">

              {book.first_publish_date && (
                <span className="rounded-full bg-stone-100 px-4 py-2 text-sm font-medium text-stone-600">
                  Published {book.first_publish_date}
                </span>
              )}

              {book.subjects?.length && (
                <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                  {book.subjects.length} subjects
                </span>
              )}

            </div>

            {/* Divider */}
            <div className="my-8 border-t border-stone-200" />

            {/* Description */}
            <div>
              <h2 className="mb-3 text-xl font-bold text-stone-900">
                About this book
              </h2>

              <p className="max-w-3xl whitespace-pre-line leading-8 text-stone-600">
                {description}
              </p>
            </div>

            {/* Subjects */}
            {book.subjects && book.subjects.length > 0 && (
              <div className="mt-8">

                <h2 className="mb-4 text-xl font-bold text-stone-900">
                  Categories
                </h2>

                <div className="flex flex-wrap gap-2">
                  {book.subjects.slice(0, 10).map((subject) => (
                    <span
                      key={subject}
                      className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm text-stone-600"
                    >
                      {subject}
                    </span>
                  ))}
                </div>

              </div>
            )}

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-3">

              <Link
                href="/books"
                className="btn btn-neutral rounded-full px-8"
              >
                Browse More Books
              </Link>

              <a
                href={`https://openlibrary.org/works/${id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline rounded-full px-8"
              >
                View on Open Library
              </a>

            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default BookDetailsPage;