const DBModule = (()=>{
    const staffEndpoint = "http://localhost:5177/api/staff/";
    const merchEndpoint = "http://localhost:5177/api/merch/";
    const imageEndpoint = "http://localhost:5177/images/";

    const getStaffFromDB = async() => {
        try {
            const result = await axios.get(staffEndpoint);
            return result.data;
        } catch {
            return null;
        }
    }

    const getMerchFromDB = async() => {
        try {
            const result = await axios.get(merchEndpoint);
            return result.data;
        } catch {
            return null;
        }
    }

    const getStaffEndpoint = () => {
        return staffEndpoint;
    }

    const getMerchEndpoint = () => {
        return merchEndpoint;
    }

    const getImageEndpoint = () => {
        return imageEndpoint;
    }

    return {
        getStaffFromDB,
        getMerchFromDB,
        getStaffEndpoint,
        getMerchEndpoint,
        getImageEndpoint
    }

})();

    


export default DBModule;