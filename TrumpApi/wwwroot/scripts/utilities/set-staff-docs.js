const setStaffHTML = () => {
    const selectedContentDiv = document.querySelector(".selected-content-div");
    selectedContentDiv.innerHTML = `
        <h3 class="subtitle col-xs-12">StaffController</h3>
        <p class="body-text col-xs-12">Manage staff data. Supports full CRUD operations.</p>

        <section class="section section--border-bottom body-text col-xs-12 col-lg-7">
            <div class="http-method-container">
                <p class="endpoint">
                    <label class="http-method-label http-method-label--get">GET</label>
                    /api/staff
                </p>
            </div>
            <p class="body-text">Retrive all staff members.</p>
            <p>The response body will consist of an array of objects representing all staff members.</p>

            <div class="endpoint-img-container">
                <img class="img-resposiv endpoint-img" src="images/get-all-staff.png" alt="JSON respone image">
            </div>
        </section>

        <section class="section section--border-bottom body-text col-xs-12 col-lg-7">
            <div class="http-method-container">
                <p class="endpoint">
                    <label class="http-method-label http-method-label--get">GET</label>
                    /api/staff/{id}
                </p>
            </div>
            <p class="body-text">Retrive a staff member by ID. Accepts an int as parameter.</p>
            <p>The response body will consist of the staff object with ID that mathces the provided int.</p>
            <p>Example response with 4 as parameter:</p>
            <div class="endpoint-img-container">
                <img class="img-resposiv endpoint-img" src="images/get-staff.png" alt="JSON respone image">
            </div>
        </section>

        <section class="section section--border-bottom body-text col-xs-12 col-lg-7">
            <div class="http-method-container">
                <p class="endpoint">
                    <label class="http-method-label http-method-label--get">GET</label>
                    /api/staff/GetByName/{name}
                </p>
            </div>
            <p class="body-text">Retrive one or multiple staff members by name. Accepts a string as parameter.</p>
            <p>The response body will consist of all staff members with first or last names that include letters from the provided string.</p>
            <p>Example respone with "b" as parameter:</p>
            <div class="endpoint-img-container">
                <img class="img-resposiv endpoint-img" src="images/get-staff-name.png" alt="JSON respone image">
            </div>
        </section>

        <section class="section section--border-bottom body-text col-xs-12 col-lg-7">
            <div class="http-method-container">
                <p class="endpoint">
                    <label class="http-method-label http-method-label--post">POST</label>
                    /api/staff
                </p>
            </div>
            <p class="body-text">Add a new staff member. Accepts a staff object as input.</p>
        </section>

        <section class="section section--border-bottom body-text col-xs-12 col-lg-7">
            <div class="http-method-container">
                <p class="endpoint">
                    <label class="http-method-label http-method-label--put">PUT</label>
                    /api/staff
                </p>
            </div>
            <p class="body-text">Update an existing staff member. Accepts a staff object as input.</p>
            <p class="body-text">Updates the existing object with ID matching the ID of the provided object.</p>
            <p class="body-text">The updated object will have the atributes of the provided object.</p>
        </section>

        <section class="section body-text col-xs-12 col-lg-7">
            <div class="http-method-container">
                <p class="endpoint">
                    <label class="http-method-label http-method-label--delete">DELETE</label>
                    /api/staff/{id}
                </p>
            </div>
            <p class="body-text">Delete a staff member by ID. Accepts an int as parameter.</p>
            <p class="body-text">Removes the staff member with ID matching the provided int.</p>
        </section>
    `;
}

export default setStaffHTML;
