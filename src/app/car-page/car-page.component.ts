import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})
export class CarPageComponent implements OnInit {

  id: number;
  name: string;
  color: string;
  year: string;
  hash: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.year = this.route.snapshot.queryParams['year'];
    this.color = this.route.snapshot.queryParams['color'];
    this.hash = this.route.snapshot.fragment;


    this.route.params.subscribe((params: Params) => {
        this.id = +params['id'];
        this.name = params['name'];
    });

    this.route.queryParams.subscribe((params: Params) => {
        this.year = params['year'];
        this.color = params['color'];
    });

    this.route.fragment.subscribe((data) => {
        this.hash = data;
    });
  }

  openMazda() {
    this.router.navigate(['/cars', 10, 'mazda'], {
      queryParams: {
        color: 'red',
        year: 2018
      },
      fragment: 'yo',
    });
  }
}
