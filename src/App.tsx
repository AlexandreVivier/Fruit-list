import { useState } from 'react'
import './App.css'

export default function App() {
  const [fruits, setFruits] = useState([
    { id : 1, name: 'pomme' },
    { id : 2, name: 'banane' },
    { id : 3, name: 'cerise' }
  ]);

  // Second partie de state, destinée à l'ajout de fruit.
  const [newFruit, setNewFruit] = useState('');

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

  const handleChange = (event: any) => {
    setNewFruit(event.target.value);
  }

  const handleSubmit = (event: any) => {
    // Méthode à privilégier, plutôt que useRef, car useRef ne provoque pas de re-render
    // Privilégier la méthode de synchronisation descendante / ascendante
    // 0 empêcher le rechargement de la page
    event.preventDefault();
    // 1 définir une seconde partie du state (voir plus haut)
    // 2 Récupérer le state initial fruits et créer une copie
    const fruitsAddCopy = [...fruits];
    // 3 Ajouter le nouveau fruit en lui créant un id a partir de la date du jour
    const id = new Date().getTime();
    const name = newFruit;
    fruitsAddCopy.push({ id, name });
    // 4 Mettre à jour le state fruits
    setFruits(fruitsAddCopy);
    // 5 Remettre à neuf le state newFruit dans l'input
    setNewFruit('');
  }

  return (
    <div>
      <h1>Liste de fruits :</h1>
      <ul>
        {fruits.map(fruit => <li key={fruit.id}>{fruit.name}
          <button onClick={() => handleDelete(fruit.id)}>X</button>
        </li>)}
      </ul>
      <form action="submit">
        <input type="text" value={newFruit} placeholder="Ajouter un fruit..." onChange={() => handleChange(event)} />
        <button type="submit" onClick={handleSubmit}>+ fruit</button>
      </form>
    </div>
  )
}
