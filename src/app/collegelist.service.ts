import { Injectable } from '@angular/core';
import { college } from './collegeInterface';

@Injectable({
  providedIn: 'root'
})
export class CollegelistService {

  constructor() { }

  getColleges() : college [] {
    return [
      {
        id : 1,
        name : "COLLEGE OF SCIENCE",
        department : [
          {
            id : 1,
            name : "Mathematics",
            lecturers : 30,
            students : 2450,
            dean : "Abayomi Arigbabu"
          },

          {
            id : 2,
            name : "Physics",
            lecturers : 49,
            students : 2209,
            dean : "Dr. Adeogun Felix"
          },
          {
            id : 3,
            name : "Computer Science",
            lecturers : 49,
            students : 2209,
            dean : "Dr. Adeogun Felix"
          },
          {
            id : 4,
            name : "Biology",
            lecturers : 49,
            students : 2209,
            dean : "Dr. Juniad Saheedat"
          },
          {
            id : 5,
            name : "Bio-Chemistry",
            lecturers : 49,
            students : 2209,
            dean : "Dr. Hameed Jubril"
          },
          {
            id : 6,
            name : "Chemistry",
            lecturers : 49,
            students : 2209,
            dean : "Dr. Olajide Samson"
          },
        ]
      },
      {
        id : 2,
        name : "COLLEGE OF SOCIAL SCIENCE",
        department : [
          {
            id : 1,
            name : "Social Studies",
            lecturers : 30,
            students : 2450,
            dean : "Adejo Tofunmi"
          },

          {
            id : 2,
            name : "Economics",
            lecturers : 49,
            students : 2209,
            dean : "Dr. Sanusi Uthman"
          },
          {
            id : 3,
            name : "Political Science",
            lecturers : 49,
            students : 2209,
            dean : "Dr. Rafiu Aleshinloye"
          },
          {
            id : 4,
            name : "Geography",
            lecturers : 49,
            students : 2209,
            dean : "Dr. Idowu Olayemi"
          },
          {
            id : 5,
            name : "Pyschology",
            lecturers : 49,
            students : 2209,
            dean : "Dr. Kehinde Odulaja"
          },
        ]
      },
      {
        id : 3,
        name : "COLLEGE ENGINEERING",
        department : [
          {
            id : 1,
            name : "Computer Engineering",
            lecturers : 70,
            students : 12300,
            dean : "Dr. Akomolafe Helen"
          },

          {
            id : 2,
            name : "Electrical Electronic",
            lecturers : 49,
            students : 2209,
            dean : "Dr. Owoduni Jalalatulahi"
          },

          {
            id : 3,
            name : "Civil Engineering",
            lecturers : 29,
            students : 12209,
            dean : "Pro.  Babatunde Joshua"
          },

          {
            id : 4,
            name : "Mechanical Engineering",
            lecturers : 29,
            students : 12209,
            dean : "Pro. Adejo Opeyemi"
          },

          {
            id : 5,
            name : "Frontend Engineering",
            lecturers : 29,
            students : 12209,
            dean : "Pro. Divine Ogboona"
          },
        ]
      },
      {
        id : 4,
        name : "COLLEGE OF MANAGEMENT",
        department : [
          {
            id : 1,
            name : "Accounting",
            lecturers : 30,
            students : 2450,
            dean : "Oduwusi Emmanuel"
          },

          {
            id : 2,
            name : "Business Administration",
            lecturers : 49,
            students : 2209,
            dean : "Dr. Badejo Esinlokun"
          },
          {
            id : 3,
            name : "Marketing",
            lecturers : 49,
            students : 2209,
            dean : "Dr. Sulaiman Faruq"
          },
          {
            id : 4,
            name : "Banking and Finanace",
            lecturers : 49,
            students : 2209,
            dean : "Dr. Badmus Okoro"
          },
          {
            id : 5,
            name : "Industrial Relation and Personnel Management",
            lecturers : 49,
            students : 2209,
            dean : "Dr. Badejo Esinlokun"
          },
          {
            id : 6,
            name : "Insurance",
            lecturers : 49,
            students : 2209,
            dean : "Dr. Erinle Badmus"
          },
        ]
      },
      {
        id : 5,
        name : "COLLEGE OF ENVIRONMENT",
        department : [
          {
            id : 1,
            name : "Department of Aquaculture and Fishries Management",
            lecturers : 30,
            students : 2450,
            dean : "Dr. Felix Bambo"
          },

          {
            id : 2,
            name : "Environmental Management and Toxicology",
            lecturers : 49,
            students : 2209,
            dean : "Dr. Ididowo Taiwo"
          },
          {
            id : 3,
            name : "Forestry and Wildlife Management",
            lecturers : 49,
            students : 2209,
            dean : "Dr. Ididowo Taiwo"
          },

          {
            id : 4,
            name :"Water Resources Management",
            lecturers : 49,
            students : 2209,
            dean : "Dr. Taiwo Kehinde"
          },
          {
            id : 5,
            name : "Agro Meterology",
            lecturers : 49,
            students : 2209,
            dean : "Dr. Alugbin Oluwasyi"
          },
        ]
      }

    ]
  }
}
