import { Generator } from '@plait/common';
import { PlaitBoard, setStrokeLinecap } from '@plait/core';
import { Options } from 'roughjs/bin/core';
import { DefaultFreehand, Freehand } from './type';
import { gaussianSmooth } from './utils';

export class FreehandGenerator extends Generator<Freehand> {
  protected draw(element: Freehand): SVGGElement | undefined {
    const option: Options = { ...DefaultFreehand };
    const g = PlaitBoard.getRoughSVG(this.board).curve(
      gaussianSmooth(element.points, 1.2, 4),
      option
    );
    setStrokeLinecap(g, 'round');
    return g;
  }

  canDraw(element: Freehand): boolean {
    return true;
  }
}
