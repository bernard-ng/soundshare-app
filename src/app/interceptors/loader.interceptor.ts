import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { AlertController, LoadingController } from '@ionic/angular';
import { catchError, finalize } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    constructor(
        private loadingController: LoadingController,
        private alertController: AlertController
    ) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.loadingController.getTop().then(loading => {
            if (!loading) {
                this.loadingController.create({ message: 'chargement...' }).then(l => l.present());
            }
        });

        return next.handle(req).pipe(
            catchError(error => {
                this.showRequestFailedAlert();
                console.log({ error });
                return EMPTY;
            }),
            finalize(() => {
                this.loadingController.getTop().then(loading => {
                    if (loading) {
                        this.loadingController.dismiss();
                    }
                });
            })
        );
    }

    async showRequestFailedAlert() {
        const alert = await this.alertController.create({
            header: 'oups, une erreur',
            message: 'Impossible de communiquer avec le serveur, réessayez plus tard',
            buttons: ['OK']
        });
        await alert.present();
    }
}
