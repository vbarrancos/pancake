import React from "react";
import styled from "styled-components";
import { BaseElement } from "./base";

export class Title extends BaseElement {
  constructor() {
    super();
    this.type = "Title";
    this.height = 40;
    this.width = 160;
    this.text = "";
  }

  static MAX_HEIGHT = 500;
  static MAX_WIDTH = 1000;
  static COMPONENT = props => <h1>{props.element.text}</h1>;
}

export class Header extends BaseElement {
  constructor() {
    super();
    this.type = "Header";
    this.height = 30;
    this.width = 150;
    this.text = "";
  }

  static MAX_HEIGHT = 500;
  static MAX_WIDTH = 1000;
  static COMPONENT = props => <h3>{props.element.text}</h3>;
}

export class Paragraph extends BaseElement {
  constructor() {
    super();
    this.type = "Paragraph";
    this.height = 20;
    this.width = 200;
    this.text = "";
  }

  static MAX_HEIGHT = 500;
  static MAX_WIDTH = 1000;
  static COMPONENT = props => <p>{props.element.text}</p>;
}
