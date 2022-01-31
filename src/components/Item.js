import Proptypes from 'prop-types'

export default function Item(props){
    return(
        <>
            <li>{props.marca} - {props.lancamento}</li>
        </>
    )
}

Item.propTypes = {
    marca: Proptypes.string.isRequired,
    lancamento: Proptypes.number
}

Item.defaultProps = {
    marca: 'Faltou o item',
    lancamento: 0
}