import React from "react";
import { Button, Modal, Input, Rate } from "antd";
import { useDispatch, useSelector } from "react-redux";

const AddBook = () => {
  const dispatch = useDispatch();
  const { visible, newBook } = useSelector((state) => state.book);
  return (
    <div>
      <Button
        size="large"
        onClick={() => dispatch({ type: "UPDATE_VISIBLE", payload: true })}
      >
        Add New Book
      </Button>
      <Modal
        title="Add New Book"
        visible={visible}
        onCancel={() => dispatch({ type: "UPDATE_VISIBLE", payload: false })}
        onOk={() => {
          dispatch({
            type: "ADD_NEW_BOOK",
            payload: {
              ...newBook,
              img: "/assets/book1.jpg",
              voters: "1,867,756",
            },
          });
          dispatch({ type: "UPDATE_VISIBLE", payload: false });
          dispatch({
            type: "UPDATE_NEW_BOOK",
            payload: {
              title: "",
              author: "",
              description: "",
              rating: 0,
            },
          });
        }}
      >
        <Input
          style={{ margin: 10 }}
          placeholder="Book Title"
          size="large"
          onChange={(event) =>
            dispatch({
              type: "UPDATE_NEW_BOOK",
              payload: { ...newBook, title: event.target.value },
            })
          }
          value={newBook.title}
        />
        <Input
          style={{ margin: 10 }}
          placeholder="Book Author"
          size="large"
          onChange={(event) =>
            dispatch({
              type: "UPDATE_NEW_BOOK",
              payload: { ...newBook, author: event.target.value },
            })
          }
          value={newBook.author}
        />
        <Input
          style={{ margin: 10 }}
          placeholder="Book Description"
          size="large"
          onChange={(event) =>
            dispatch({
              type: "UPDATE_NEW_BOOK",
              payload: { ...newBook, description: event.target.value },
            })
          }
          value={newBook.description}
        />
        <Rate
          style={{ margin: 10 }}
          onChange={(value) =>
            dispatch({
              type: "UPDATE_NEW_BOOK",
              payload: { ...newBook, rating: value },
            })
          }
          value={newBook.rating}
        />
      </Modal>
    </div>
  );
};

export default AddBook;
