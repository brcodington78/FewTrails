export const fetchTrails = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/trails'
    });
};

export const fetchTrail = id => {
    return $.ajax({
        method: 'GET',
        url: `/api/trails/${id}`
        
        
    });
};





