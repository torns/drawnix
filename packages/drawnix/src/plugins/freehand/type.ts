import { DEFAULT_COLOR, Point } from '@plait/core';
import { PlaitCustomGeometry } from '@plait/draw';

export const DefaultFreehand = {
  strokeColor: DEFAULT_COLOR,
  strokeWidth: 2,
};

export enum FreehandShape {
  nibPen = 'nibPen',
  feltTipPen = 'feltTipPen',
  artisticBrush = 'artisticBrush',
  markerHighlight = 'markerHighlight',
}

export const FREEHAND_TYPE = 'freehand';

export type Freehand = PlaitCustomGeometry<typeof FREEHAND_TYPE, Point[], FreehandShape>

export const Freehand = {
  isFreehand: (value: any): value is Freehand => {
    return value.type === FREEHAND_TYPE;
  },
};
