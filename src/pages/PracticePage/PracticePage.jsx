import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../Loading/loading";
import { ReadAllCatalogQuestions } from "../../db/Read/ReadAllCatalogQuestions";
import { PracticeInput } from "./PracticeInput";
import { ReadCatalog } from "../../db/Read/ReadCatalog";
import { Link } from "react-router-dom";
import { MyChart} from "./PracticeChart";
import { PracticePercentageBar } from "./PracticePercentageBar";

import "../../App.css";
import "./PracticePage.css";
import { DisabledInput } from "./DisabledInput";

function toHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    if(minutes){
        return `${hours} hour${hours == 1 ? "" : "s"} and ${minutes} minutes`;
    }
    else{
        return `${hours} Hours`;
    }
}

export const PracticePage = () => {
    //Page states
    const [started, setStarted] = useState(false);
    const [finished, setFinished] = useState(false);
    const [reviewQuestions, setReviewQuestions] = useState(false);

    //ReadAllCatalogQuestions
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    //ReadCatalog
    const [isFetching2, setIsFetching2] = useState(true);
    const [error2, setError2] = useState(false);
    const [data2, setData2] = useState(false);

    //Checkboxes
    const [questionOne, setQuestionOne] = useState(false);
    const [questionTwo, setQuestionTwo] = useState(false);
    const [questionThree, setQuestionThree] = useState(false);
    const [questionFour, setQuestionFour] = useState(false);

    const resetCheckboxes = () => {
        setQuestionOne(false);
        setQuestionTwo(false);
        setQuestionThree(false);
        setQuestionFour(false);
    }

    const [knowledgeAreas, setKnowledgeAreas] = useState(null);
    const [correct, setCorrect] = useState([]);
    const [incorrect, setIncorrect] = useState([]);
    const [skipped, setSkipped] = useState([]);

    const {name} = useParams(); 

    const [questionNo, setQuestionNo] = useState(1);

    const CalculateResult = () => {
        //Creating a set of all the knowledge areas
        const knowledgeAreas = new Set([]);
        data.detail.map(el => {
            knowledgeAreas.add(el.knowledgeArea);
            //Sort questions

            console.log(el.answer);
            if(!el.answer)
            {
                setSkipped(skipped => [...skipped, el]);
            }
            else if(el.answer == el.correctAnswer)
            {
                setCorrect(correct => [...correct, el]);
            }
            else{
                setIncorrect(incorrect => [...incorrect, el]);
            }
        })
        setKnowledgeAreas(knowledgeAreas);
    }

    
    if(isFetching){
        ReadAllCatalogQuestions(name)
        .then(res => {
            setData(res.data);
        })
        .catch(err => {
            setError(err)
        })
        .finally(() => {
            setIsFetching(false)
        });  
    }

    if(isFetching2){
        ReadCatalog(name)
        .then(res => {
            setData2(res.data);
        })
        .catch(err => {
            setError2(err)
        })
        .finally(() => {
            setIsFetching2(false)
        }); 
    }
        
    if(error || error2){
        console.log("error");
        return <h1>Error</h1>
    }
    else if(isFetching || isFetching2){
        return (
            <Loading/>
        )
    }
    else{
        if(started){
            if(!finished){
                return(
                    <>
                        <div id="catalogpage-entry" className="flex-column center-content page-margin fit-content" style={{marginLeft: "50px"}}>
                            {
                                <>
                                    <h1 className="fit-content title">Question {questionNo}</h1>
                                    <h2 className="fit-content question">{data.detail[questionNo - 1].question}</h2>

                                    <PracticeInput data={data} reset={resetCheckboxes} questionHook={questionOne} setQuestionHook={setQuestionOne} questionNo={questionNo} answerX={data.detail[questionNo - 1].answerOne}/>
                                    <PracticeInput data={data} reset={resetCheckboxes} questionHook={questionTwo} setQuestionHook={setQuestionTwo} questionNo={questionNo} answerX={data.detail[questionNo - 1].answerTwo}/>
                                    <PracticeInput data={data} reset={resetCheckboxes} questionHook={questionThree} setQuestionHook={setQuestionThree} questionNo={questionNo} answerX={data.detail[questionNo - 1].answerThree}/>
                                    <PracticeInput data={data} reset={resetCheckboxes} questionHook={questionFour} setQuestionHook={setQuestionFour} questionNo={questionNo} answerX={data.detail[questionNo - 1].answerFour}/>

                                    <div className="flex-row" style={{marginTop: "10px"}}>
                                        {
                                            questionNo != 1 ? (
                                                <button className="startButton" style={{marginRight: "10px"}} onClick={() => {
                                                    setQuestionNo(questionNo-1);
                                                    resetCheckboxes();
                                                }}>Back</button>
                                            ) : (
                                                <></>
                                            )
                                        }
                                        {
                                            questionNo != data.detail.length ? (
                                                <button className="startButton" onClick={() => {
                                                    setQuestionNo(questionNo+1);
                                                    resetCheckboxes();
                                                }}>Next</button>
                                            ) : (
                                                <button className="startButton" onClick={() => {
                                                    setFinished(true);
                                                    console.log("reached");
                                                    CalculateResult();
                                                }}>Finish</button>
                                            )
                                        }
                                    </div>
                                </>
                            }
                        </div>
                    </>
                )
            }
            else{
                if(!reviewQuestions)
                {
                    return(
                        <div id="catalogpage-entry" className="flex-column center-content page-margin center-content" style={{marginLeft: "50px"}}>
                            <h1 style={{marginBottom: "20px"}}>{name} Results</h1>
                            <MyChart correct={correct.length} incorrect={incorrect.length} skipped={skipped.length} 
                                passPercentage={data2.detail[0].passPercentage} setReviewQuestions={setReviewQuestions}/>
                            <h2 style={{margin: "20px 0 10px 0"}}>Knowledge Areas</h2>
                            {Array.from(knowledgeAreas)?.map(el => (
                                <>
                                    <h4>{el}</h4>
                                    <PracticePercentageBar correct={correct.length} incorrect={incorrect.length} skipped={skipped.length}/>
                                </>
                            ))}
                            <div style={{marginBottom: "50px", marginTop: "30px"}} className="flex-row">
                                <button style={{marginRight: "20px"}} className="fit-content startButton hoverElement" onClick={() => {
                                    window.location.reload();
                                }}>Retry exam</button>
                                <Link to={"/dashboard"}>
                                    <button style={{}} className="fit-content startButton hoverElement" >Back to Dashboard</button>
                                </Link>
                            </div>
                        </div>
                    )
                }
                else{
                    return(
                        <div id="catalogpage-entry" className="flex-column center-content page-margin center-content" style={{marginLeft: "50px"}}>
                            <h1 style={{marginBottom: "20px"}}>{name} Results</h1>
                            {
                                data.detail.map((el, index) => {
                                   return(
                                    <div style={{margin: "10px 0"}}>
                                        <h3>Question {index + 1}</h3>
                                        <h3>{el.question}</h3>
                                        <DisabledInput answer={el.answerOne} selected={el.answerOne == el.answer} isCorrect={el.answerOne == el.correctAnswer}/>
                                        <DisabledInput answer={el.answerTwo} selected={el.answerTwo == el.answer} isCorrect={el.answerTwo == el.correctAnswer}/>
                                        <DisabledInput answer={el.answerThree} selected={el.answerThree == el.answer} isCorrect={el.answerThree == el.correctAnswer}/>
                                        <DisabledInput answer={el.answerFour} selected={el.answerFour == el.answer} isCorrect={el.answerFour == el.correctAnswer}/>
                                        <h3>
                                            Explanation
                                        </h3>
                                        <h4>
                                            {el.explanation}
                                        </h4>
                                    </div>
                                   )
                                })
                            }  
                            <button style={{maxWidth: "250px", margin: "10px 0"}} className="startButton" onClick={() => {
                                setReviewQuestions(false);
                            }}>Review knowledge areas</button> 
                        </div>
                    )
                }
            }

        }
        else{
            return(
                <>
                    <div id="catalogpage-entry" className="flex-column center-content page-margin fit-content">
                        <h1 className="fit-content title">{name}</h1>
                        <div className="flex-row">
                            <h2 className="fit-content">{data.detail.length} questions</h2>
                            <h2 className="fit-content" style={{margin: "0 2vw"}}>|</h2>
                            <h2 className="fit-content">{toHoursAndMinutes(data2.detail[0].time)}</h2>
                            <h2 className="fit-content" style={{margin: "0 2vw"}}>|</h2>
                            <h2 className="fit-content">{data2.detail[0].passPercentage}% correct required to pass</h2>
                        </div>
                        <h3 className="description">
                            <pre>
                                {data2.detail[0].description}
                            </pre>
                        </h3>
                        <button className="fit-content startButton" onClick={() => {setStarted(true)}}>Start exam</button>
                    </div>
                </>
            )
        }
    }
}