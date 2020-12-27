
export type ToastType = 'warning' | 'info' | 'success';
export interface ToastData {
    text: string;
    type: ToastType;
}