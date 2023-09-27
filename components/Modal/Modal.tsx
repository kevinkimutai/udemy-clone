import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  return (
    <Dialog open={isOpen}>
      {/* <DialogTrigger asChild>
        <Button variant="outline">Create Course</Button>
      </DialogTrigger> */}
      <DialogContent className="w-[40vw]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4" />
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
