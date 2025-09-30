import { useState, useContext } from "react";
import { ThoughtContext } from "../../contexts/ThoughtContext";
import IThoughtContext from "../../interfaces/IThoughtContext";
import ThoughtItem from "./ThoughtItem";
import IThought from "../../interfaces/IThought";

// Importer for bruk av faLightbulb iconet
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

const ThoughtGenrator = () => {
    const { thoughts } = useContext(ThoughtContext) as IThoughtContext;

    const [thought, setThought] = useState<IThought | null>(null);
    const [newCategory, setNewCategory] = useState("Facts about the World");

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setNewCategory(e.target.value);
    }

    const buttonCliked = () => {
        const filteredThoughts = thoughts.filter( (thought) => thought.category === newCategory );
        const randomThought = filteredThoughts[Math.floor(Math.random() * filteredThoughts.length)];
        randomThought.id == thought?.id ? buttonCliked() : setThought(randomThought);
    }

    const createAndGetThoughtJSX = () => {
        if (thought != null) {
            return (
                <ThoughtItem
                    id={thought.id}
                    phrase={thought.phrase}
                    category={thought.category}
                />
            )
        }
    }

    return (
        <section className="container d-flex flex-column align-items-center">

            <div className="d-flex align-items-center justify-content-center flex-column flex-sm-row gap-2">
                <select className="form-select form-select-lg" value={newCategory} onChange={handleCategoryChange}>
                    <option value="Facts about the World">Facts about the World</option>
                    <option value="Philosophy">Philosophy</option>
                    <option value="Politics">Politics</option>
                    <option value="State of the Country">State of the Country</option>
                </select>

                <button className="btn btn-success btn-lg text-nowrap" onClick={buttonCliked}>
                    Get Inspired <FontAwesomeIcon icon={faLightbulb} />
                </button>
            </div>

            <div className="card-body">{createAndGetThoughtJSX()}</div>

        </section>
    )
}

export default ThoughtGenrator;
