# Grace Naumann — Author Website

A clean, static author website for Grace Naumann and her novel
*The Next Chapter Bookstore*.

No build step required — plain HTML, CSS, and JavaScript, designed to be
hosted on GitHub Pages.

## Files

- `index.html` — page content: book, praise, author bio, reading list, newsletter/contact
- `styles.css` — all styling (warm linen / mocha / lilac palette, Fraunces + Source Serif)
- `script.js` — reading-list rendering, mobile nav, newsletter form demo

## To finish before launch

1. Replace the `#` buy links in `index.html` with real Bookshop.org / IndieBound / Amazon URLs.
2. Replace the `#` Instagram / Goodreads links with real profile URLs.
3. Add an author photo (replace the "GN" placeholder in the Author section) and, if you have one, a real book-cover image.
4. Connect the newsletter form to a real service (Mailchimp, Buttondown, Substack, etc.) — right now it only shows a thank-you message and does not save emails.

## Hosting on GitHub Pages

Create a public repository, push these files to `main`, then in the repo:
Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` / `(root)`.

If the repo is named `grczll7-beep.github.io`, the site will live at
https://grczll7-beep.github.io/ — otherwise it will be at
https://grczll7-beep.github.io/<repo-name>/
