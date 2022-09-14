import { createSlice } from "@reduxjs/toolkit";
import { addTodo, editTodo, deleteTodo, fetchTodo } from "../thunk/todo";

const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [addTodo.pending]: (state, action) => {
      state.loading = true;
    },
    [addTodo.fulfilled]: (state, action) => {
      state.loading = false;
      console.log(action.payload);
    },
    [addTodo.rejected]: (state, action) => {
      state.loading = false;
      console.error("Something went wrong");
    },
    // -------------------------------------------
    [editTodo.pending]: (state, action) => {
      state.loading = true;
    },
    [editTodo.fulfilled]: (state, action) => {
      state.loading = false;
      console.log(action.payload);
    },
    [editTodo.rejected]: (state, action) => {
      state.loading = false;
      console.error("Something went wrong");
    },
    // -------------------------------------------
    [deleteTodo.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteTodo.fulfilled]: (state, action) => {
      state.loading = false;
      console.log(action.payload);
    },
    [deleteTodo.rejected]: (state, action) => {
      state.loading = false;
      console.error("Something went wrong");
    },
    // -------------------------------------------
    [fetchTodo.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchTodo.fulfilled]: (state, action) => {
      state.loading = false;
      state.todoList = [...action.payload];
      console.log(action.payload);
    },
    [fetchTodo.rejected]: (state, action) => {
      state.loading = false;
      console.error("Something went wrong");
    },
  },
});

export default TodoSlice.reducer;
