import React, { useState } from 'react';

export default function AddFruit({handleAdd}: any) {

      // Second partie de state, destinée à l'ajout de fruit.
    const [newFruit, setNewFruit] = useState('');


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
        // const fruitsAddCopy = [...fruits];
        // 3 Ajouter le nouveau fruit en lui créant un id a partir de la date du jour
        const id = new Date().getTime();
        const name = newFruit;
        const addFruit = { id, name };
        // fruitsAddCopy.push(addedFruit);
        // 4 Mettre à jour le state fruits
        // setFruits(fruitsAddCopy);
        // 5 Remettre à neuf le state newFruit dans l'input.
        handleAdd(addFruit);
        setNewFruit('');
      }
    return (
        <form action="submit">
        <input type="text" value={newFruit} placeholder="Ajouter un fruit..." onChange={() => handleChange(event)} />
        <button type="submit" onClick={handleSubmit}>+ fruit</button>
      </form>
    )
}