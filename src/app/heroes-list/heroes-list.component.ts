import { Component, OnInit } from '@angular/core';
import { Hero } from './../hero-details/hero.model';

@Component({
	selector: 'app-heroes-list',
	templateUrl: './heroes-list.component.html',
	styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
	public heroes: Hero[] = [];
	public selectedHero: Hero;

	constructor() {
		this.heroes = HEROES;
	}

	userSelected(hero: Hero) {
		this.selectedHero = hero !== this.selectedHero ? hero : null;
	}
	
	ngOnInit() {
	}

}


const HEROES: Hero[] = [
	{ id: 11, name: 'Mr. Nice' },
	{ id: 12, name: 'Narco' },
	{ id: 13, name: 'Bombasto' },
	{ id: 14, name: 'Celeritas' },
	{ id: 15, name: 'Magneta' },
	{ id: 16, name: 'RubberMan' },
	{ id: 17, name: 'Dynama' },
	{ id: 18, name: 'Dr IQ' },
	{ id: 19, name: 'Magma' },
	{ id: 20, name: 'Tornado' }
];