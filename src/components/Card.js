import React from "react";
import alternative from './alt.png'
import { useState, useRef } from "react";




export default function Card({author, avatar, content, rating}) {
    const [scrolling,setScrolling] = useState(false);
    const contentRef = useRef(null);
    const [startY, setStartY] = useState(null);
    const [scrollTop, setScrollTop] = useState(0);

    const handleMouseDown = (e) => {
        setScrolling(true);
        setStartY(e.pageY - contentRef.current.scrollTop);
        setScrollTop(contentRef.current.scrollTop);
    };
    
    const handleMouseLeave = () =>{
        setScrolling(false);
    }

    const handleMouseUp = () => {
        setScrolling(false);
    };

    const handleMouseMove = (e) => {
        if (!scrolling) return;

        const y = e.pageY - contentRef.current.getBoundingClientRect().top;
        const distance = y - startY;
        contentRef.current.scrollTop = scrollTop - distance;
    }
    return(
        <div className="card">
            <div className="card-user">
                <img src={(avatar) ? `https://image.tmdb.org/t/p/original${avatar}`:alternative} alt="..." />
                <h3>{author}</h3>
            </div>
                <div 
                    ref={contentRef}
                    className="card-content"
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    {content}
                </div>
            <div className="card-rating">
                <span>{rating} / 10</span>
            </div>
        </div>
    );
}