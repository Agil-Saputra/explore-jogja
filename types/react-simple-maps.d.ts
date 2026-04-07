declare module "react-simple-maps" {
  import { ComponentType, ReactNode, SVGProps } from "react";

  export interface ProjectionConfig {
    rotate?: [number, number, number];
    center?: [number, number];
    scale?: number;
    parallels?: [number, number];
  }

  export interface ComposableMapProps extends SVGProps<SVGSVGElement> {
    projection?: string;
    projectionConfig?: ProjectionConfig;
    width?: number;
    height?: number;
    children?: ReactNode;
  }

  export interface GeographiesChildrenArgs {
    geographies: GeographyType[];
  }

  export interface GeographiesProps {
    geography: string | object;
    children: (args: GeographiesChildrenArgs) => ReactNode;
  }

  export interface GeographyType {
    rsmKey: string;
    properties: Record<string, unknown>;
    type: string;
    geometry: object;
  }

  export interface GeographyProps extends SVGProps<SVGPathElement> {
    geography: GeographyType;
    onMouseEnter?: (event: React.MouseEvent<SVGPathElement>) => void;
    onMouseLeave?: (event: React.MouseEvent<SVGPathElement>) => void;
    onClick?: (event: React.MouseEvent<SVGPathElement>) => void;
    style?: {
      default?: React.CSSProperties;
      hover?: React.CSSProperties;
      pressed?: React.CSSProperties;
    };
  }

  export interface MarkerProps extends SVGProps<SVGGElement> {
    coordinates: [number, number];
    children?: ReactNode;
  }

  export interface AnnotationProps {
    subject: [number, number];
    dx?: number;
    dy?: number;
    children?: ReactNode;
    connectorProps?: SVGProps<SVGPathElement>;
  }

  export interface ZoomableGroupProps extends SVGProps<SVGGElement> {
    center?: [number, number];
    zoom?: number;
    minZoom?: number;
    maxZoom?: number;
    translateExtent?: [[number, number], [number, number]];
    onMoveStart?: (event: { coordinates: [number, number]; zoom: number }) => void;
    onMove?: (event: { coordinates: [number, number]; zoom: number; x: number; y: number; k: number; dragging: boolean }) => void;
    onMoveEnd?: (event: { coordinates: [number, number]; zoom: number }) => void;
    children?: ReactNode;
  }

  export const ComposableMap: ComponentType<ComposableMapProps>;
  export const Geographies: ComponentType<GeographiesProps>;
  export const Geography: ComponentType<GeographyProps>;
  export const Marker: ComponentType<MarkerProps>;
  export const Annotation: ComponentType<AnnotationProps>;
  export const ZoomableGroup: ComponentType<ZoomableGroupProps>;
}
