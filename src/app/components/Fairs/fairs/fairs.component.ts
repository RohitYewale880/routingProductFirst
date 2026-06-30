import { Component, OnInit } from '@angular/core';
import { Ifairs } from 'src/app/modals/product';
import { FairsService } from 'src/app/services/fairs.service';

@Component({
  selector: 'app-fairs',
  templateUrl: './fairs.component.html',
  styleUrls: ['./fairs.component.scss']
})
export class FairsComponent implements OnInit {

  fairsdata! : Array<Ifairs>
  constructor(
    private _fairsservice : FairsService
  ) { }

  ngOnInit(): void {
    this.getfairsdata()
  }

  getfairsdata(){
    this._fairsservice.getfairsArr().subscribe(res => {
      this.fairsdata = res
    })
  }

  trackbyfun(ind : number, fairs : Ifairs){
    return fairs.fairId
  }
}
