import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addTodo = createAsyncThunk(
  "todo/addTodo",
  async (model, thunkApi) => {
    try {
      let res = await axios.post(`http://localhost:3001/`, {
        model,
      });
      await thunkApi.dispatch(fetchTodo());
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue("error");
    }
  }
);

export const editTodo = createAsyncThunk(
  "todo/editTodo",
  async (model, thunkApi) => {
    try {
      let res = await axios.put(`http://localhost:3001/${model.id}`, {
        name: model.name,
      });
      const responseData = res.data;
      await thunkApi.dispatch(fetchTodo());
      return responseData;
    } catch (error) {
      return thunkApi.rejectWithValue("error");
    }
  }
);

export const fetchTodo = createAsyncThunk(
  "todo/fetchTodo",
  async (model, thunkApi) => {
    try {
      let res = await axios.get(`http://localhost:3001/`);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue("error");
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todo/deleteTodo",
  async (model, thunkApi) => {
    try {
      console.error(model);
      let res = await axios.delete(`http://localhost:3001/${model}`);
      await thunkApi.dispatch(fetchTodo());
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue("error");
    }
  }
);
