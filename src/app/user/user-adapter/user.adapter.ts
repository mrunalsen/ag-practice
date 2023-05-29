import { Injectable } from "@angular/core";
import { Adapter } from "src/app/core/adapter/adapter";
import { User, UserResponse } from "../model/user.model";

@Injectable()
export class userAdapter implements Adapter<User>{

    toResponse(item: UserResponse): User {
        const fullName: string = item.first_name + '' + item.last_name;
        const user: User = new User(
            item._id,
            item.email,
            item.first_name,
            item.last_name,
            item.role,
            fullName
        );
        return user;
    }
}