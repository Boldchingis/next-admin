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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";

export function EditModal({ open, onClose, item }) {
  const [editModal, setEditModal] = useState(false);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const editUser = async () => {
    await fetch("/api/users/" + item.id, {
      method: "PUT",
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        email: email,
        imageUrl: "http://dummyimage.com/117x116.png/cc0000/ffffff",
      }),
    });
    onClose(false);
  };
  useEffect(() => {
    setFirstName(item?.firstname);
    setLastName(item?.lastname);
    setEmail(item?.email);
  }, [item]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit user</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              id="name"
              defaultValue=""
              value={firstname}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              id="username"
              defaultValue=""
              value={lastname}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id="email"
              defaultValue=""
              value={email}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={() => onClose(false)}
            variant="outline"
            type="button"
          >
            Cancel
          </Button>

          <Button onClick={editUser} type="submit">
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
