import { useState } from 'react';
import * as C from './App.styles';
import{ Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';


function App() {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar pão', done: false },
    { id: 2, name: 'Comprar leite', done: false },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      // pega o ultimo id da lista e soma 1
      id: list[list.length - 1].id + 1,
      name: taskName,
      done: false
    });
    setList(newList);
    console.log(newList);
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
    console.log(newList);
  }

  const handleDeleteTask = (id: number) => {
    let newList = [...list];
    for (let i in newList) {
      if (newList[i].id === id) {
        newList.splice(parseInt(i), 1);
      }
    }
    setList(newList);
    console.log(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>TO DO LIST</C.Header>

        {/* Area de inserção de tarefas */}
        <AddArea onEnter={handleAddTask} />

        {/* Lista de tarefas */}
        {list.map((item, index) => (
          <ListItem 
          key={index} 
          item={item} 
          onChange={handleTaskChange}
          onDelete={handleDeleteTask}
          />
        ))}
        
      </C.Area>
    </C.Container>
  );
}

export default App;
