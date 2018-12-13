import { Injectable } from '@angular/core';
import { Invention } from './invention';

@Injectable({
    providedIn: 'root'
})

export class InventionService {
    rawInventions: Invention[] = [
        {
            id: 1,
            name: 'Java',
            inventor: 'James Ghosling',
            year: '1995',
            details: 'java is an object oriented language'
        },
        {
            id: 2,
            name: 'Python',
            inventor: 'Guido van Rosum',
            year: '1991',
            details: 'python is simple yet powerful scripting language'
        },
        {
            id: 3,
            name: 'C++',
            inventor: 'Bjarne Stroustrup',
            year: '1983',
            details: 'c++ is the language if you want to make things faster'
        }
    ];

    constructor() {}

    getInventions(): Invention[] {
        return this.rawInventions;
    }

    inventionDetails(id): Invention {
        for ( var i = 0 ; i < this.rawInventions.length ; i++ ) {
            if ( this.rawInventions[i].id === id ) {
                return this.rawInventions[i];
            }
        }
        return null;

    }
}
