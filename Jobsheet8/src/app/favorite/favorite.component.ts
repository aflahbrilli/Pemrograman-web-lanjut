import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  // template:`<h2> ini menggunakan internal template <h2>`,
  styleUrls: ['./favorite.component.css'],
  styles:[
    `
    .fa-star{
      color:green;
    }
    `
  ]
})
  // inputs: ['isFavorite']
export class FavoriteComponent implements OnInit {

  @Input() isFavorite:boolean;
  // coba:boolean;
  @Input('aliasFavorite') isSelected:boolean;

  @Output('aliasOutput') change= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isFavorite=!this.isFavorite;
  }

  onClickAlias(){
    this.isSelected=! this.isSelected;
    // this.change.emit(this.isSelected);
    this.change.emit({newValue:this.isSelected});
  }}
  export interface FavoriteChangeEventArgs{
    newValue:boolean;
}
