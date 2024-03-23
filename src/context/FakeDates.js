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
      image: 'NH',
    },
    {
      id: 2,
      name: "Ventura Acres",
      date: threeDate,
      time: "10:00AM",
      tag: "va",
      image: 'VA',
    },
    {
      id: 3,
      name: "South West",
      date: futureDate,
      time: "01:00PM",
      tag: "sw",
      image: 'SW',
    },
  ]);


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
    addFakeDate
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