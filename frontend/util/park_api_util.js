export const fetchParks = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/parks'
    });
};

export const fetchPark = id => {
    return $.ajax({
        method: 'GET',
        url: `/api/parks/${id}`
    })
}