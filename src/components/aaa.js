import React, { useState } from 'react';

// class Aaa extends Component {

//     render() {
//         return (
//             <div>111111</div>
//         );
//     }
// }

function Aaa(props) {
    const [count, setCount] = useState(12)

    function handleClick() {
        return setCount(count + 1)
    }

    return (
        <div>
            <div>数字: {count}--{props.name}</div>
            <button onClick={handleClick}>点击</button>
        </div>
    )
}

export default Aaa;