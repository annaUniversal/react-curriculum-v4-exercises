//Lesson-02 Building with ReactDOM and components
//Exercise: Build a "Snack Ranking App" Component in this file
// import React from 'react';
// import ReactDOM from 'react-dom';
import SnackHeader from './SnackHeader';
import SnackFooter from './SnackFooter';
import SnackList from './SnackList';

export default function StudentWork() {
  return (
    <div>
      {/* add JSX here */}
      <SnackHeader />
      <p> Studenssst output will go here</p>
      <SnackList />
      <SnackFooter />
    </div>
  );
}
