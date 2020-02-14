import React, { useState } from 'react';

function Like() {
  // Declara una nueva variable de estado, que llamaremos "count".
  const [count, setCount] = useState(0);

  return (
    <div>

{count ? <button onClick={() => setCount(count - 1)}><i className="fas fa-heart">{count}</i></button> : <button onClick={() => setCount(count + 1)}><i className="fas fa-heart">{count}</i></button>}


      {/* <p>You clicked {count} times</p> */}
      {/* <button onClick={() => setCount(count + 1)}>
      <i className="fas fa-heart">{count}</i>
      </button> */}
    </div>
  );
}

export default Like;