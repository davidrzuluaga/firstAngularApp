import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  title = 'test-angular';

  friends: User[];
  inters: any;
  userClicked: string;
 
  constructor() {
    let u1: User = {
      nick: 'Eduardo',
      age: 24,
      email: 'ed@aoe.aoe',
      friend: true,
      uid: 1
    };
    let u2: User = {
      nick: 'Freddy',
      age: 28,
      email: 'fred@aoe.aoe',
      friend: true,
      uid: 1
    };
    let u3: User = {
      nick: 'Yuliana',
      age: 18,
      email: 'yuli@aoe.aoe',
      friend: true,
      uid: 1
    };
    let u4: User = {
      nick: 'Ricardo',
      age: 17,
      email: 'rick@aoe.aoe',
      friend: false,
      uid: 1
    };
    let u5: User = {
      nick: 'Marcos',
      age: 30,
      email:'marcos@aoe.aoe',
      friend: false,
      uid: 1
    };
    this.friends = [u1,u2,u3,u4,u5]
    this.userClicked = ""
  }
  
  sum(nick:string) {
    this.friends = this.friends.map(a=> { if (a.nick === nick) {return { ...a, uid: a.uid += a.uid }} else {return a} })
  }

  setUserClicked = (user:string) => this.userClicked = user

  sumEveryMinute() {
    this.inters = setInterval(()=>{
      this.sum(this.userClicked)
    }, 1000)
  }
  
  clear() {
    clearInterval(this.inters)
  }

  ngOnInit(): void {
  }

}
