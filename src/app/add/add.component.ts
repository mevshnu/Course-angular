import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  courseTitle=""
  courseDescription=""
  courseDuration=""
  courseDate=""
  courseVenue=""

constructor(private api:ApiService){}

  readValue=()=>
  {
    let data:any={"courseTitle":this.courseTitle,"courseDescription":this.courseDescription,"courseDuration":this.courseDuration,"courseDate":this.courseDate,"courseVenue":this.courseVenue}
    console.log(data)
    this.api.addCourse(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if(response.status == "success" )
        {
          alert("course added successfully")
          this.courseTitle=""
          this.courseDescription=""
          this.courseDuration=""
          this.courseDate=""
          this.courseVenue=""
        }
        else
        {
          alert("something went wrong")
        }
      }
    )
  }
}
