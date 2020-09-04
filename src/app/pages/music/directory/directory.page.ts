import {Component, OnDestroy, OnInit} from '@angular/core';

import {File} from '../../../models/file.model';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {BackendService} from '../../../services/backend.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.page.html',
  styleUrls: ['./directory.page.scss'],
})
export class DirectoryPage implements OnInit, OnDestroy {

  public files: File[];
  public directory: string;
  private subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private backendService: BackendService
  ) {
    this.route.params.subscribe(p => {
      this.directory = p.directory;
    });
  }

  ngOnInit(): void {
    this.subscription.add(
      this.backendService.getFiles(this.directory).subscribe(
        files => this.files = files.children
      )
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
