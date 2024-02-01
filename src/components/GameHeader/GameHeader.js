import React, { useState, useEffect, useLayoutEffect } from "react";
import { styles } from "./GameHeader.css";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

export const GameHeader = () => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState("EN");
    const [pageTitle, setPageTitle] = useState(document.title);

    const location = useLocation();


    var [isOpenedLanguageMenu, setIsOpenedLanguageMenu] = useState(false);

    useEffect(() => {
        const storedLanguage = localStorage.getItem("language");
        if (storedLanguage) {
            setCurrentLanguage(storedLanguage);
            i18n.changeLanguage(storedLanguage.toLowerCase());
        }
    }, [i18n]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setPageTitle(document.title);
        }, 0);

        return () => clearTimeout(timeoutId);
    }, [location, document.title]);

    const languages = [
        {
            name: "EN",
        },
        {
            name: "CN",
        },
    ];

    const handleClickLanguageSelector = () => {
        setIsOpenedLanguageMenu((prev) => !prev);
    };

    const handleChangeLanguage = (language) => {
        setCurrentLanguage(language.name);
        i18n.changeLanguage(language.name.toLowerCase());
        localStorage.setItem("language", language.name);
        setIsOpenedLanguageMenu(false);
    };

    return (
        <header className="game-header">
            <h1 className="text-h1">{document.title}</h1>
        </header>
    );
};
