import { Component, OnInit } from '@angular/core';
import { Iuser } from 'src/app/modals/product';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userdata !: Iuser[]
  constructor(
    private _userservice : UserService
  ) { }

  ngOnInit(): void {
    this.getdata()
  }

  getdata(){
    this._userservice.getusers()
      .subscribe(res => {
        this.userdata = res
      })
  }

  trackbyfun(index : number, item : Iuser){
    return item.userId
  }
}
