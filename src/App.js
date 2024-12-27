import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';

function Item(props) {
  const color = props.done ? 'lightgreen' : 'lightpink';

  return (
    <div style={{backgroundColor: color, width: '500px', height: '100px'}} onClick={props.handleDone}>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      <p>{props.deadline}</p>
    </div>
  )
}

const TASKS = [
  {
    title: 'DISC App',
    desc: 'Self-study and complete app',
    deadline: 'Jan 4',
    done: false
  },
  {
    title: 'K Gift',
    desc: 'Buy Christmas gift for Kathleen',
    deadline: 'Dec 25',
    done: false
  },
  {
    title: 'Secret Santa',
    desc: 'Wrap Secret Santa gift',
    deadline: 'Dec 25',
    done: false
  }
]

function App() {
  const [mode, setMode] = useState('light');
  const [tasks, setTasks] = useState(TASKS);

  const handleDone = (index) => {
    console.log("test")
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  }

  const switchMode = () => {
    if (mode === 'light') {
      setMode('dark');
    } else if (mode === 'dark') {
      setMode('light');
    }
  }

  useEffect(() => {
    console.log(mode);
  }, [mode]);

  const backgroundColor = mode === 'light' ? 'white' : 'black';
  const textColor = mode === 'light' ? 'black' : 'white';

  return (
    <div style={{ backgroundColor: backgroundColor, color: textColor}}>
      <h1>Todo List App</h1>
      <h2>My tasks for today</h2>
      <button onClick={switchMode}>Dark Mode</button>
      <ul>
        {TASKS.map((task, index) => {
          return (
            <Item title={task.title} desc={task.desc} deadline={task.deadline} done={task.done} handleDone={() => handleDone(index)} />
          )
        })}
      </ul>
    </div>
  );
}

export default App;
