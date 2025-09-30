import { useContext } from "react";
import { ThoughtContext } from "../../contexts/ThoughtContext";
import IThoughtContext from "../../interfaces/IThoughtContext";
import ThoughtItem from "./ThoughtItem";

const ThoughtList = () => {

    const {thoughts} = useContext(ThoughtContext) as IThoughtContext;

    const createAndGetThoughtJSX = () => {
        const thoughtJSX = thoughts.map( (thought, index) => {
            return (
                <ThoughtItem
                    key={"thought" + index}
                    id={thought.id}
                    phrase={thought.phrase}
                    category={thought.category}
                />                
            )
        });
        return thoughtJSX;
    }

    return (
        <>
            {createAndGetThoughtJSX()}
        </>
    )
}

export default ThoughtList;