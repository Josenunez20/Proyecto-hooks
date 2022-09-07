import React from "react";
import "../App.css";
import { Link } from 'react-router-dom'

const Hooks = () => {
  return (
    <div className="container__header">
      <div className="container__menu">
        <ul>
          <h1>Ejemplos de Hooks</h1>
          <li>
            <Link to="Hooks1">useState</Link>
          </li>
          <li>
            <Link to="Hooks2">useCounter</Link>
          </li>
          <li>
            <Link to="Hooks3">useEffect</Link>
          </li>
          <li>
            <Link to="Hooks4">useLayoutEffect</Link>
          </li>
          <li>
            <Link to="Hooks5">useMemo</Link>
          </li>
          <li>
            <Link to="Hooks6">useReducer</Link>
          </li>
          <li>
            <Link to="Hooks7">CustomHooks</Link>
          </li>
          <li>
            <Link to="Hooks8">useFetch</Link>
          </li>
          <li>
            <Link to="Hooks9">useRef</Link>
          </li>
          <li>
            <Link to="Hooks10">useCallback</Link>
          </li>
          <li>
            <Link to="Hooks11">Memo</Link>
          </li>
          <li>
            <Link to="Hooks12">useContext</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hooks;