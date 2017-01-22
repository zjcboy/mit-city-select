import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MitCitySelectService } from './mit-city-select.service';
import { IMitAddress } from './mit-city.model';
import { Json} from './china_address'
@Component( {
  selector: 'app-mit-city-select',
  templateUrl: './mit-city-select.component.html',
  styleUrls: [ './mit-city-select.component.scss' ]
})
export class MitCitySelectComponent implements OnInit {
  @Output() result = new EventEmitter();
  @Input() selected: string;
  public isExpand: Boolean = false;
  public list: Array<any>;
  constructor( private mitCitySelectService: MitCitySelectService ) { }

  ngOnInit() {
    this.mitCitySelectService.getAddress().subscribe(( res ) => {
      this.list = res;
    });
  }

  selectHandle( province: IMitAddress, city: IMitAddress, district: IMitAddress ) {
    this.isExpand = false;
    this.selected = province + '/' + city + '/' + district;
    this.result.emit( this.selected );
  }


}
