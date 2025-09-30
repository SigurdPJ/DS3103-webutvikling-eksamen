import setSchemaHTML from "./set-schemas-docs.js"
import setImageUploadHTML from "./set-image-docs.js"
import setStaffHTML from "./set-staff-docs.js"
import setMerchHTML from "./set-merch-docs.js"
import setThoughtHTML from "./set-thought-docs.js"
import seStatusCodesHTML from "./set-status-codes-docs.js"
import setUseExaplesHTML from "./set-use-examples-docs.js"

const setDocsContent = (content) => {

    switch (content) {
        case "schema":
            setSchemaHTML();
            break;
        case "image":
            setImageUploadHTML();
            break;
        case "staff":
            setStaffHTML();
            break;
        case "merch":
            setMerchHTML();
            break;
        case "thought":
            setThoughtHTML();
            break;
        case "response":
            seStatusCodesHTML();
            break;
        case "examples":
            setUseExaplesHTML();
            break;
        default:
            break;
    }
}

export default setDocsContent;