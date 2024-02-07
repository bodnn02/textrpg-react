import React, { useState, useEffect } from "react";

import checkSession from "../api/checkSession"; // Import the function for checking a session
import addCharacter from "../api/addCharacter"; // Import the function for checking a session


import { resetStyles } from "../styles/reset.css";
import { fontStyles } from "../styles/fonts.css";
import { Styles } from "../styles/style.css";

import { PopUp } from "../components/PopUp/PopUp";
import { FormSection } from "../components/FormSection/FormSection";
import { ColorForm } from "../components/ColorForm/ColorForm";
import { RadioForm } from "../components/RadioForm/RadioForm";


export const ProfilePage = () => {
  useEffect(() => {
    // Check for an existing session on page load
    const existingSessionToken = localStorage.getItem("sessionToken");

    if (existingSessionToken) {
      checkExistingSession(existingSessionToken);
    }
  }, []);

  const checkExistingSession = async (sessionToken) => {
    try {
      // Call the function to check the session
      const response = await checkSession(sessionToken);

      // If the response has a message indicating a valid session, redirect to the profile page
      if (response.message === "Сессия действительна") {

      } else {
        // If the session check fails, clear the session token from local storage
        localStorage.removeItem("sessionToken");
      }
    } catch (error) {
      // Handle errors, for example, display an error message
      console.error("Session check error:", error.message);
    }
  };

  const availableHairColors = [
    {
      name: "blond",
      code: "#F0E2B6",
    },
    {
      name: "brunette",
      code: "#59332F",
    },
    {
      name: "black",
      code: "#000000",
    },
    {
      name: "red",
      code: "#FF0000",
    },
    {
      name: "brown",
      code: "#8B4513",
    },
    {
      name: "caramel",
      code: "#DAA520",
    },
    {
      name: "gray",
      code: "#808080",
    },
    {
      name: "platinum",
      code: "#E5E4E2",
    },
    {
      name: "auburn",
      code: "#A52A2A",
    },
    {
      name: "silver",
      code: "#C0C0C0",
    },
  ];
  const availableSkinColors = [
    {
      name: "fair",
      code: "#F5DEB3",
    },
    {
      name: "medium",
      code: "#D2B48C",
    },
    {
      name: "olive",
      code: "#808000",
    },
    {
      name: "dark",
      code: "#A52A2A",
    },
  ];
  const availableEyesColors = [
    {
      name: "blue",
      code: "#6CA6CD",
    },
    {
      name: "brown",
      code: "#8B4513",
    },
    {
      name: "green",
      code: "#228B22",
    },
    {
      name: "hazel",
      code: "#B8860B",
    },
    {
      name: "gray",
      code: "#708090",
    },
    {
      name: "amber",
      code: "#FFBF00",
    },
    {
      name: "violet",
      code: "#8A2BE2",
    },
    {
      name: "red",
      code: "#FF0000",
    },
  ];

  var availableHaircuts = [
    { name: "bald", gender: "male" },
    { name: "short crew cut", gender: "male" },
    { name: "undercut", gender: "male" },
    { name: "long waves", gender: "female" },
    { name: "messy bun", gender: "female" },
    { name: "sleek ponytail", gender: "female" },
    { name: "pixie cut", gender: "female" },
    { name: "textured crop", gender: "female" },
    { name: "beach waves", gender: "female" },
    { name: "mohawk", gender: "female" }
  ];

  var availableGenders = [
    { name: "male" },
    { name: "female" },
  ];

  const [selectedName, setSelectedName] = useState("");
  const [selectedDescription, setSelectedDescription] = useState("");
  const [selectedHairColor, setSelectedHairColor] = useState("");
  const [selectedSkinColor, setSelectedSkinColor] = useState("");
  const [selectedEyesColor, setSelectedEyesColor] = useState("");
  const [selectedHaircut, setSelectedHaircut] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  const characterSubmit = async () => {
    try {
      console.log(selectedName)
      console.log(selectedDescription)
      console.log(selectedGender)
      console.log(selectedHairColor)
      console.log(selectedSkinColor)
      console.log(selectedEyesColor)
      console.log(selectedHaircut)

      if (
        selectedName &&
        selectedDescription &&
        selectedGender &&
        selectedHairColor &&
        selectedSkinColor &&
        selectedEyesColor &&
        selectedHaircut
      ) {
        const character_data = {
          name: selectedName,
          description: selectedDescription,
          appearance: {
            gender: selectedGender,
            eyes_color: selectedEyesColor,
            haircut: selectedHaircut,
            hair_color: selectedHairColor,
            skin_color: selectedSkinColor,
          },
        };
        const response = await addCharacter(character_data);

        if (response) {
          alert("Успешно создан!");
        } else {
          alert("Ошибка добавления!");
        }
      } else {
        alert("Заполните все поля!");
      }
    } catch (error) {
      console.error("Character add error:", error.message);
    }
  };


  return (
    <>
      <PopUp title={"Character Creation"} isVisible={true}>
        <div className="character-form" action="">
          <FormSection title={"Input Character name:"}>
            <input
              className="input"
              placeholder="Name"
              type="text"
              value={selectedName}
              onChange={(e) => setSelectedName(e.target.value)}
            />
          </FormSection>
          <FormSection title={"Input Character description:"}>
            <input
              className="input"
              placeholder="Description"
              type="text"
              value={selectedDescription}
              onChange={(e) => setSelectedDescription(e.target.value)}
            />
          </FormSection>
          <FormSection title={"Choose character gender:"}>
            <RadioForm name={"gender"} items={availableGenders} selectedItem={selectedGender} onSelect={setSelectedGender}></RadioForm>
          </FormSection>
          <FormSection title={"Choose haircut:"}>
            <RadioForm name={"haircut"} items={availableHaircuts} selectedItem={selectedHaircut} onSelect={setSelectedHaircut}></RadioForm>
          </FormSection>
          <FormSection title={"Choose hair color:"}>
            <ColorForm name="hair_color" colors={availableHairColors} selectedColor={selectedHairColor} onSelect={setSelectedHairColor}></ColorForm>
          </FormSection>
          <FormSection title={"Choose skin color:"}>
            <ColorForm name="skin_color" colors={availableSkinColors} selectedColor={selectedSkinColor} onSelect={setSelectedSkinColor}></ColorForm>
          </FormSection>
          <FormSection title={"Choose eyes color:"}>
            <ColorForm name="eyes_color" colors={availableEyesColors} selectedColor={selectedEyesColor} onSelect={setSelectedEyesColor}></ColorForm>
          </FormSection>
          <button className="primary-btn"onClick={characterSubmit}>Create</button>
        </div>
      </PopUp>
    </>
  );
};
