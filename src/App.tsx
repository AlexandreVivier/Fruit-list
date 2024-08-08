import { useState } from 'react'
import Fruit from './components/Fruit'
import AddFruit from './components/AddFruit';
import Button from './components/Button'
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

  const alertPop = () => {
    alert('Vous avez ' + fruits.length + ' fruits dans votre liste');
  }

  const fruitCount = fruits.length > 1 ? 'Il y a ' + fruits.length + ' fruits dans la liste' : 'Il y a ' + fruits.length + ' fruit dans la liste';


  const handleErase = () => {
    setFruits([]);
  }

  return (
    <div>
      <h1>Liste de fruits :</h1>
      <ul>
        {fruits.map(fruit => <Fruit key={fruit.id} fruitInfo={fruit} onClick={handleDelete} />)}
      </ul>
      <AddFruit handleAdd={handleAdd} />
      <Button text={fruitCount} onClick={alertPop} />
      <Button text="Effacer la liste" onClick={handleErase} />
    </div>
  )
}
