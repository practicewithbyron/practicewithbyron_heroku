import React from "react";
import "./PracticePercentageBar.css";

export const PracticePercentageBar = ({correct, incorrect, skipped}) => {
    return(
        <div className="flex-row practiceBarContainer title">
            <div className="flex-row practiceBarElement correct" style={{flexGrow: correct}}>
                <h4 style={{margin: "auto"}}>{(correct / (incorrect + skipped + correct)).toFixed(2) * 100}%</h4>
            </div>
            <div className="flex-column practiceBarElement incorrect" style={{flexGrow: incorrect}}>
                <h4 style={{margin: "auto"}}>{(incorrect / (incorrect + skipped + correct)).toFixed(2) * 100}%</h4>
            </div>
            <div className="flex-row practiceBarElement skipped" style={{flexGrow: skipped}}>
                <h4 style={{margin: "auto"}}>{(skipped / (incorrect + skipped + correct)).toFixed(2) * 100}%</h4>
            </div>
        </div>
    )
}