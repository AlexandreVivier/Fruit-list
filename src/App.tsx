import { useState } from 'react'
import Fruit from './components/Fruit'
import AddFruit from './components/AddFruit';
import './App.css'

export default function App() {
  const [fruits, setFruits] = useState([
    { id : 1, name: 'pomme' },
    { id : 2, name: 'banane' },
    { id : 3, name: 'cerise' }
  ]);


  const handleDelete = (id: number) => {
  // NE JAMAIS MODIFIER LE STATE DIRECTEMENT
  // ex setFruits(fruits.filter(fruit => fruit.id !== id)); 

  // 1 copier le state
  const deleteFruit = [...fruits];
  // 2 modifier la copie
  const fruitsCopyUpdated = deleteFruit.filter(fruit => fruit.id !== id);
  // 3 mettre à jour le state
  setFruits(fruitsCopyUpdated);
  }

  const handleAdd = (addFruit: any) => {
    const fruitsAddCopy = [...fruits];
    fruitsAddCopy.push(addFruit);
    setFruits(fruitsAddCopy);
  }

  return (
    <div>
      <h1>Liste de fruits :</h1>
      <ul>
        {fruits.map(fruit => <Fruit key={fruit.id} fruitInfo={fruit} onFruitDelete={handleDelete} />)}
      </ul>
      <AddFruit handleAdd={handleAdd} />
    </div>
  )
}
