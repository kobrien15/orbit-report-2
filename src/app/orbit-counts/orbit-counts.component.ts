import { Component, OnChanges, Input, OnInit } from '@angular/core';
import { Satellite } from '../satellite';
import { Counts } from "../counts";

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})

export class OrbitCountsComponent implements OnInit, OnChanges {

  @Input() satellites: Satellite[];
  counts: Counts;

  constructor() { 
    this.counts = {
      total: 0,
      debris: 0,
      communication: 0,
      probe: 0,
      positioning: 0,
      station: 0,
      telescope: 0
    }

  }

  ngOnInit() {

  }

  ngOnChanges() {
    this.satCounts();
  }


  satCounts() {
    // reset each satellite count to 0 
    for (let property in this.counts) {
      this.counts[property] = 0;
    }
    this.counts.total = this.satellites.length; // set total count
    for(let i=0; i<this.satellites.length; i++) {
      //increment satellite count by satellite type
      if (this.satellites[i].type.toLowerCase() === 'space debris') {
        this.counts.debris++;
      } 
      if (this.satellites[i].type.toLowerCase() === 'communication') {
        this.counts.communication++
      };
      if (this.satellites[i].type.toLowerCase() === 'probe') {
        this.counts.probe++
      };
      if (this.satellites[i].type.toLowerCase() === 'positioning') {
        this.counts.positioning++
      };
      if (this.satellites[i].type.toLowerCase() === 'space station') {
        this.counts.station++
      };
      if (this.satellites[i].type.toLowerCase() === 'telescope') {
        this.counts.telescope++
      };
    }
    return this.counts;
    
  }
  
}


