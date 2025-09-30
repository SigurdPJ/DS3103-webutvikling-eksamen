import { FC } from "react";
import IThought from "../../interfaces/IThought";

const ThoughtItem : FC<IThought> = ({phrase}) => {
    return (
        <article className="border shadow-sm rounded p-4 mt-3">
            <p className="fw-normal mb-4 fs-5">"{phrase}"</p>
            <p className="ms-3 fs-5">- Donald Trump</p>
        </article>
    )
}

export default ThoughtItem;