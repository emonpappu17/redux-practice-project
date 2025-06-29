import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { addUser } from '@/redux/features/user/userSlice';
import { useAppDispatch } from '@/redux/hook';
import type { IUser } from '@/types';
import { useForm, type FieldValues, type SubmitHandler } from 'react-hook-form';

const AddUserModal = () => {
    const form = useForm();

    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log('data', data);
        dispatch(addUser(data as IUser))
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button >Add User</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogDescription className="sr-only">Fill up this form to add user</DialogDescription>
                <DialogHeader>
                    <DialogTitle>Add user</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} value={field.value || ""}></Input>
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <DialogFooter>
                            <Button className="mt-5" type="submit">Save changes</Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog >
    );
};

export default AddUserModal;