import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ifairs } from 'src/app/modals/product';
import { FairsService } from 'src/app/services/fairs.service';

@Component({
  selector: 'app-singlefairs',
  templateUrl: './singlefairs.component.html',
  styleUrls: ['./singlefairs.component.scss']
})
export class SinglefairsComponent implements OnInit {

  fairsId ! : string
  fairObj ! : Ifairs
  constructor(
    private routes : ActivatedRoute,
    private _fairsservice : FairsService
  ) { }

  ngOnInit(): void {
    this.getFairsId()
  }

  getFairsId(){
    this.routes.paramMap.subscribe(res => {
      this.fairsId = res.get('fairId')!
      this.getFairsObj()
    })
  }

  getFairsObj(){
    this._fairsservice.getsingleFair(this.fairsId)
      .subscribe({
        next : res => {
          this.fairObj = res
        },error : err => {
          console.log(err);
        }
      })
  }
}
