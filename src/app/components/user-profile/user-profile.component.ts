import { CommonModule } from "@angular/common";
import { Component, isSignal } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
   name="ram";
   status="single";
   salary=8829839000;
   isBtnDisabled=false;
   inputValue="test";

users=[
  {
    name:"Ram",
    isSingle:true,
    salary:9
  },
  {
    name:"Shyam",
    isSingle:false,
    salary:8829839000
  },
  {
    name:"Ganesh",
    isSingle:false,
    salary:893738000
  }
]
   
  //  onChange(e:Event){
  //   const value =(e.target as HTMLInputElement).value;
  //  this.inputValue=value
  //  }
}
