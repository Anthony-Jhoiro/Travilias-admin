import { User } from "../types";

namespace UsersController {
    export function getUsers(): Promise<User[]> {
        return Promise.resolve([
            {
                id: "1",
                displayedName: "Jhoiro",
                username: "Jhoiro",
                email: "Jhoiro@gmail.bk",
            },
            {
                id: "2",
                displayedName: "Chewbacca",
                username: "Chewbacca",
                email: "Chewbacca@gmail.bk",
            },
            {
                id: "3",
                displayedName: "Driou",
                username: "Driou",
                email: "Driou@gmail.bk",
            },
            {
                id: "4",
                displayedName: "Saturne",
                username: "Saturne",
                email: "Saturne@gmail.bk",
            },
            {
                id: "52",
                displayedName: "Baptiste",
                username: "Baptiste",
                email: "Baptiste@gmail.bk",
            },
        ]);
    }
}

export default UsersController;