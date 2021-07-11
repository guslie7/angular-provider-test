import { ShowTooltip } from '../types';
import { Injectable } from '@angular/core';

interface ComplexTypeWithATwist {
  column: string;
  row: {
    count: number;
    label: string;
  }
  twist: number[];
}

@Injectable()
export class MoreThanSpecialTooltipGenerator implements ShowTooltip<ComplexTypeWithATwist> {
  
  createTooltip(data: ComplexTypeWithATwist) {
    return `Special with a twist: ${ data.row.label } - ${ data.twist.join(',') }`;
  }
}