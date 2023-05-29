export class UserResponse {
    active: boolean;
    _id: string;
    role: string;
    first_name: string;
    last_name: string;
    email: string;
    admin: false;
    timezone: string;
    country: string;
    language: string;
    chats: string[];
    passwordChangedAt: string;
    photo: string;

    constructor(
        active: boolean,
        _id: string,
        role: string,
        first_name: string,
        last_name: string,
        email: string,
        admin: false,
        timezone: string,
        country: string,
        language: string,
        chats: string[],
        passwordChangedAt: string,
        photo: string

    ) {
        this.active = active,
            this._id = _id,
            this.role = role,
            this.first_name = first_name,
            this.last_name = last_name,
            this.email = email,
            this.admin = admin,
            this.timezone = timezone,
            this.country = country,
            this.language = language,
            this.chats = chats,
            this.passwordChangedAt = passwordChangedAt,
            this.photo = photo;
    }
}
export class User {
    _id: string;
    role: string;
    first_name: string;
    last_name: string;
    full_name: string;
    email: string;

    constructor(
        _id: string,
        role: string,
        first_name: string,
        last_name: string,
        full_name: string,
        email: string,
    ) {
        this._id = _id,
            this.role = role,
            this.first_name = first_name,
            this.last_name = last_name,
            this.full_name = full_name,
            this.email = email;
    }
}
