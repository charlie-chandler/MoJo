import React, { useState, useEffect, useContext } from "react";
import classNames from "classnames";
import "./../../styles/Journal.scss";
import axios from "axios";

import JournalPrompt from "./JournalPrompt";
import JournalTextBox from "./JournalTextBox";
import Button from "../Common/Button";
import { daySelectionContext } from '../../providers/DaySelectionProvider';
import { generateNewPrompt } from '../../helpers/generate_prompt';
import { appContext } from './../../providers/AppProvider';



function Journal() {

  const journalClass = classNames("journal");
  const promptButtonClass = classNames("btn-prompt");

  const [prompt, setPrompt] = useState(generateNewPrompt());
  const [showPrompt, setShowPrompt] = useState(false);
  const [journalEntry, setJournalEntry] = useState("");
  const [saveJournalEntry, setSaveJournalEntry] = useState(false);
  const [initialValue, setInitialValue] = useState("");


  const { setViewMode } = useContext(appContext);
  const { daySelectionId } = useContext(daySelectionContext);


  const togglePrompt = () => {
    if (!showPrompt) {
      setShowPrompt(true);
    };
    setPrompt(generateNewPrompt());
  };

  useEffect(() => {
    if (journalEntry) {
      axios
        .post(`/api/journal/`, {
          daySelectionId: daySelectionId,
          body: journalEntry
        })
        .then(response => {
          setViewMode('JOURNAL');
        })
        .catch(err => {
          console.log("error", err);
        });
    }
  }, [saveJournalEntry]);

  //get existing journal entry
  useEffect(() => {
    axios
      .get(`/api/journal/${daySelectionId}`)
      .then(res => {
        if (res.data) {
          setInitialValue(res.data.body);
        }
      });
  }, [initialValue]);

  


  return (
    <article className={journalClass}>
      <header className={promptButtonClass}>
        <div id="show-prompt">
        <Button btnId="prompt"
          onClickHandler={togglePrompt}>
          give me a prompt
        </Button>
        { showPrompt &&(<Button btnId="hide-prompt"
          onClickHandler={() => setShowPrompt(false)}>
          hide
        </Button>)}
        </div>
            {showPrompt && (<JournalPrompt prompt={prompt} />)}
      </header>
      <br />

      <JournalTextBox onChange={setJournalEntry} initialValue={initialValue} />

      <footer>
        <Button btnId="save-journal" onClickHandler={() => setSaveJournalEntry(true)}>save</Button>
      </footer>
    </article>
  );
};

export default Journal;