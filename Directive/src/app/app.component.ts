import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'belajar-angular';
  courses=[1,2];
    
  coursesForOne;
  loadCourses(){
    this.coursesForOne=[
      {id:1, name: 'coursesone1'},
      {id:2, name: 'coursesone2'},
      {id:3, name: 'coursesone3'},
      {id:4, name: 'coursesone4'},
      {id:5, name: 'coursesone5'},
    ]
  }
    
  viewMode='map';

  onAdd(){
    this.coursesForOne.push({id:6, name:'courses6'})
  }
  onRemove(item){
    console.log(item);
    let index=this.coursesForOne.indexOf(item);
    console.log(index);
    this.coursesForOne.splice(index,1);
  
    
  }
  onChange(item) {
      item.name='Updated';
    }
  trackCourses(index,itemone){
    return itemone ? itemone.id : undefined;
  }
}
