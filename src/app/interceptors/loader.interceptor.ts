import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {EMPTY, Observable} from 'rxjs';
import {AlertController, LoadingController} from '@ionic/angular';
import {catchError, finalize} from 'rxjs/operators';

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
        this.loadingController.create({
          message: 'loading...',
          translucent: true,
          backdropDismiss: true
        }).then(l => l.present());
      }
    });

    return next.handle(req).pipe(
      catchError(error => {
        this.showRequestFailedAlert().then(() => console.log({error}));
        return EMPTY;
      }),
      finalize(async () => {
        const loading = await this.loadingController.getTop();
        if (loading) {
          await this.loadingController.dismiss();
        }
      })
    );
  }

  async showRequestFailedAlert() {
    const alert = await this.alertController.create({
      header: 'Oops, an error occurs',
      message: 'Unable to communicate with the server, please try again later.',
      buttons: ['OK'],
      translucent: true,
      backdropDismiss: true
    });
    await alert.present();
  }
}
