import * as React from "react";
interface ScreenshotDimensions {
    width: number;
    height: number;
}
export declare type WebcamProps = Omit<React.HTMLProps<HTMLVideoElement>, "ref"> & {
    audio: boolean;
    audioConstraints?: MediaStreamConstraints["audio"];
    forceScreenshotSourceSize: boolean;
    imageSmoothing: boolean;
    mirrored: boolean;
    overlay: string;
    serverUrl: string;
    minScreenshotHeight?: number;
    minScreenshotWidth?: number;
    onUserMedia: (stream: MediaStream) => void;
    onUserMediaError: (error: string | DOMException) => void;
    screenshotFormat: "image/webp" | "image/png" | "image/jpeg";
    screenshotQuality: number;
    videoConstraints?: MediaStreamConstraints["video"];
};
interface WebcamState {
    hasUserMedia: boolean;
    src?: string;
}
export default class Webcam extends React.Component<WebcamProps, WebcamState> {
    static defaultProps: {
        audio: boolean;
        forceScreenshotSourceSize: boolean;
        imageSmoothing: boolean;
        mirrored: boolean;
        overlay: null;
        serverUrl: null;
        onUserMedia: () => undefined;
        onUserMediaError: () => undefined;
        screenshotFormat: string;
        screenshotQuality: number;
    };
    private canvas;
    private ctx;
    private unmounted;
    stream: MediaStream | null;
    video: HTMLVideoElement | null;
    constructor(props: WebcamProps);
    componentDidMount(): void;
    componentDidUpdate(nextProps: WebcamProps): void;
    componentWillUnmount(): void;
    private static stopMediaStream;
    private stopAndCleanup;
    getScreenshot(screenshotDimensions?: ScreenshotDimensions): string | null;
    getCanvas(screenshotDimensions?: ScreenshotDimensions): HTMLCanvasElement | null;
    private requestUserMedia;
    private handleUserMedia;
    render(): JSX.Element;
}
export {};
