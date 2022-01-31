import Item from "./Item";

export default function List(){
    return (
        <>
            <h1> Minha Lista</h1>
                <ul>
                    <Item marca="Item 1" lancamento={1998}/>
                    <Item marca="Item 2" lancamento={2000}/>
                    <Item marca="Item 3" lancamento={2022}/>      
                    <Item />           
                </ul>    
        </>
    )
}