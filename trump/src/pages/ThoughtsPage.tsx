import ThoughtGenrator from "../components/thought/ThoughtGenerator";
import { ThoughtProvider } from "../contexts/ThoughtContext";

const ThoughtsPage = () => {
    return (
        <section className="mt-4 pt-5 pb-5 p-3">
            
                <header className="mt-5 mb-4 text-center">
                    {/*<img src="./public/images/trump-speak.png" alt="" style={{height: "120px"}}/>*/}

                    <h1 className="fw-bold">Trump Thoughts</h1>
                    <h5>Select a category and get inspired</h5>
                </header>
                

                <ThoughtProvider>
                    <ThoughtGenrator/>
                </ThoughtProvider>
        </section>
    )
}

export default ThoughtsPage;