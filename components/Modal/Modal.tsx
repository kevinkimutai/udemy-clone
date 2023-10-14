import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

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
  header?: {
    title: string;
    desc: string;
  };
  children: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  header,
  children,
}: ModalProps) {
  return (
    <Dialog open={isOpen}>
      {/* <DialogTrigger asChild>
        <Button variant="outline">Create Course</Button>
      </DialogTrigger> */}
      <DialogContent className="w-[40vw]">
        <DialogHeader>
          <DialogTitle>{header?.title}</DialogTitle>
          <DialogDescription>{header?.desc}</DialogDescription>
        </DialogHeader>
        <ScrollArea className="w-full h-[60vh]">{children}</ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
