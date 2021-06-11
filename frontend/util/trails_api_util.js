export const fetchTrail = id => (
    $.ajax({
        method: 'GET',
        url: `api/trails/${id}`
    })
)

export const fetchTrails = () => (
    $.ajax({
        method: 'GET',
        url: `api/benches`
    })
)