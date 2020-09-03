import { Component, OnInit, OnDestroy } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Subscription } from 'rxjs';
import { BackendService } from './services/backend.service';
import { File } from './models/file.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public selectedIndex = 0;
  public folders: File[];

  private subscription = new Subscription();

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private backendService: BackendService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp(): void {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit(): void {
    this.subscription.add(
      this.backendService.getFolders().subscribe(f => this.folders = f)
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe
  }

  handleRefresh(): void {
    this.subscription.add(
      this.backendService.getFolders().subscribe(f => this.folders = f)
    )
  }

  async handleSelect(directory: string): Promise<any> {
    return await this.router.navigateByUrl(`/music/${directory}`)
  }
}
