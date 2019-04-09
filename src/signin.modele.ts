export class SigninModele {
  bashurl: String | undefined;
  data!: {
    username: String | undefined;
    password: String | undefined;
  };
  header!: {
    appId: String | undefined;
    restApiKey: String | undefined;
  };
}
