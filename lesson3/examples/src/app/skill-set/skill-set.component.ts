import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'skill-set',
   templateUrl: './skill-set.component.html',
   styleUrls: ['./skill-set.component.css']
})
export class SkillSetComponent implements OnInit {
   listHeading: string = 'Some Coding Skills I Know';
   skills: string[] = ['Loops', 'Conditionals', 'Functions', 'Classes', 'Modules', 'Git', 'HTML/CSS'];
   alternateColor: string = 'purple';
   backgroundColor: string = 'yellow';
   bulletType: string = '1';
   changeColor: boolean = true;
   lcLightBlue: string = "LigtBlue";
   constructor() { }

   ngOnInit() { }

}
