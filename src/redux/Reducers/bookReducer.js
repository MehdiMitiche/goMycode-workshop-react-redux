const BOOKS = [
  {
    title: "Moh Le Mysterieux",
    author: "Mehdi Mitiche",
    rating: 5,
    voters: "41,867,756",
    description:
      "Moh était un elève vraiment exceptionnel ce qui m'a inspiré a ecrir ce livre, j'espère que vous l'apprecierez",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Anonymous.svg/1200px-Anonymous.svg.png",
  },
  {
    title: "Alone on thte way",
    author: "David Roberts",
    rating: 4,
    voters: "1,867,756",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam   ",
    img: "/assets/book1.jpg",
  },
  {
    title: "Alone on thte way",
    author: "David Roberts",
    rating: 4,
    voters: "1,867,756",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam   ",
    img: "/assets/book1.jpg",
  },
  {
    title: "Alone on thte way",
    author: "David Roberts",
    rating: 4,
    voters: "1,867,756",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam   ",
    img: "/assets/book1.jpg",
  },
];
const initialState = {
  books: BOOKS,
  visible: false,
  newBook: {
    title: "",
    author: "",
    description: "",
    rating: 0,
  },
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_BOOK":
      return { ...state, books: [...state.books, action.payload] };
    case "UPDATE_VISIBLE":
      return { ...state, visible: action.payload };
    case "UPDATE_NEW_BOOK":
      return { ...state, newBook: action.payload };
    default:
      return state;
  }
};

export default bookReducer;
