import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ["Test item 1"];
   finishedChores = [ 'Empty dishwasher','Complete LaunchCode prep work','Buy groceries', 'Test'];

   targetImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNH9ala3bfFbnOR176D3lT_g4csXG1ALoIPg&usqp=CAU';

   constructor() { }

   ngOnInit() {
   }

}
