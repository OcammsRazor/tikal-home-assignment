import { useState } from "react";
import { FirstExcercise } from "../excercise-1/FirstExcercise";
import { SecondExcercise } from "../excercise-2/SecondExcercise";
import texts from "./menu.texts.json";
import styles from "./menu.module.scss";

type ChallengeOptions = "firstChallenge" | "secondChallenge" | "menu";

export const Menu = () => {
  const [selectedChallenge, setSelectedChallenge] =
    useState<ChallengeOptions>("menu");

  const isMenu = selectedChallenge === "menu";

  const renderSelectedChallenge = () => {
    switch (selectedChallenge) {
      case "firstChallenge":
        return <FirstExcercise />;
      case "secondChallenge":
        return <SecondExcercise />;
      default:
        return;
    }
  };

  return (
    <div className={styles.menu}>
      <h1>{texts.title}</h1>
      <h2>{texts.subtitle}</h2>
      {isMenu && (
        <img
          src="https://jewelrybrands.shop/cdn/shop/collections/cartoon-network-portal.png"
          className={styles.portal}
        />
      )}
      <div className={styles.buttonMenu}>
        <button
          onClick={() => setSelectedChallenge("firstChallenge")}
          className={styles.button}
        >
          {texts.buttons.challenge1}
        </button>
        <button
          onClick={() => setSelectedChallenge("secondChallenge")}
          className={styles.button}
        >
          {texts.buttons.challenge2}
        </button>
        <button
          onClick={() => setSelectedChallenge("menu")}
          className={styles.button}
        >
          {texts.buttons.menu}
        </button>
      </div>
      {renderSelectedChallenge()}
    </div>
  );
};
