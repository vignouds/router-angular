import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import Formation from "./model/Formation";

@Injectable()
export class FormationsResolvers implements Resolve<any> {

constructor() {
}

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve([
        new Formation("Formation JS"),
        new Formation("Formation Python"),
        new Formation("Formation Java")
      ]);
    }, 5000);
  })
}
}
