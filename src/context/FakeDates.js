import React, { createContext, useContext, useState } from "react";

const FakeDatesContext = createContext();


export const FakeDatesProvider = ({ children }) => {

    const newDay = new Date();
    const month = newDay.getMonth() + 1;
    const day = newDay.getDate();
    const year = newDay.getFullYear();
    const shortDate = `${month}.${day}`;

    const newthreeDate = new Date();
    const threeDay = newthreeDate.getDate() + 3;

    const futureDay = new Date();
    const futureMonth = futureDay.getMonth() + 6;

    const longDate = `0${month}.${day}.${year}`;

    const threeDate = `0${month}.${threeDay}.${year}`;

    const futureDate = `0${futureMonth}.${day}.${year}`;

  const [fakeDates, setFakeDates] = useState([
    {
      id: 1,
      name: "North Hill",
      date: longDate,
      time: "09:00AM",
      tag: "nh",
      image: "NH",
    },
    {
      id: 2,
      name: "Ventura Acres",
      date: threeDate,
      time: "10:00AM",
      tag: "va",
      image: "VA",
    },
    {
      id: 3,
      name: "South West",
      date: futureDate,
      time: "01:00PM",
      tag: "sw",
      image: "SW",
    },
  ]);

  const [fakeScoreCards, setFakeScoreCards] = useState(
{
    'NH' : [
    { label: "Hole", values: ["1", "2", "3", "4", "5", "6", "7", "8", "9"] },
    { label: "Handicap", values: ["18", "13", "14", "10", "11", "17", "15", "12", "16"] },
    { label: "Par", values: ["4", "4", "3", "4", "4", "4", "3", "3", "4"] },
    { label: "Score", values: ["+4", "+3", "+2", "+1", "+5", "+5", "+3", "+2", "+4"] },
    { label: "Hole", values: ["10", "11", "12", "13", "14", "15", "16", "17", "18"] },
    { label: "Handicap", values: ["9", "7", "3", "6", "5", "4", "2", "1", "8"] },
    { label: "Par", values: ["4", "4", "3", "4", "4", "4", "3", "3", "4"] },
    { label: "Score", values: ["+4", "+4", "+3", "+3", "+4", "+3", "+5", "+6", "+5"] },
  ],
  'SW' : [
 { label: "Hole", values: ["1", "2", "3", "4", "5", "6", "7", "8", "9"] },
 { label: "Handicap", values: ["13", "8", "9", "14", "18", "17", "11", "16", "15"] },
 { label: "Par", values: ["4", "4", "3", "4", "4", "4", "3", "3", "4"] },
 { label: "Score", values: ["+2", "+3", "+2", "+1", "+5", "+4", "+2", "+3", "+4"] },
 { label: "Hole", values: ["10", "11", "12", "13", "14", "15", "16", "17", "18"] },
 { label: "Handicap", values: ["10", "6", "7", "12", "17", "16", "8", "15", "14"] },
 { label: "Par", values: ["4", "4", "3", "4", "4", "4", "3", "3", "4"] },
 { label: "Score", values: ["+3", "+4", "+2", "+2", "+3", "+5", "+3", "+2", "+4"] },
],
'VA' : [
  { label: "Hole", values: ["1", "2", "3", "4", "5", "6", "7", "8", "9"] },
  { label: "Handicap", values: ["15", "10", "11", "18", "17", "16", "12", "13", "14"] },
  { label: "Par", values: ["4", "4", "3", "4", "4", "4", "3", "3", "4"] },
  { label: "Score", values: ["+3", "+2", "+1", "+1", "+5", "+4", "+2", "+3", "+3"] },
  { label: "Hole", values: ["10", "11", "12", "13", "14", "15", "16", "17", "18"] },
  { label: "Handicap", values: ["8", "6", "5", "4", "13", "12", "7", "11", "9"] },
  { label: "Par", values: ["4", "4", "3", "4", "4", "4", "3", "3", "4"] },
  { label: "Score", values: ["+3", "+4", "+2", "+2", "+3", "+4", "+3", "+2", "+4"] },
],
 'PR' : [
  { label: "Hole", values: ["1", "2", "3", "4", "5", "6", "7", "8", "9"] },
  { label: "Handicap", values: ["14", "11", "12", "17", "16", "15", "10", "13", "18"] },
  { label: "Par", values: ["4", "4", "3", "4", "4", "4", "3", "3", "4"] },
  { label: "Score", values: ["+1", "+3", "+2", "+2", "+4", "+3", "+1", "+2", "+3"] },
  { label: "Hole", values: ["10", "11", "12", "13", "14", "15", "16", "17", "18"] },
  { label: "Handicap", values: ["9", "7", "6", "12", "11", "10", "5", "8", "4"] },
  { label: "Par", values: ["4", "4", "3", "4", "4", "4", "3", "3", "4"] },
  { label: "Score", values: ["+2", "+4", "+3", "+3", "+2", "+4", "+2", "+3", "+4"] },
],
'OC' : [
  { label: "Hole", values: ["1", "2", "3", "4", "5", "6", "7", "8", "9"] },
  { label: "Handicap", values: ["14", "11", "12", "17", "16", "15", "10", "13", "18"] },
  { label: "Par", values: ["4", "4", "3", "4", "4", "4", "3", "3", "4"] },
  { label: "Score", values: ["+1", "+3", "+2", "+2", "+6", "+3", "+4", "+2", "+3"] },
  { label: "Hole", values: ["10", "11", "12", "13", "14", "15", "16", "17", "18"] },
  { label: "Handicap", values: ["9", "7", "6", "12", "11", "10", "5", "8", "4"] },
  { label: "Par", values: ["4", "4", "3", "4", "4", "4", "3", "3", "4"] },
  { label: "Score", values: ["+5", "+4", "+3", "+1", "+3", "+4", "+5", "+3", "+4"] },
]
  })

  const [singleDate, setSingleDate] = useState('')


const addFakeDate = (name, date, time, tag, image) => {
  const newId = fakeDates.length + 1; 
  const newFakeDate = {
    id: newId,
    name: name,
    date: date,
    time: time,
    image: image,
    tag: tag
  };
  setFakeDates([...fakeDates, newFakeDate]);
};



  const contextValue = {
    fakeDates,
    addFakeDate,
    fakeScoreCards,
    singleDate,
    setSingleDate
  };

  return (
    <FakeDatesContext.Provider value={contextValue}>
      {children}
    </FakeDatesContext.Provider>
  );
};

export const useFakeDates = () => {
  return useContext(FakeDatesContext);
};