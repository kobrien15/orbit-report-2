import { Component, Input } from '@angular/core';
import { Satellite } from './satellite';

export interface Counts {
    total: number;
    debris: number;
    communication: number;
    probe: number;
    positioning: number;
    station: number;
    telescope: number;
}
