const setStatusCodesHTML = () => {
    const selectedContentDiv = document.querySelector(".selected-content-div");

    selectedContentDiv.innerHTML = `
        <h3 class="subtitle col-xs-12">HTTP Responses</h3>
        <p class="body-text col-xs-12 col-lg-6">The API responds with appropriate status codes based on the outcome of the request.</p>
        <ul class="col-xs-12 body-text">
            <li>200 OK</li>
            <li>400 Bad Request</li>
            <li>404 Not Found</li>
            <li>500 Internal Server Error</li>
        </ul>
    `;
}

export default setStatusCodesHTML;

