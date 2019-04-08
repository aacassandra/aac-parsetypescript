import axios from "axios";
import { SigninModele } from "./signin.modele";
import { CreateModele } from "./create.modele";
import { ReadingModele } from "./reading.modele";
import { UpdateModele } from "./update.modele";
import { DeleteModele } from "./delete.modele";
import { SignupModele } from "./signup.modele";
import { UsersModele } from "./users.modele";

export class ParseTypescript {
  constructor() {}

  async httpRespons(options: any) {
    return new Promise((resolve, reject) => {
      axios(options)
        .then(function(response) {
          let res = {
            success: true,
            res: response
          };
          resolve(res);
        })
        .catch(function(error) {
          let res = {
            success: false,
            res: error
          };
          resolve(res);
        });
    });
  }

  async getSignin(config: SigninModele) {
    const options = {
      method: "GET",
      url:
        config.bashurl +
        "/login?username=" +
        config.data.username +
        "&password=" +
        config.data.password,
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-Parse-Application-Id": config.header.appId,
        "X-Parse-REST-API-Key": config.header.restApiKey,
        "X-Parse-Revocable-Session": "1"
      }
    };

    let res = await this.httpRespons(options);
    return res;
  }

  async getSignup(config: SignupModele) {
    const options = {
      method: "POST",
      url: config.bashurl + "/users",
      data: config.data,
      headers: {
        "X-Parse-Application-Id": config.headers.appId,
        "X-Parse-REST-API-Key": config.headers.restApiKey,
        "X-Parse-Revocable-Session": "1",
        "Content-Type": "application/json"
      }
    };

    let res = await this.httpRespons(options);
    return res;
  }

  async getUsers(config: UsersModele) {
    const options = {
      method: "GET",
      url: config.bashurl + "/users/" + config.data.id,
      headers: {
        "X-Parse-Application-Id": config.headers.appId,
        "X-Parse-REST-API-Key": config.headers.restApiKey
      }
    };

    let res = await this.httpRespons(options);
    return res;
  }

  //Sections CRUD
  async getCreate(config: CreateModele) {
    const options = {
      method: "POST",
      url: config.bashurl + "/classes/" + config.class,
      data: config.data,
      headers: {
        "X-Parse-Application-Id": config.headers.appId,
        "X-Parse-REST-API-Key": config.headers.restApiKey,
        "Content-Type": "application/json"
      }
    };

    let res = await this.httpRespons(options);
    return res;
  }

  async getReadingCustom(config: ReadingModele) {
    const options = {
      method: "GET",
      url:
        config.bashurl + "/classes/" + config.class + "?where=" + config.where,
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-Parse-Application-Id": config.headers.appId,
        "X-Parse-REST-API-Key": config.headers.restApiKey
      }
    };

    let res = await this.httpRespons(options);
    return res;
  }

  async getUpdate(config: UpdateModele) {
    const options = {
      method: "PUT",
      url: config.bashurl + "/classes/" + config.class + "/" + config.data.id,
      data: config.data.form,
      headers: {
        "X-Parse-Application-Id": config.headers.appId,
        "X-Parse-REST-API-Key": config.headers.restApiKey,
        "Content-Type": "application/json"
      }
    };

    let res = await this.httpRespons(options);
    return res;
  }

  async getDelete(config: DeleteModele) {
    const options = {
      method: "DELETE",
      url: config.bashurl + "/classes/" + config.class + "/" + config.data.id,
      headers: {
        "X-Parse-Application-Id": config.headers.appId,
        "X-Parse-REST-API-Key": config.headers.restApiKey
      }
    };

    let res = await this.httpRespons(options);
    return res;
  }
}
