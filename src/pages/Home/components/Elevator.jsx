import { Link } from "react-router-dom";

import "./Elevator.css"

export default function Elevator(props) {
    return (
        <Link to={props.softSkill !== "Em breve" ? props.link : ''}>
            <div className={`elevador ${props.softSkill === "Em breve" ? 'emBreve' : ''}`}>
                <p>{props.softSkill}</p>
            </div>
        </Link>
    );
}