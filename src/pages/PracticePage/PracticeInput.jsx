import React from "react";
import "./PracticePage.css";

export const PracticeInput = ({data, reset, questionHook, setQuestionHook, questionNo, answerX}) => {
    return(
        <div className="flex-row fit-content practiceInputContainer" onClick={() => {;
            reset();
            setQuestionHook(!questionHook);
            data.detail[questionNo - 1].answer = answerX;
        }}>
            <input type="radio" className="radio-button" checked={questionHook || data.detail[questionNo - 1].answer == answerX} onChange={() => {
                reset();
                setQuestionHook(!questionHook);
                data.detail[questionNo - 1].answer = answerX;
            }} name={`answer${questionNo}`} id={`answer${questionNo}`}/>
            <h4 style={{marginLeft: "5px"}}>{answerX}</h4> 
        </div>
    )
}