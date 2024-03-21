import React from "react";
import "./ProgressStep.css";

export default function ProgressStep({
  orientation,
  steps,
  currentStepIndex,
  stepName,
  description,
  editDescription,
  line,
}) {
  return (
    <div className={`progress-step ${orientation}`}>
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step ${index === currentStepIndex ? "current" : index < currentStepIndex ? "previous" : "next"}`}
        >
          <div style={{ display: "flex" }}>
            <div
              className={`circle ${index <= currentStepIndex ? "current" : "previous"}`}
            >
              {index < currentStepIndex ? "✔️" : index + 1}
            </div>
            <div
              className={`${orientation === "vertical" ? "vertical" : "horizontal"}`}
            >
              {line && index < steps.length - 1 && (
                <div
                  className={`connector ${index < currentStepIndex ? "success" : "failure"}`}
                />
              )}
            </div>
          </div>
          <div className="step-info">
            <div className="title">{step.title || stepName}</div>
            {(orientation === "vertical" || editDescription) && (
              <div className="description">
                {step.description || description}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
