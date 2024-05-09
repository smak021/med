import React, { useEffect, useRef, useState } from "react";
import "./main.css";
import { getResponse } from "../Utils/miscFunctions";
import { Activity, CircleUser, HeartPulse, Send, Squircle } from "lucide-react";

function Homepage() {
  const [resultList, setResultList] = useState([]);
  const [query, setQuery] = useState("");
  const contentRef = useRef();

  useEffect(()=>{
    contentRef.current.scrollIntoView({behavior:'smooth',block:'end',inline:'end'})
  },[resultList.length])

  const handleSubmit = (event) => {
    // event.preventDefault();
    const currentResult = {
      query: query,
      answers: getResponse(query),
    };
    setResultList((prev) => [...prev, currentResult]);
    setQuery("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };
  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      setQuery("");
    }
  };

  return (
    <div className="main-container">
      <div className="content-container">
        <div>
          <div className="proj-title">HealthChat</div>
        </div>
        <div className=" result-content">
          {resultList.map((item) => {
            return (
              <div>
                <div className="query d-flex gap-2">
                  <CircleUser size={18} strokeWidth={1.5} color="grey" className="mt-1" />
                  <div>
                    <div className="subhead">You</div>
                    <div>{item.query}</div>
                  </div>
                </div>
                <div className="d-flex gap-2">
                <HeartPulse size={18} color="grey" className="mt-1" strokeWidth={1.5}/>
                <div>
                <div className="subhead">HealthChat</div>
                {item.answers.map((answer) => {
                  if (answer.type === "subhead") {
                    return (
                      <div>
                        <div>{answer.content}</div>
                      </div>
                    );
                  }

                  if(answer.type==='point'){
                    return (
                        <div className="d-flex align-items-center gap-2">
                            <div className="point"/><div>{answer.content}</div>
                        </div>
                    )
                  }

                  return <div>{answer.content}</div>;
                })}
                </div>
                </div>
              </div>
            );
          })}
        <div className="pb-5" ref={contentRef}/>
        </div>
        {resultList.length<=0 && <div className="init-content">
          <Activity size={60} color="#FFF" /></div>}
      </div>
     
      <form onSubmit={handleSubmit}>
        <div className="input-container d-flex align-items-center gap-3">
          <textarea
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Enter you queries"
            className=""
          />
          <div role="button" className="send-btn" onClick={handleSubmit}>
            <Send color="#FFF"/>
          </div>
          {/* <button type="submit" className="send-btn">
            Send
          </button> */}
        </div>
      </form>
    </div>
  );
}

export default Homepage;
