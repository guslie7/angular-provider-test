import { ShowTooltip } from '../types';
import { Injectable } from '@angular/core';

@Injectable()
export class DefaultTooltipGenerator implements ShowTooltip<unknown> {
  createTooltip(data: unknown) {
    return `Tooltip padrão: ${ JSON.stringify(data) }`;
  }
}
