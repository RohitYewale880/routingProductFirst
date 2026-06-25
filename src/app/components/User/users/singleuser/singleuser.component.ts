import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { GetconfirmComponent } from 'src/app/components/getconfirm/getconfirm.component';
import { Iuser } from 'src/app/modals/product';
import { SnakbarService } from 'src/app/services/snakbar.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-singleuser',
  templateUrl: './singleuser.component.html',
  styleUrls: ['./singleuser.component.scss']
})
export class SingleuserComponent implements OnInit {

  userId !: string
  userDetails!: Iuser
  constructor(
    private _userservice: UserService,
    private routes: ActivatedRoute,
    private matdilog: MatDialog,
    private snakbar: SnakbarService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.getid()
  }

  getid() {
    this.routes.paramMap.subscribe(params => {
      this.userId = params.get('id')!;
      this.getsingleuser()
    })
  }

  getsingleuser() {
    this._userservice.getsingleuser(this.userId).subscribe(res => {
      this.userDetails = res
    })
  }

  onRemoveUser() {
    this.matdilog.open(GetconfirmComponent, {
      width: '500px',
      disableClose: true,
      data: `Are you sure do you want to remove this user whose id is ${this.userId}`
    }).afterClosed().subscribe(res => {
      if (res) {
        this._userservice.removeuser(this.userDetails.userId)
          .subscribe(res => {
            this.snakbar.OpenSnakbar(res.msg)
            this.route.navigate(['/users']);
          })
      }
    })
  }
}
