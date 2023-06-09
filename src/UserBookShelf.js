import React from "react";
import BookList from "./BookList";

const sample = [
  { booktitle: "aaaaaa", image: "https://picsum.photos/200/200?random=1" },
  { booktitle: "bbbbbb", image: "https://picsum.photos/200/200?random=2" },
  { booktitle: "cccccc", image: "https://picsum.photos/200/200?random=3" },
  { booktitle: "eeeeee", image: "https://picsum.photos/200/200?random=4" },
  { booktitle: "ffffff", image: "https://picsum.photos/200/200?random=5" },
  { booktitle: "gggggg", image: "https://picsum.photos/200/200?random=6" },
  { booktitle: "hhhhhh", image: "https://picsum.photos/200/200?random=7" },
  { booktitle: "jjjjjj", image: "https://picsum.photos/200/200?random=8" },
  { booktitle: "kkkkkk", image: "https://picsum.photos/200/200?random=9" },
  { booktitle: "llllll", image: "https://picsum.photos/200/200?random=10" },
  { booktitle: "mmmmmm", image: "https://picsum.photos/200/200?random=11" },
  { booktitle: "nnnnnn", image: "https://picsum.photos/200/200?random=12" },
  { booktitle: "oooooo", image: "https://picsum.photos/200/200?random=13" },
  { booktitle: "pppppp", image: "https://picsum.photos/200/200?random=14" },
  { booktitle: "qqqqqq", image: "https://picsum.photos/200/200?random=15" },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div>
      <h1>나의 서재</h1>
      {sample.map((book) => (
        <BookList booktitle={book.booktitle} />
      ))}
    </div>
  );
};
