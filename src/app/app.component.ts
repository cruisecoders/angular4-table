import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  list:any = [{
	name: 'Jon', 
	joining_date:'23/10/2015', 
	age: 23
   },
   {
	name:'Viki', 
	joining_date:'24/01/2015', 
	age: 20
   },
   {
	name: 'Abc', 
	joining_date:'25/10/2015', 
	age: 43
   },
   {
	name: 'XYZ', 
	joining_date:'28/10/2015', 
	age: 21
   }
   ];
   
  
   

}
