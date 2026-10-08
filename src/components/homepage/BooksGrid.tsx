"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Book = {
  key: string;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  cover_i?: number;
};

type BooksGridProps = {
  books: Book[];
};

const BooksGrid = ({ books }: BooksGridProps) => {
  const [visibleBooks, setVisibleBooks] = useState(6);

  const handleShowMore = () => {
    setVisibleBooks((prev) => prev + 3);
  };

  return (
    <>
      {/* Books Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {books.slice(0, visibleBooks).map((book) => {
          const image = book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
            : null;

          const bookId = book.key.split("/").pop();

          return (
            <div
              key={book.key}
              className="group overflow-hidden rounded-3xl border border-stone-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Cover */}
              <div className="flex h-80 items-center justify-center overflow-hidden bg-stone-100 p-8">
                {image ? (
                  <Image
                    src={image}
                    alt={book.title}
                    width={220}
                    height={320}
                    className="h-full w-auto rounded-lg object-contain shadow-lg transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-stone-400">
                    No Cover Available
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="space-y-3 p-5">
                <h3 className="line-clamp-2 text-lg font-bold text-stone-900">
                  {book.title}
                </h3>

                <p className="line-clamp-1 text-sm text-stone-500">
                  {book.author_name?.join(", ") || "Unknown Author"}
                </p>

                {book.first_publish_year && (
                  <p className="text-xs text-stone-400">
                    First published: {book.first_publish_year}
                  </p>
                )}

                <Link
                  href={`/books/${bookId}`}
                  className="btn btn-neutral btn-sm mt-2 w-full rounded-full"
                >
                  View Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Show More */}
      {visibleBooks < books.length && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={handleShowMore}
            className="btn btn-outline rounded-full px-8"
          >
            Show More
          </button>
        </div>
      )}
    </>
  );
};

export default BooksGrid;