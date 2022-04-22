import { Component, OnInit, Input } from '@angular/core';
import { college } from '../collegeInterface';
import { CollegelistService } from '../collegelist.service';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {
  @Input() public collegeName: string = ''
  displayCollege : boolean = false;

  selectedCollege! : college

  isClose : boolean = false


  width = window.innerWidth
  displayContent : boolean = true
  Colleges : college[] = []
  sideNav = document.querySelector('.side-menu') as HTMLElement


  constructor(private collegelist: CollegelistService) { }

  ngOnInit(): void {
    this.Colleges = this.collegelist.getColleges()
    console.log('The screen width is '+ window.innerWidth)

    
    setInterval(()=>{
      this.width = window.innerWidth
      // if(this.width < 1200){
      //   this.displayContent = false
      // } 
    },1000 )

    if(this.width < 1200) {
      this.displayContent = false
    }
    window.onclick = function(event) {
      let sideNav = document.querySelector('.side-menu') as HTMLElement
      if(event.target == sideNav ) {
          sideNav.style.width='7%'
      }
    }
  }

  onDisplayTouch() {
    this.displayCollege = !this.displayCollege
  }

  showDetails(data: college) {
    this.collegeName = data.name
    this.selectedCollege = data
  }
  toggle() {
    // gettting the dom of the parent element to increase the width and display details  
    let sideNav = document.querySelector('.side-menu') as HTMLElement
    sideNav.style.width='13rem'
    this.displayContent = true
    this.isClose = true
  }

  close () {
    // gettting the dom of the parent element to decrease the width and close the divs
    let sideNav = document.querySelector('.side-menu') as HTMLElement
    sideNav.style.width='7%'
    this.displayContent = false
    this.isClose = false
  }
  

}