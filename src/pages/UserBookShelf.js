import React from "react";
import BookList from "../components/BookList";

const sample = [
  {
    id: 1,
    booktitle: "aaaaaa",
    image: "https://picsum.photos/200/200?random=1",
  },
  {
    id: 2,
    booktitle: "bbbbbb",
    image: "https://picsum.photos/200/200?random=2",
  },
  {
    id: 3,
    booktitle: "cccccc",
    image: "https://picsum.photos/200/200?random=3",
  },
  {
    id: 4,
    booktitle: "eeeeee",
    image: "https://picsum.photos/200/200?random=4",
  },
  {
    id: 5,
    booktitle: "ffffff",
    image: "https://picsum.photos/200/200?random=5",
  },
  {
    id: 6,
    booktitle: "gggggg",
    image: "https://picsum.photos/200/200?random=6",
  },
  {
    id: 7,
    booktitle: "hhhhhh",
    image: "https://picsum.photos/200/200?random=7",
  },
  {
    id: 8,
    booktitle: "jjjjjj",
    image: "https://picsum.photos/200/200?random=8",
  },
  {
    id: 9,
    booktitle: "kkkkkk",
    image: "https://picsum.photos/200/200?random=9",
  },
  {
    id: 10,
    booktitle: "llllll",
    image: "https://picsum.photos/200/200?random=10",
  },
  {
    id: 11,
    booktitle: "mmmmmm",
    image: "https://picsum.photos/200/200?random=11",
  },
  {
    id: 1,
    booktitle: "nnnnnn",
    image: "https://picsum.photos/200/200?random=12",
  },
  {
    id: 12,
    booktitle: "oooooo",
    image: "https://picsum.photos/200/200?random=13",
  },
  {
    id: 13,
    booktitle: "pppppp",
    image: "https://picsum.photos/200/200?random=14",
  },
  {
    id: 14,
    booktitle: "qqqqqq",
    image: "https://picsum.photos/200/200?random=15",
  },
  {
    id: 15,
    booktitle: "rrrrrr",
    image: "https://picsum.photos/200/200?random=16",
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div>
      <h1>나의 서재</h1>
      {sample.map((book) => (
        <BookList key={book.id} booktitle={book.booktitle} image={book.image} />
      ))}
    </div>
  );
};
