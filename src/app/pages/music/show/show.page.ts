import { Component, OnInit, OnDestroy } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { File } from '../../../models/file.model'

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit, OnDestroy {

  public params: Params
  public file: File
  private subscription = new Subscription()

  constructor(
    private route: ActivatedRoute,
    private backendService: BackendService
  ) {
    this.route.params.subscribe(p => this.params = p)
  }

  ngOnInit(): void {
    this.subscription.add(
      this.backendService.getFile(this.params.directory, this.params.hash).subscribe(
        f => this.file = f
      )
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
