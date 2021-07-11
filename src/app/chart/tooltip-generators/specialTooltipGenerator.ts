import { ShowTooltip } from '../types';
import { Injectable } from '@angular/core';

interface ComplexType {
  column: string;
  row: {
    count: number;
    label: string;
  }
}

@Injectable()
export class SpecialTooltipGenerator implements ShowTooltip<ComplexType> {
  
  createTooltip(data: ComplexType) {
    return `Special: ${ data.row.label } - ${ data.row.count }`;
  }
}