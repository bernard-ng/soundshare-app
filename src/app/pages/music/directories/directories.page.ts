import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {File} from '../../../models/file.model';
import {BackendService} from '../../../services/backend.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-directories',
  templateUrl: './directories.page.html',
  styleUrls: ['./directories.page.scss'],
})
export class DirectoriesPage implements OnInit, OnDestroy {

  public folders: File;
  private subscription = new Subscription();

  constructor(
    private router: Router,
    private backendService: BackendService
  ) {
  }

  ngOnInit(): void {
    this.subscription.add(
      this.backendService.getFolders().subscribe(
        f => this.folders = f
      )
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  handleRefresh(): void {
    this.subscription.add(
      this.backendService.getFolders().subscribe(
        f => this.folders = f
      )
    );
  }

  async handleSelect(directory: string): Promise<any> {
    return await this.router.navigateByUrl(`/music/directory/${directory}`);
  }
}
