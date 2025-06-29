import AddUserModal from "@/components/module/users/AddUserModal";
import UserCard from "@/components/module/users/UserCard";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hook";

const User = () => {
    const users = useAppSelector(selectUsers)
    console.log('users', users);
    return (
        <div>
            <div className="mx-auto max-w-7xl px-5 mt-20">
                <div className="flex justify-end items-center gap-5">
                    <h1 className="mr-auto">Tasks</h1>
                    <AddUserModal />
                </div>
                <div className="space-y-5 mt-5  grid grid-cols-3 gap-5">
                    {users.map((user, idx) => (
                        <UserCard key={idx} user={user}></UserCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default User;