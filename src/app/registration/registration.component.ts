import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NoteappService} from '../noteapp.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegistrationComponent implements OnInit {
  constructor(private noteService: NoteappService) { }
  user = {
    name: 'Archil',
    email: 'archil@gmail.com',
    password: 'aaaa',
    confirmedPassword: 'aaaa'
  };
  id = '7D900474-7EB3-E711-8302-AC9E17413A67';
  sendData(): void {
    console.log(this.user);
  }
  getUser(id): void {
    this.noteService.getUser(id)
    .then(result => console.log(result))
    .catch(error => console.log(error));
  }

  ngOnInit() {
    this.getUser(this.id);
  }

}
