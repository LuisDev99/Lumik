/// <reference types="react-scripts" />

declare module "react-click-n-hold" {
  import React from "react";
  
  interface ClickNHoldProps {
    time?: number;
    children?: React.ReactNode;
    onStart?: () => void;
    onClickNHold?: () => void;
    onEnd?: () => void;
  }

  export default class ClickNHold extends React.Component<ClickNHoldProps> { }
}