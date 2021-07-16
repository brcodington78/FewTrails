export const fetchParks = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/trails'
    });
};

export const fetchPark = id => {
    return $.ajax({
        method: 'GET',
        url: `/api/trails${id}`
    })
}