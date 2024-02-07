import React, { useState, useEffect, useLayoutEffect } from "react";
import { styles } from "./GameHeader.css";
import { Link, useLocation } from "react-router-dom";

export const GameHeader = () => {
    const [pageTitle, setPageTitle] = useState(document.title);

    const location = useLocation();


    return (
        <header className="game-header">
            <h1 className="text-h1">{document.title}</h1>
        </header>
    );
};
