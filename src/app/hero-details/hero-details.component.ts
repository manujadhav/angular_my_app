import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.model';


@Component({
	selector: 'app-hero-details',
	templateUrl: './hero-details.component.html',
	styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

	public title: string = 'Hero Details';
	public hero: Hero = <Hero>{};
	constructor() { }

	ngOnInit() {

	}
}


