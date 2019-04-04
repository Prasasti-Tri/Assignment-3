import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetApiService } from 'src/app/Service/get-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name: string;
  posts: any;
  count: any;

  constructor(private router: Router,private service: GetApiService) { }

  ngOnInit() {
    this.service.getBookingsCount().subscribe(response => {
      this.posts= response;
      this.count = this.posts.length;
      console.log(this.count);
    })
    this.name = localStorage.getItem('name');
    // console.log(name);
    this.router.navigate(['/private/navbar/details']);
  }

  logout(){
    localStorage.clear();
  }
}
