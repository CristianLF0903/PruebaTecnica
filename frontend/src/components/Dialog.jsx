'use client'
import { useDialogStore } from "@/store/useDialogStore";
export function Dialog() {
    const content = useDialogStore((state) => state.content)
    const isOpen = useDialogStore((state)=>state.isOpen)

  return (
    <dialog id="myDialog" className="dialog-water open:animate-fade-in" open={isOpen}>
      {content}
    </dialog>
  );
}