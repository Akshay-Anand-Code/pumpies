import { useEffect, useRef, useState } from "react";
import { FireIcon } from "./FireIcon";
import { BurnPage } from "@/sections/BurnPage";

export const ScrollTransition = () => {
  const [transitionState, setTransitionState] = useState<
    "idle" | "intro" | "expanding" | "complete"
  >("idle");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBurnPage, setShowBurnPage] = useState(false);
  
  const transitionRef = useRef<HTMLDivElement>(null);
  const fireSquareRef = useRef<HTMLDivElement>(null);
  const scrollDeltaRef = useRef(0);
  const isTransitioningRef = useRef(false);
  const savedScrollYRef = useRef(0);

  useEffect(() => {
    let wheelDelta = 0;
    let animationFrame: number | null = null;

    const handleWheel = (e: WheelEvent) => {
      // Handle scroll during transition OR when on completed burn page
      if (isTransitioningRef.current || transitionState === "complete") {
        e.preventDefault();
        
        // Accumulate wheel delta
        wheelDelta += e.deltaY;
        
        // Use requestAnimationFrame for smooth updates
        if (!animationFrame) {
          animationFrame = requestAnimationFrame(() => {
            const currentWheelDelta = wheelDelta;
            
            // If on complete page and scrolling up, start reversing
            if (transitionState === "complete" && currentWheelDelta < 0) {
              setTransitionState("expanding");
              isTransitioningRef.current = true;
              scrollDeltaRef.current = 500; // Start from 100% progress
              setShowBurnPage(true);
            }
            
            scrollDeltaRef.current += currentWheelDelta;
            wheelDelta = 0;
            
            // Reverse if scrolling up significantly
            if (scrollDeltaRef.current <= 0) {
              // Reset transition
              isTransitioningRef.current = false;
              setTransitionState("idle");
              setScrollProgress(0);
              setShowBurnPage(false);
              scrollDeltaRef.current = 0;
              
              // Restore scroll - get the saved position first
              const scrollPosition = savedScrollYRef.current;
              
              // Restore body scroll ability
              document.body.style.overflow = "";
              document.body.style.position = "";
              document.body.style.top = "";
              document.body.style.width = "";
              
              // Restore scroll position after a small delay to ensure body is unlocked
              requestAnimationFrame(() => {
                window.scrollTo({ top: scrollPosition, behavior: 'instant' });
              });
            } else {
              // Update progress
              const progress = Math.max(0, Math.min(100, scrollDeltaRef.current / 5));
              setScrollProgress(progress);
              
              // Show burn page when scale reaches threshold
              if (progress >= 50 && !showBurnPage) {
                setShowBurnPage(true);
              }
              
              // Hide burn page when reversing
              if (progress < 50 && showBurnPage) {
                setShowBurnPage(false);
              }
              
              // Complete transition
              if (progress >= 100 && transitionState !== "complete") {
                setTransitionState("complete");
                isTransitioningRef.current = false;
              }
            }
            
            animationFrame = null;
          });
        }
      }
    };

    const handleScroll = () => {
      if (!isTransitioningRef.current && transitionState === "idle") {
        const scrollY = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = window.innerHeight;
        const maxScroll = scrollHeight - clientHeight;
        
        // Trigger transition when user reaches near the bottom (within 200px)
        const triggerPoint = maxScroll - 200;

        if (scrollY >= triggerPoint) {
          // Start transition
          isTransitioningRef.current = true;
          savedScrollYRef.current = scrollY;
          scrollDeltaRef.current = 0;
          setTransitionState("intro");
          
          // Prevent body scroll
          document.body.style.overflow = "hidden";
          document.body.style.position = "fixed";
          document.body.style.top = `-${scrollY}px`;
          document.body.style.width = "100%";
          
          // Intro animation
          setTimeout(() => {
            setTransitionState("expanding");
          }, 300);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [transitionState, showBurnPage]);

  // Calculate transform values
  const getTransformValues = () => {
    if (transitionState === "idle") {
      return { scale: 0.2, rotation: 0, opacity: 0 };
    } else if (transitionState === "intro") {
      return { scale: 1, rotation: 0, opacity: 1 };
    } else if (transitionState === "expanding") {
      const scale = 1 + (scrollProgress / 100) * 19; // Scale from 1 to 20
      const rotation = scrollProgress * 3.6; // 0 to 360 degrees
      const opacity = scrollProgress >= 80 ? 1 - ((scrollProgress - 80) / 20) : 1;
      return { scale, rotation, opacity };
    } else {
      return { scale: 20, rotation: 360, opacity: 0 };
    }
  };

  const { scale, rotation, opacity } = getTransformValues();

  // Show transition elements during all states except idle
  if (transitionState === "idle") {
    return null;
  }

  return (
    <>
      {/* Transition overlay */}
      <div
        ref={transitionRef}
        className="fixed inset-0 z-[9999] pointer-events-none"
        style={{
          isolation: "isolate",
        }}
      >
        {/* Fire square */}
        <div
          ref={fireSquareRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: "60px",
            height: "60px",
            transform: `translate(-50%, -50%) scale(${scale}) rotate(${rotation}deg)`,
            transformOrigin: "center center",
            opacity: opacity,
            transition: transitionState === "intro" ? "all 300ms ease-out" : "none",
            willChange: "transform, opacity",
            backgroundColor: "#FEF9C3",
            borderRadius: transitionState === "intro" ? "8px" : "0px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FireIcon className="w-10 h-10" />
        </div>
      </div>

      {/* Burn page behind */}
      {showBurnPage && (
        <div
          className="fixed inset-0 z-[9998]"
          style={{
            opacity: transitionState === "complete" ? 1 : Math.max(0, (scrollProgress - 60) / 40),
            transition: transitionState === "complete" ? "opacity 400ms ease-in" : "none",
          }}
        >
          <BurnPage />
        </div>
      )}
    </>
  );
};

