import * as React from "react";
import * as Scroll from "react-scroll";
import TutorialSpotIcon from "./icons/tutorialSpot";
import TutorialModal from "./TutorialModal";

const TutorialOverlay = () => {
  const [tutorialStep, setTutorialStep] = React.useState<number>(0);

  React.useEffect(() => {
    if (tutorialStep > 6) setTutorialStep(0);
  }, [tutorialStep]);

  const currentTutorial = (step: number) => {
    switch (step) {
      case 1:
        return (
          <TutorialModal
            offset={1250}
            onClose={() => setTutorialStep(0)}
            onContinue={() => {
              Scroll.animateScroll.scrollTo(1200);
              setTutorialStep(tutorialStep + 1);
            }}
          >
            <p>
              When you want to add or remove an entire recycling system, you can
              click these buttons to toggle everything at once. Try click on the
              button to see which factories appear and disapear.
            </p>
          </TutorialModal>
        );
      case 2:
        return (
          <TutorialModal
            offset={1700}
            onClose={() => setTutorialStep(0)}
            onContinue={() => {
              Scroll.animateScroll.scrollTo(1500);
              setTutorialStep(tutorialStep + 1);
            }}
          >
            <p>
              Want to add some plastic to the system? Click the recycle symbol
              and watch the plastic object start its journey through the system.
              You can add multiple items at once.
            </p>
          </TutorialModal>
        );
      case 3:
        return (
          <TutorialModal
            offset={1900}
            onClose={() => setTutorialStep(0)}
            onContinue={() => {
              Scroll.animateScroll.scrollTo(2200);
              setTutorialStep(tutorialStep + 1);
            }}
          >
            <p>
              When plastic moves through a factory then it will be processed
              into another form. Here, plastic bottles are compressed together
              into bales.
            </p>
          </TutorialModal>
        );
      case 4:
        return (
          <TutorialModal
            offset={2500}
            onClose={() => setTutorialStep(0)}
            onContinue={() => {
              Scroll.animateScroll.scrollTo(2400);
              setTutorialStep(tutorialStep + 1);
            }}
          >
            <p>
              You can remove factories by clicking on them or add them back by
              clicking the (+). If a factory is missing then plastic that ends
              up there will fall through as trash.
            </p>
          </TutorialModal>
        );
      case 5:
        return (
          <TutorialModal
            offset={2800}
            onClose={() => setTutorialStep(0)}
            onContinue={() => {
              Scroll.animateScroll.scrollTo(0);
              setTutorialStep(tutorialStep + 1);
            }}
          >
            <p>
              Once the plastic has been refined, it can be sent for
              manufacturing into consumable products. Follow the plastic back up
              to its next destination.
            </p>
          </TutorialModal>
        );
      case 6:
        return (
          <TutorialModal
            offset={500}
            onClose={() => setTutorialStep(0)}
            onContinue={() => {
              Scroll.animateScroll.scrollTo(1000);
              setTutorialStep(tutorialStep + 1);
            }}
          >
            <p>
              When plastic is manufactured into consumable products, sometimes
              its plastic type is changed. Hopefully your system has the next
              type of plastic recycling system.
            </p>
          </TutorialModal>
        );
      default:
        break;
    }
  };
  return (
    <div
      style={{
        position: "absolute",
        width: "1050px",
      }}
    >
      <TutorialSpotIcon
        number={1}
        offset={1515}
        onClick={() => {
          Scroll.animateScroll.scrollTo(1000);
          setTutorialStep(1);
        }}
      />
      <TutorialSpotIcon
      number={2}
        offset={1600}
        onClick={() => {
          Scroll.animateScroll.scrollTo(1200);
          setTutorialStep(2);
        }}
      />
      <TutorialSpotIcon
      number={3}
        offset={1900}
        onClick={() => {
          Scroll.animateScroll.scrollTo(1500);
          setTutorialStep(3);
        }}
      />
      <TutorialSpotIcon
      number={4}
        offset={2500}
        onClick={() => {
          Scroll.animateScroll.scrollTo(2200);
          setTutorialStep(4);
        }}
      />
      <TutorialSpotIcon
      number={5}
        offset={2800}
        onClick={() => {
          Scroll.animateScroll.scrollTo(2400);
          setTutorialStep(5);
        }}
      />
      <TutorialSpotIcon
      number={6}
        offset={500}
        onClick={() => {
          Scroll.animateScroll.scrollTo(0);
          setTutorialStep(6);
        }}
      />
      {tutorialStep > 0 ? currentTutorial(tutorialStep) : <div />}
    </div>
  );
};

export default TutorialOverlay;
