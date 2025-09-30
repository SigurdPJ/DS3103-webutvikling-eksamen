const setImageUploadHTML = () => {
    const selectedContentDiv = document.querySelector(".selected-content-div");

    selectedContentDiv.innerHTML = `
        <h3 class="subtitle col-xs-12">ImageUploadController</h3>

        <section class="section col-xs-12 col-lg-6">

            <div class="http-method-container body-text">
                <p class="endpoint">
                    <label class="http-method-label http-method-label--post">
                    POST</label>/api/images/ImageUpload
                </p>
            </div>
            <p class="body-text">Upload images to the server. Accepts image files as input.</p>

        <section/>
    `;
}

export default setImageUploadHTML;

