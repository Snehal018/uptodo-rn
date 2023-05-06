import {createAsyncThunk} from '@reduxjs/toolkit';
import {parseThunkError} from '../../../utils/helperfunctions';
import axiosClient from '../../../api';
import {ApiConstants} from '../../../api/apiConstants';

interface AddTaskPayloadType {
  title: string;
  description: string | null;
  time: string;
  priority: number;
  category: string | null;
  subtasks: Array<any> | null;
}

const addTask = createAsyncThunk(
  'task/addTask',
  async (
    {params}: {params: Partial<AddTaskPayloadType>},
    {rejectWithValue}
  ) => {
    try {
      const response = await axiosClient.post(ApiConstants.task, params);
      return response;
    } catch (error) {
      return rejectWithValue(parseThunkError(error));
    }
  }
);

export {addTask};
