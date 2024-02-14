import { create } from 'zustand'


interface useProModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

// function useProModal() {
//     return (
//         <div>useProModal</div>
//     )
// }
// export default useProModal

export const useProModal = create<useProModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))