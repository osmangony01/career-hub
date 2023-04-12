

const loadJobDetails = async({ params }) => {
    const id = params.id;
    const res = await fetch('/featured-jobs.json');
    const data = await res.json();
    const JobDetailData = data.find(dt => dt.id == id);
    return JobDetailData;
};

export default loadJobDetails;