export class SignupModele {
  bashurl: String | undefined;
  data!: {
    username: String | undefined;
    email: String | undefined;
    password: String | undefined;
  };
  headers!: {
    appId: String | undefined;
    restApiKey: String | undefined;
  };
}
