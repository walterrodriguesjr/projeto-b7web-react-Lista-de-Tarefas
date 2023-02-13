
import { useState } from 'react';
import * as C from './App.styles';
import { ListItem } from './components/ListItem/index';

const App = () => {

  const [list, setList] = useState([
    { id: 1, name: 'Comprar o pão na padaria', done: false },
    { id: 2, name: 'Comprar um bolo na padaria', done: false },
  ]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {/* Area de adicionar nova tarefa */}

        {
          list.map((item, index) => (
            <ListItem key={index} item={item} />
          ))
        }

      </C.Area>
    </C.Container>
  )
}

export default App;