export interface UserProfile {
  _id: string;
  username: string;
  profileImage: string | null;
  leftTasks: number;
  doneTasks: number;
}
