export default function Fruit({ fruitInfo, onFruitDelete }: any) {

    // 1 state
    // Comment passer les props à un composant enfant ?
    // const fruitInfo = props.fruitInfo;
    // const onFruitDelete = props.onFruitDelete;

    // méthode destructuring
    // const { fruitInfo, onFruitDelete } = props;

    return (
        <li>{fruitInfo.name}
          <button onClick={() => onFruitDelete(fruitInfo.id)}>X</button>
        </li>
        // <div>Fruit</div>
    )
}