import { getShoppingCart } from "../utilities/fakedb";

const cartAppliedJobLoader = async () => {
    const loadedJobs = await fetch('/src/utilities/featured-jobs.json');
    const jobs = await loadedJobs.json();


    // if cart data is in database, you have to use async await
    const storedCart = getShoppingCart();
    const addedJobs = [];
    if (storedCart) {
        for (const id in storedCart) {
            const exists = jobs.find(pd => pd.id === id);
            if (exists) {
                addedJobs.push(exists);
            }
        }
    }
    return addedJobs;
};

export default cartAppliedJobLoader;