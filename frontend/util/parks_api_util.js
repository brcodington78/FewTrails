export const fetchPark = id => (
    $.ajax({
        method: 'GET',
        url: `api/parks/${id}`
    })
)

export const fetchParks = () => (
    $.ajax({
        method: 'GET',
        url: 'api/parks'
    })
)