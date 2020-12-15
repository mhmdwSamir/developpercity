module.exports = class UserDto {
    constructor({ _id, email, name, password }) {
        this.id = _id;
        this.email = email;
        this.name = name;
        if (password) {
            this.password = password;
        }
    }
    static toDto(data) {
        return new UserDto(data);
    }
}