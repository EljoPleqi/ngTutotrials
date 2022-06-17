export class User {
  constructor(
    public name: string,
    public email: string,
    private password: string
  ) {
    password = this.password;
  }
}
