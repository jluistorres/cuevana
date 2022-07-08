// import { MovieService } from "@cuevana-commons";
import { Observable, of, tap } from "rxjs";

/* Para inyectar paramétros en APP_INITIALIZER se debe declarar en deps */

/* export function initializeAppFactory(movieService: MovieService): () => Observable<any> {
  return () => movieService.genres()
    .pipe(
      tap({ next: values => console.log("Configuración de la aplicación", values) })
    );
} */

export function initializeAppFactory(): () => Observable<any> {
  return () => of({ config: { test: 'xyz' } })
    .pipe(
      tap({ next: values => console.log("Configuración de la aplicación", values) })
    );
}