import { Component, OnInit } from '@angular/core';
import { college } from '../collegeInterface';
import { CollegelistService } from '../collegelist.service';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {

  Colleges : college [] = []

  constructor(private collegelist : CollegelistService) { }

  ngOnInit(): void {
    this.Colleges = this.collegelist.getColleges()
  }

}
