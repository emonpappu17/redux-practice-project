import { Button } from "@/components/ui/button";
import { removeUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
import type { IUser } from "@/types";
import { Trash2 } from "lucide-react";
interface IProps {
    user: IUser
}
const UserCard = ({ user }: IProps) => {
    const dispatch = useAppDispatch();
    console.log("user", user);
    return (
        <div className="border px-5 py-3 rounded-md flex justify-between items-center h-16">
            <p>{user.name}</p>
            <Button onClick={() => dispatch(removeUser(user.id))} variant="link" className="p-0 text-red-500">
                <Trash2></Trash2>
            </Button>
        </div>
    );
};

export default UserCard;