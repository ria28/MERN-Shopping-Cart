const mockFetch = require('./mock-fetch')
const successResponse = [{
        'userId': '1',
        "data": 'This looks slick!'
    },
    {
        'userId': '2',
        "data": 'I think this can be improved.'
    },
    {
        'userId': '1',
        "data": 'What kind of improvement?'
    }
];
mockFetch('/api/comments', successResponse);

async function getCommentsByUserId(userId) {
    for (var i of successResponse) {
        if(i.userId==userId)
        {
            console.log(i.data);
        }
    }
}

module.exports = getCommentsByUserId;

getCommentsByUserId('1')