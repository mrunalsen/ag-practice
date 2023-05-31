import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { User } from '../../model/user.model';
import { UtilitiesService } from 'src/app/shared/services/utilities.service';

@Component({
  selector: 'list-presentation',
  templateUrl: './user-list-presentation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListPresentationComponent implements OnInit {
  @ViewChild('table') public table!: ElementRef;
  @Input()
  public set getUserList(value: User[] | null) {
    if (value) {
      if (!this.newList) {
        this.newList = value;
      }
      this._userdata = value;
    }
  }
  public get getUserList(): User[] {
    return this._userdata;
  }

  public query!: string;
  public newList!: User[];
  private _userdata!: User[];


  constructor(
    private utilityService: UtilitiesService
  ) {
    this.utilityService.searchData$.subscribe((res) => {
      this._userdata = res;
    });
  }

  ngOnInit(): void {
  }
  public onSearch() {
    this.utilityService.search(this.newList, this.query);
  }

  public onDownload() {
    console.log('clicked');
  }
}