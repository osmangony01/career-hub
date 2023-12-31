import { getShoppingCart } from "../utilities/fakedb";

const cartAppliedJobLoader = async () => {
    const loadedJobs = await fetch('/featured-jobs.json');
    const jobs = await loadedJobs.json();

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