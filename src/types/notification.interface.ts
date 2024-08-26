export interface Notification {
  id: string;
  duration?: number;
  massage: string;
  type: NotificationType;
}

export type NotificationType = "success" | "error" | "info" | "warning";
