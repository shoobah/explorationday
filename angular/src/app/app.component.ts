import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ExplorationDay';

  results: object;
  
   // Inject HttpClient into your component or service.
   constructor(private http: HttpClient) {}
  
   ngOnInit(): void {
     // Make the HTTP request:
     this.http.get('http://localhost:3000/getall').subscribe(data => {
       // Read the result field from the JSON response.
       this.results = data;
       console.log(data);
     });
   }
}
