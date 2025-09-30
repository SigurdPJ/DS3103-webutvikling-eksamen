const MerchPageModule = (() => {

    const getPageFromLocalStorage = () => {
        return localStorage.getItem("selectedPage");
    }
    
    const savePageToLocalStorage = (page: string) => {
        localStorage.setItem("selectedPage", page);
    }

    return {
        getPageFromLocalStorage,
        savePageToLocalStorage
    }
    
})();

export default MerchPageModule;