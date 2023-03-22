import create from 'zustand';

interface NotificationCountTypes {
    count: number;
    setCount: (count: number) => void;
}
export const notificationCountState = create<NotificationCountTypes>((set) => ({
    count: 5,
    setCount: (count) => set({ count }),
}));
