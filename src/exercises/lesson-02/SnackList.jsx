// import React from 'react';

export default function SnackList() {
  const snacks = [
    { id: 1, name: 'Pretzels', rating: 5 },
    { id: 2, name: 'Cookies', rating: 4 },
    { id: 3, name: 'Popcorn', rating: 3 },
    { id: 4, name: 'Chocolate', rating: 2 },
    { id: 5, name: 'Chips', rating: 1 },
  ];
  snacks.sort((a, b) => a.rating - b.rating);
  console.log(snacks);

  return (
    <ul>
      {snacks.map((snack) => (
        <li key={snack.rating}>{snack.name}</li>
      ))}
    </ul>
  );
}

// SnackList();
