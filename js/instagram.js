var token = '457048239.9a45e29.77735e307bcf4c4f805655265fc35ae3',
    num_photos = 15;
 
$.ajax({
    url: 'https://api.instagram.com/v1/users/self/media/recent',
    dataType: 'jsonp',
    type: 'GET',
    data: {access_token: token, count: num_photos},
    success: function(data){
        console.log(data);
        
    },
    error: function(data){
        console.log(data);
    }
});