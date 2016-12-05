import { PreloadingStrategy, Route } from "@angular/router";
import { Observable } from 'rxjs';

export class PreloadSelectedModules implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    return route.data && ('preload' in route.data) ? load() : null;
  }
}