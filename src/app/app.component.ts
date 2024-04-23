import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from "./components/user-profile/user-profile.component";
import { CommonModule } from "@angular/common";
import { User } from "../models/user";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserProfileComponent,CommonModule],
  templateUrl: './app.component.html',

  styleUrl: './app.component.css'
})
export class AppComponent {
  users=[
  {
    name:"Ram",
    isSingle:true,
    salary:9
  },
  {
    name:"Shyam",
    isSingle:false,
    salary:8
  },
  {
    name:"Ganesh",
    isSingle:true,
    salary:8
  }
]
receivedData(e:User){
  console.log(e); 
 const userIndex= this.users.findIndex(user=>user.name == e.name)
 this.users[userIndex].salary=e.newSalary
}

}
