import { Component, OnInit, OnDestroy } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { Subscription } from 'rxjs';

import { File } from '../../models/file.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
})
export class MusicPage implements OnInit, OnDestroy {

  public files: File;
  public directory: string
  private subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private backendService: BackendService
  ) {
    this.route.params.subscribe(p => {
      this.directory = p.directory
    });
  }

  ngOnInit(): void {
    this.subscription.add(
      this.backendService.getFiles(this.directory).subscribe(
        files => this.files = files.children
      )
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
