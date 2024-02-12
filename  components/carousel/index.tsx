import * as React from "react";

interface ICarouselProps {
  slides: React.ReactElement[];
  chachedSlides?: boolean;
  duration?: number;
  animationDuration?: number;
  animationTimingFunction?: string;
  animationType?: "FADE" | "SLIDE" | "ZOOM";
  animationDelay?: number;
  withNavigation?: boolean;
}

interface ICarouselState {
  active: number;
  nextActive: number;
}

interface IAction {
  type: string;
  index?: number;
}
import Styles from './carousel.module.css'

export default function Carousel(props: ICarouselProps): React.ReactElement {
  let [state, dispatch] = React.useReducer(
    (state: ICarouselState, action: IAction) => {
      switch (action.type) {
        case "NEXT":
          return {
            active: state.nextActive,
            nextActive: (state.nextActive + 1) % props.slides.length
          };
        case "CUSTOM":
          return {
            active: action.index,
            nextActive: (action.index + 1) % props.slides.length
          };
        default:
          throw new Error();
      }
    },
    { active: 0, nextActive: 1 }
  );

  let timerId: any = React.useRef();

  React.useEffect(() => {
    clearTimeout(timerId.current);
    timerId.current = setTimeout(() => {
      dispatch({ type: "NEXT" });
    }, props.duration || 1000);
    return () => clearTimeout(timerId.current);
  }, [state.nextActive, props.duration]);

  return (
    <div style={styles.container} className="animated-carousel-container">
      {(props.slides || []).map((slide, index) => (
        <div
          key={index}
          style={{
            ...styles.item,
            ...getAnimationStyle({
              index,
              activeIndex: state.active,
              nextActiveIndex: state.nextActive,
              animationType: props.animationType,
              duration: props.animationDuration,
              timingFunction: props.animationTimingFunction,
              animationDelay: props.animationDelay
            })
          }}
          className="animated-carousel-item"
        >
          {slide}
        </div>
      ))}
      {props.withNavigation && (
        <div className={Styles.animatedCarouselDots}>
          {props.slides.map((slide, index) => (
            <button
              key={`${index}`}
              className={`${Styles.animatedCarouselDot} ${index === state.active ? "Active" : ""
                }`.trim()}
              onClick={(e: React.SyntheticEvent) =>
                dispatch({ type: "CUSTOM", index })
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}

let styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    height: "100%"
  },
  item: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  animatedCarouselDots: {
    position: "absolute",
    bottom: "5px",
    width: "100%",
    height: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex:1
  },
  animatedCarouselDot: {
    background: "#0000",
    border: "none",
    height: "10px",
    width: "10px",
    margin: "3px",
    borderRadius: "50%",
    cursor: "pointer",
    outline: "none",
    transition: "background 0.2s ease-out"
  },

  animatedCarouselDotActive: {
    background: "#555"
  }



};

function getAnimationStyle({
  index,
  activeIndex,
  nextActiveIndex,
  animationType,
  duration,
  timingFunction,
  animationDelay
}) {
  let style: React.CSSProperties;
  let transitionPostfix: string = `${(duration || 700) /
    1000}s  ${timingFunction ||
    "cubic-bezier(0.1, 0.99, 0.1, 0.99)"} ${(animationDelay || 100) / 1000}s`;
  switch (animationType) {
    case "FADE":
      style = {
        opacity: activeIndex === index ? 1 : 0,
        transition: `opacity ${transitionPostfix}`
      };
      break;
    case "SLIDE":
      style = {
        transform: `translateX(${(index - activeIndex) * 100}%)`,
        transition: `transform ${transitionPostfix}`
      };
      break;
    case "ZOOM":
      style = {
        transform: `scale(${activeIndex === index ? 1 : 2})`,
        opacity: activeIndex === index ? 1 : 0,
        transition: `transform ${transitionPostfix}, opacity ${transitionPostfix}`
      };
      break;
    default:
      style = {
        opacity: activeIndex === index ? 1 : 0,
        transition: "none"
      };
  }

  return {
    ...style,
    zIndex: activeIndex === index ? 1 : 0
  };
}
