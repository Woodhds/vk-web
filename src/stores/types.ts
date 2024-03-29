import { VkMessage, VkUser, VkUserGroup } from 'src/api/types';

export interface UserState {
  user: string | null;
  users: VkUser[];
}

export interface NotificationState {
  success: boolean;
  danger: boolean;
  error: boolean;
  message: string;
}

export interface MessagesState {
  messages: VkMessage[];
}

export interface RootState {
  messages: MessagesState;
  user: UserState;
  notifications: NotificationState;
  groups: GroupState;
}

export interface GroupState {
  groups: VkUserGroup[];
}
