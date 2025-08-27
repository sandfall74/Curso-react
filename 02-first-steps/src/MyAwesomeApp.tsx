import type { CSSProperties } from "react";

const firstName = 'Adrian';
const lastName = 'Piedra'
const favoriteGame =['Elden Ring', 'Smash','Metal Gear'];
const isActive = true;
const address={
    zipCode:'ABC-123',
    country:'Canada'
}
const myStyle: CSSProperties={
    backgroundColor:'#fafafa',
        borderRadius: 10,
        padding: 10,
}
export const MyAwesomeApp=()=>{

return (
<div data-testid="div-app">

<h1 data-testid="first-name-tittle">{firstName} </h1>
<h3>{lastName}</h3>
<p>{favoriteGame.join(', ')}</p>
<h1>{isActive ? 'Activo': 'No Activo'}</h1>
<p
    style={myStyle}
>{JSON.stringify(address)}</p>

</div>
)
}