const setSchemaHTML = () => {
    const selectedContentDiv = document.querySelector(".selected-content-div");

    selectedContentDiv.innerHTML = `
    <div class=" schema-container col-xs-12 col-sm-10 col-md-8 col-lg-7">

        <section class="schema-section body-text">
            <div class="schema-title-container col-xs-12">
                <h3 class="subtitle">Merch Schema</h3>
            </div>
            <article class="schema-row">
                <p class="schema-row__p"><b>Key</b></p>
                <p class="schema-row__p"><b>Type</b></p>
                <p class="schema-row__p"><b>Description</b></p>
            </article>
            <article class="schema-row">
                <p class="schema-row__p">Id</p>
                <p class="schema-row__p">int</p>
                <p class="schema-row__p">Id of merch</p>
            </article>
            <article class="schema-row">
                <p class="schema-row__p">Name</p>
                <p class="schema-row__p">string</p>
                <p class="schema-row__p">Name of merch</p>
            </article>
            <article class="schema-row">
                <p class="schema-row__p">Price</p>
                <p class="schema-row__p">int</p>
                <p class="schema-row__p">Price of merch</p>
            </article>
            <article class="schema-row">
                <p class="schema-row__p">Type</p>
                <p class="schema-row__p">string</p>
                <p class="schema-row__p">Type of merch</p>
            </article>
            <article class="schema-row">
                <p class="schema-row__p">Image</p>
                <p class="schema-row__p">string</p>
                <p class="schema-row__p">Image URL</p>
            </article>
        </section>

        <section class="schema-section body-text col-xs-12 col-sm-10 col-md-8 col-lg-7">
            <div class="schema-title-container">
                <h3 class="subtitle">Thoughts Schema</h3>
            </div>
            <article class="schema-row">
                <p class="schema-row__p"><b>Key</b></p>
                <p class="schema-row__p"><b>Type</b></p>
                <p class="schema-row__p"><b>Description</b></p>
            </article>
            <article class="schema-row">
                <p class="schema-row__p">Id</p>
                <p class="schema-row__p">int</p>
                <p class="schema-row__p">Id of Thought</p>
            </article>
            <article class="schema-row">
                <p class="schema-row__p">Phrase</p>
                <p class="schema-row__p">string</p>
                <p class="schema-row__p">Thought phrase</p>
            </article>
            <article class="schema-row">
                <p class="schema-row__p">Category</p>
                <p class="schema-row__p">string</p>
                <p class="schema-row__p">Thought category</p>
            </article>
        </section>

        <section class="schema-section body-text col-xs-12 col-sm-10 col-md-8 col-lg-7">
            <div class="schema-title-container">
                <h3 class="subtitle">Staff Schema</h3>
            </div>
            <article class="schema-row">
                <p class="schema-row__p"><b>Key</b></p>
                <p class="schema-row__p"><b>Type</b></p>
                <p class="schema-row__p"><b>Description</b></p>
            </article>
            <article class="schema-row">
                <p class="schema-row__p">Id</p>
                <p class="schema-row__p">int</p>
                <p class="schema-row__p">Id of Employee</p>
            </article>
            <article class="schema-row">
                <p class="schema-row__p">FirstName</p>
                <p class="schema-row__p">string</p>
                <p class="schema-row__p">Given name</p>
            </article>
            <article class="schema-row">
                <p class="schema-row__p">LastName</p>
                <p class="schema-row__p">string</p>
                <p class="schema-row__p">Surname</p>
            </article>
            <article class="schema-row">
                <p class="schema-row__p">Position</p>
                <p class="schema-row__p">string</p>
                <p class="schema-row__p">Employee position</p>
            </article>
            <article class="schema-row">
                <p class="schema-row__p">JobDescription</p>
                <p class="schema-row__p">string</p>
                <p class="schema-row__p">Job description</p>
            </article>
            <article class="schema-row">
                <p class="schema-row__p">Email</p>
                <p class="schema-row__p">string</p>
                <p class="schema-row__p">Employee Email</p>
            </article>
            <article class="schema-row">
                <p class="schema-row__p">Image</p>
                <p class="schema-row__p">string</p>
                <p class="schema-row__p">Image URL</p>
            </article>
        </section>

    </div>
    `;
};

export default setSchemaHTML;
