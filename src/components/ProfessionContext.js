"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

const ProfessionContext = createContext();

export function ProfessionProvider({ children }) {
  const [profession, setProfession] = useState('default');
  const [showPopup, setShowPopup] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('wbk_profession');
    if (stored) {
      setProfession(stored);
    } else {
      setShowPopup(true);
    }
  }, []);

  const changeProfession = (newProf) => {
    setProfession(newProf);
    localStorage.setItem('wbk_profession', newProf);
    setShowPopup(false);
  };

  return (
    <ProfessionContext.Provider value={{ profession, changeProfession, showPopup, setShowPopup, mounted }}>
      {children}
    </ProfessionContext.Provider>
  );
}

export function useProfession() {
  return useContext(ProfessionContext);
}

export function mergeDict(baseDict, profession) {
  if (profession === 'default' || !baseDict[profession]) return baseDict;

  // Deep clone to avoid mutating the base dictionary
  const merged = JSON.parse(JSON.stringify(baseDict));
  const overrides = baseDict[profession];

  function deepMerge(target, source) {
    for (const key in source) {
      if (source[key] instanceof Object && !Array.isArray(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        deepMerge(target[key], source[key]);
      } else {
        // Overwrite standard keys and arrays completely
        target[key] = source[key];
      }
    }
  }

  deepMerge(merged, overrides);
  return merged;
}
