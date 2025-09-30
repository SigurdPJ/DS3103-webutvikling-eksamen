const setMerchHTML = () => {
    const selectedContentDiv = document.querySelector(".selected-content-div");

    selectedContentDiv.innerHTML = `
        <h3 class="subtitle col-xs-12">MerchController</h3>
        <p class="body-text col-xs-12">Manage Trump merch. Supports full CRUD operations.</p>

        <section class="section section--border-bottom body-text col-xs-12 col-lg-6">
            <div class="http-method-container ">
                <p class="endpoint">
                    <label class="http-method-label http-method-label--get">GET</label>/api/merch
                </p>
            </div>
            <p class="body-text">Retrive all merch.</p>
            <p>The response body will consist of an array of objects representing all merch.</p>
            <div class="endpoint-img-container">
                <img class="img-resposiv endpoint-img" src="images/get-all-merch.png" alt="JSON respone image">
            </div>
        </section>

        <section class="section section--border-bottom body-text col-xs-12 col-lg-7">
            <div class="http-method-container">
                <p class="endpoint">
                    <label class="http-method-label http-method-label--get">GET</label>/api/merch/{id}
                </p>
            </div>
            <p class="body-text">Retrive a merch by ID. Accepts an int as parameter.</p>
            <p>The response body will consist of the merch object with the ID that mathces the provided int.</p>
            <p>Example response with 1 as parameter:</p>
            <div class="endpoint-img-container">
                <img class="img-resposiv endpoint-img" src="images/get-merch.png" alt="JSON respone image">
            </div>
        </section>

        <section class="section section--border-bottom body-text col-xs-12 col-lg-7">
            <div class="http-method-container">
                <p class="endpoint">
                    <label class="http-method-label http-method-label--get">GET</label>/api/merch/GetByName{name}
                </p>
            </div>
            <p class="body-text">Retrive one or multiple merch by name. Accepts a string as parameter.</p>
            <p>The response body will consist of all merch with names that include letters from the provided string.</p>
            <p>Example response with "e" as parameter:</p>
            <div class="endpoint-img-container">
                <img class="img-resposiv endpoint-img" src="images/get-merch-search.png" alt="JSON respone image">
            </div>
        </section>

        <section class="section section--border-bottom body-text col-xs-12 col-lg-7">
            <div class="http-method-container">
                <p class="endpoint">
                    <label class="http-method-label http-method-label--get">GET</label>/api/merch/GetByName{type}
                </p>
            </div>
            <p class="body-text">Retrieves merch by type. Accepts a string as parameter.</p>
            <p>The response body consists of all merch objects with the type-atribute that match the provided string.</p>
            <p>Example response with "headwear" as parameter:</p>
            <div class="endpoint-img-container">
                <img class="img-resposiv endpoint-img" src="images/get-merch-type.png" alt="JSON respone image">
            </div>
        </section>

        <section class="section section--border-bottom body-text col-xs-12 col-lg-7">
            <div class="http-method-container">
                <p class="endpoint">
                    <label class="http-method-label http-method-label--post">POST</label>/api/merch
                </p>
            </div>
            <p class="body-text">Add a new merch. Accepts a merch object as input.</p>
        </section>

        <section class="section section--border-bottom body-text col-xs-12 col-lg-7">
            <div class="http-method-container">
                <p class="endpoint">
                    <label class="http-method-label http-method-label--put">PUT</label>/api/merch
                </p>
            </div>
            <p class="body-text">Update an existing merch. Accepts a merch object as input.</p>
            <p class="body-text">Updates the existing object with ID matching the ID of the provided object.</p>
            <p class="body-text">The updated object will have the atributes of the provided object.</p>
        </section>

        <section class="section body-text col-xs-12 col-lg-7">
            <div class="http-method-container">
                <p class="endpoint">
                    <label class="http-method-label http-method-label--delete">DELETE</label>/api/merch/{id}
                </p>
            </div>
            <p class="body-text">Delete merch by ID. Accepts an int as parameter.</p>
            <p class="body-text">Removes the merch item with ID matching the provided int.</p>

        </section>
    `;
}

export default setMerchHTML;
