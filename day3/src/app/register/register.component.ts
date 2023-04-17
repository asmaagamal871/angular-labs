import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userName = "";
  userAge = "";
  @Output() myEvent = new EventEmitter();
  add() {
    let newStudent = { name: this.userName, age: this.userAge };
    if (+this.userAge < 40 && +this.userAge > 20 && this.userName.length >= 3)
      this.myEvent.emit(newStudent);

    this.userName = "";
    this.userAge = "";
  }

}
