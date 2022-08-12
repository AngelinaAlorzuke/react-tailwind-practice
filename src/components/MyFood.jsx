import React from "react";

function MyFood({name,origin,nickname}){
    return <div>
        <p>The name of my Food is {name}.
        It is originated from {origin}.
        It is popularly known as {nickname}</p>
    </div>
}
export default MyFood;