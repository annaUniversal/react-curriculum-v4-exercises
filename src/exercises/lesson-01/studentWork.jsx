//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  let name = 'Anna';
  let age = 'xx';
  const hobbies = [
    { id: 1, hobby: 'Staying active' },
    { id: 2, hobby: 'Traveling' },
    { id: 3, hobby: 'Spending time with my dog' },
  ];
  return (
    <div>
      <h1>About Me</h1>
      <p>
        {' '}
        My name is {name}. I am {age} y.o. I was born in Russia. I have a
        background in Computer Science and have worked in software quality
        assurance for many years. I enjoy learning new technologies, solving
        problems, and expanding my technical skills. Outside of work, I enjoy{' '}
        {hobbies.map((hobby) => hobby.hobby).join(', ')}.
      </p>

      <p>Hobbies:</p>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby.id}>{hobby.hobby}</li>
        ))}
      </ul>
    </div>
  );
}
