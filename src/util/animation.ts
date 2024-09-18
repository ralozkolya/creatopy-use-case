import { Keyframes, keyframes } from "@emotion/react";
import { JsonEaseType, JsonTransition } from "../types/jsonDesign.types";

function offset(transition: JsonTransition): { x: number; y: number } {
  switch (transition.direction) {
    case "l2r":
      return { x: -transition.slideOffset, y: 0 };
    case "r2l":
      return { x: transition.slideOffset, y: 0 };
    case "b2t":
      return { x: 0, y: transition.slideOffset };
    default:
      return { x: 0, y: -transition.slideOffset };
  }
}

function slide(transition: JsonTransition) {
  const { x, y } = offset(transition);

  return keyframes({
    from: {
      transform: `translate(${x}px, ${y}px)`,
      opacity: `${transition.alphaOffset / 100}`,
    },
    to: {
      transform: `translate(0, 0)`,
      opacity: 1,
    },
  });
}

function alpha() {
  return keyframes({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });
}

function easingFunction(easing: JsonEaseType) {
  switch (easing) {
    case "easeIn":
      return "ease-in";
    case "easeOut":
      return "ease-out";
    case "easeInOut":
      return "ease-in-out";
    default:
      return easing;
  }
}

function insertKeyframes(keyframes: Keyframes, transition: JsonTransition) {
  return {
    animation: `${keyframes} ${transition.duration}s ${easingFunction(
      transition.ease
    )}`,
    animationDelay: `${transition.delay}s`,
    opacity: `${transition.alphaOffset ?? 0}`,
    animationFillMode: "forwards",
  };
}

export function animation(transition: JsonTransition) {
  switch (transition.type) {
    case "slide":
      return insertKeyframes(slide(transition), transition);
    case "alpha":
      return insertKeyframes(alpha(), transition);

    default:
      return {};
  }
}
