import React, { useState, useEffect } from "react";
import { addTodo, editTodo, fetchTodo, deleteTodo } from "../thunk/todo";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import todo from "../slice/todo";

const Todo = () => {
  const [input, setInput] = useState("");
  const [toggleBtn, setToggleBtn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [editId, setEditId] = useState("");

  const reducerStateTodo = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const addItem = () => {
    if (!input) {
      console.error("enter data");
      return;
    } else {
      const newItems = {
        id: new Date().getTime().toString(),
        name: input,
        // _id: new Date().getTime().toString(),
      };
      dispatch(addTodo(newItems));
      setInput("");
    }
  };

  const editItem = (id) => {
    const edited_item = reducerStateTodo.todoList.find((elem) => {
      return elem.id === id;
    });
    setInput(edited_item.name);
    setToggleBtn(true);
    setEditId(id);
  };

  const updateItem = () => {
    dispatch(editTodo({ id: editId, name: input }))
      .unwrap()
      .then(() => {
        setInput("");
        setToggleBtn(false);
        setEditId("");
      })
      .catch(() => {});
  };

  const deleteItem = (id) => {
    dispatch(deleteTodo(id));
    setInput("");
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchTodo());
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <div>
        <h1>Todo</h1>
      </div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Enter your task"
        />
        {toggleBtn ? (
          <button type="button" onClick={updateItem}>
            Edit
          </button>
        ) : (
          <button type="button" onClick={addItem}>
            Add
          </button>
        )}
      </div>
      <div>
        {loading ? (
          <h6>loading.............</h6>
        ) : (
          reducerStateTodo.todoList.map((item, index) => {
            return (
              <div key={index + "item"}>
                <span>{index + 1}</span>. <span>{item.name}</span>
                <button type="button" onClick={() => editItem(item.id)}>
                  edit
                </button>
                <button type="button" onClick={() => deleteItem(item.id)}>
                  delete
                </button>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Todo;
