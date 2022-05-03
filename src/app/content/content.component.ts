import { Component, OnInit, Input } from '@angular/core';
import { college } from '../collegeInterface';
import { CollegelistService } from '../collegelist.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  @Input() public college!: college;

  departmentDetails : any = ""
  constructor() { }

  ngOnInit(): void {

  }
  viewDetails(dept:any) {
    console.log(dept)
    this.departmentDetails = dept

  }
  toggle(){
    console.log("Hello")
  }
}
