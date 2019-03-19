import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  currentTechId: String = '';
  currentTech: String = '';
  correctCollection: number = null;
  incorrectCollection: number = null;
}