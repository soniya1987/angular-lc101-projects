import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color: string = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;


  takeOff()
  {
    if (confirm("Confirm that the shuttle is ready for takeoff."))
    {
      this.message = "Shuttle in flight.";
      this.color = "blue";
      this.height += 10000;
      this.takeOffEnabled = false;
    }
  }

  land(rocketImage)
  {
    window.alert("The shuttle is landing. Landing gear engaged.");
    this.message = "The shuttle has landed.";
    this.color = "green";
    this.height = 0;
    this.takeOffEnabled = true;
    rocketImage.style.bottom = '0px';
    rocketImage.style.left = '0px';
  }

  abortMission(rocketImage)
  {
    if (confirm("Are you sure you want to end the mission?"))
    {
      this.color = 'red';
      this.height = 0;
      this.width = 0;
      this.message = 'Mission aborted.';
      this.takeOffEnabled = true;
      rocketImage.style.bottom = '0px';
      rocketImage.style.left = '0px';
    }
  }

  gutterCheck(width, height) {
    if (width > 260000 || width < 0 || height < 0 || height > 340000) {
      this.color = 'orange';
    } else {
      this.color = 'blue';
    }
  }

  moveRocket(rocketImage, direction)
  {
    if (direction === 'right') {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    } else if (direction === 'left') {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width= this.width - 10000;
    } else if (direction === 'down') {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
    } else {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
    }
    this.gutterCheck(this.width, this.height);
  }
}
