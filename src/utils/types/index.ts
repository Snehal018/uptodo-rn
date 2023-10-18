import { Dispatch, SetStateAction } from 'react';

interface LoginFormType {
  userName: string;
  password: string;
}

interface RegisterFormType {
  userName: string;
  password: string;
  confirmPassword: string;
}

interface AddTaskContextType {
  isCalendarModalVisible: boolean;
  setIsCalendarModalVisible: Dispatch<SetStateAction<boolean>>;
  isPriorityModalVisible: boolean;
  setIsPriorityModalVisible: Dispatch<SetStateAction<boolean>>;
}

interface CategoryItemType {
  _id: string;
  name: string;
  color: string;
}

interface TaskItemType {
  _id: string;
  title: string;
  description: string;
  time: string;
  priority: number;
  isDone: boolean;
  category: CategoryItemType | null;
  subTasks: Array<{
    _id: string;
    title: string;
    description: string;
    time: string;
    priority: number;
    isDone: boolean;
  }>;
  user: {
    _id: string;
    username: string;
    profileImage: string | null;
  };
}

export type {
  LoginFormType,
  RegisterFormType,
  AddTaskContextType,
  TaskItemType,
};
