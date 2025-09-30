const setThoughtHTML = () => {
    const selectedContentDiv = document.querySelector(".selected-content-div");

    selectedContentDiv.innerHTML = `
        <h3 class="subtitle col-xs-12">ThoughtController</h3>
        <p class="body-text col-xs-12">Manage thoughts data. Supports full CRUD operations.</p>

        <section class="section section--border-bottom body-text col-xs-12 col-lg-7">
            <div class="http-method-container">
                <p class="endpoint">
                    <label class="http-method-label http-method-label--get">GET</label>/api/thoughts
                </p>
            </div>
            <p class="body-text">Retrive all thoughts.</p>
            <p>The response body will consist of an array with all thought objects.</p>
            <p>The response body will consist of an array of objects representing all thoughts.</p>

            <div class="endpoint-img-container">
                <img class="img-resposiv endpoint-img" src="images/get-all-thoughts.png" alt="JSON respone image">
            </div>
        </section>

        <section class="section section--border-bottom body-text col-xs-12 col-lg-7">
            <div class="http-method-container">
                <p class="endpoint">
                    <label class="http-method-label http-method-label--get">GET</label>/api/thoughts/{id}
                </p>
            </div>
            <p class="body-text">Retrive a thought by its ID. Accepts an int as parameter.</p>
            <p>The response body consists of the thought object with ID that mathces the provided int</p>
            <p>Example response body with 2 as parameter:</p>
            <div class="endpoint-img-container">
                <img class="img-resposiv endpoint-img" src="images/get-thought.png" alt="JSON respone image">
            </div>
        </section>

        <section class="section section--border-bottom body-text col-xs-12 col-lg-7">
            <div class="http-method-container">
                <p class="endpoint">
                    <label class="http-method-label http-method-label--get">GET</label>/api/thoughts/GetByCategory/{category}
                </p>
            </div>
            <p class="body-text">Retrive one or multiple a thoughts by category. Accepts a string as parameter.</p>
            <p>The response will include all merch objects with the category that matches the provided string.</p>
            <p>Example response body with string "headwear" as parameter:</p>
            <div class="endpoint-img-container">
                <img class="img-resposiv endpoint-img" src="images/get-thought.png" alt="JSON respone image">
            </div>
        </section>

        <section class="section section--border-bottom body-text col-xs-12 col-lg-7">
            <div class="http-method-container">
                <p class="endpoint">
                    <label class="http-method-label http-method-label--post">POST</label>/api/thoughts
                </p>
            </div>
            <p class="body-text">Add a new thought. Accepts a thought object as input.</p>
        </section>

        <section class="section section--border-bottom body-text col-xs-12 col-lg-7">
            <div class="http-method-container">
                <p class="endpoint">
                    <label class="http-method-label http-method-label--put">PUT</label>/api/thoughts
                </p>
            </div>
            <p class="body-text">Update an existing thought. Accepts a thought object as input.</p>
            <p class="body-text">Updates the existing object with ID matching the ID of the provided object.</p>
            <p class="body-text">The updated object will have the atributes of the provided object.</p>
        </section>

        <section class="section body-text col-xs-12 col-lg-7">
            <div class="http-method-container">
                <p class="endpoint">
                    <label class="http-method-label http-method-label--delete">DELETE</label>/api/thoughts/{id}
                </p>
            </div>
            <p class="body-text">Delete thought by ID. Accepts an int as parameter.</p>
            <p class="body-text">Removes the thought with ID matching the provided int.</p>
        </section>
    `;
}

export default setThoughtHTML;
