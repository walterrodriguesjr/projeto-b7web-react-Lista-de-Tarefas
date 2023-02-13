import * as C from './styles';


export const ListItem = ({item}) => {
    return (
        <C.Container>
          <input type="checkbox" />
          <label>{item.name}</label>
        </C.Container>
    )
}