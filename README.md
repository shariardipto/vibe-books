# 📚 Vibe Book

Vibe Book is a modern book discovery web application built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **daisyUI**.

It allows users to explore books, view detailed information, browse popular titles, and discover books using data from the **Open Library API**.

---

## ✨ Features

- 📖 Browse popular books
- 🔎 View detailed information for each book
- 🧑‍💼 Author information
- 🗓️ Publication year
- 🖼️ Book cover images
- 🏷️ Book categories and subjects
- ➕ "Show More" functionality
  - Initially shows 6 books
  - Loads 3 more books on each click
- 🔗 Dynamic book details routes
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS and daisyUI
- ⚡ Fast rendering with Next.js App Router
- 🌐 Data powered by Open Library API

---

## 🛠️ Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [daisyUI](https://daisyui.com/)
- [Open Library API](https://openlibrary.org/developers/api)

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── about/
│   │   └── page.tsx
│   │
│   ├── books/
│   │   ├── [id]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── assets/
│   ├── hero_img.jpg
│   └── logo.png
│
└── components/
    ├── homepage/
    │   ├── Banner.tsx
    │   ├── Books.tsx
    │   └── BooksGrid.tsx
    │
    └── shared/
        ├── Navbar.tsx
        └── Footer.tsx