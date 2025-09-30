import DBModule from "../modules/DBModule.js";

const setUseExamplesHTML = async () => {

    const selectedContentDiv = document.querySelector(".selected-content-div");
    const staffMembers = await DBModule.getStaffFromDB();
    const merch = await DBModule.getMerchFromDB();

    const getRandomIndex = (array) => {
        return Math.floor(Math.random() * array.length);
    }

    const randomStaffMember = staffMembers[getRandomIndex(staffMembers)];
    const randomMerch = merch[getRandomIndex(merch)];

    selectedContentDiv.innerHTML = `
        <h3 class="subtitle col-xs-12">Use Examples</h3>
        <p class="col-xs-12 body-text">Click the cards to se the JSON.</p>

        <div class="col-xs-12 col-sm-8 col-md-6 col-lg-6 col-xl-4">

            <a href="${DBModule.getStaffEndpoint() + randomStaffMember.id}">
                <article class="example-article body-text">
                    
                    <div class="example-article__img-container">
                        <img class="img-responsiv example-article__img" src="${DBModule.getImageEndpoint()}${randomStaffMember.image}" alt="Staff Image">
                    </div>

                    <div class="example-text-container">
                        <p><b>ID:</b> ${randomStaffMember.id}</p>
                        <p><b>Name:</b> ${randomStaffMember.firstName} ${randomStaffMember.lastName}</p>
                        <p><b>Position:</b> ${randomStaffMember.position}</p>
                        <p><b>Job Description:</b> ${randomStaffMember.jobDescription}</p>
                        <p><b>Email:</b> ${randomStaffMember.email}</p>
                    </div>
                    
                </article>
            </a>
            
            <a href="${DBModule.getMerchEndpoint() + randomMerch.id}">
                <article class="example-article body-text">
            
                    <div class="example-article__img-container">
                        <img class="img-responsiv example-article__img" src="${DBModule.getImageEndpoint()}${randomMerch.image}" alt="Merch Image">
                    </div>

                    <div class="example-text-container">
                        <p><b>ID:</b> ${randomMerch.id}</p>
                        <p><b>Name:</b> ${randomMerch.name}</p>
                        <p><b>Price:</b> ${randomMerch.price}</p>
                        <p><b>Type:</b> ${randomMerch.type}</p>
                    </div>
                </article>
            </a>

        </div>
    `;

}

export default setUseExamplesHTML;