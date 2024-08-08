import Button from './Button';

export default function Fruit({ fruitInfo, onClick }: any) {

    // 1 state
    // Comment passer les props à un composant enfant ?
    // const fruitInfo = props.fruitInfo;
    // const onFruitDelete = props.onFruitDelete;

    // méthode destructuring
    // const { fruitInfo, onFruitDelete } = props;

    return (
        <li>{fruitInfo.name}
          <Button onClick={() => onClick(fruitInfo.id)} text="X" />
        </li>
        // <div>Fruit</div>
    )
}