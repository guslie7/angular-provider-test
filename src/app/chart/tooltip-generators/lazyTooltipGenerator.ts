import { ShowTooltip } from '../types';
import { Injectable } from '@angular/core';

@Injectable()
export class LazyTooltipGenerator implements ShowTooltip<{lazy: boolean}> {
  createTooltip(data: {lazy: boolean}) {
    return `Tooltip preguiça: ${ JSON.stringify(data) }`;
  }
}
