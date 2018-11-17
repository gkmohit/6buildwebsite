var token = '457048239.9a45e29.77735e307bcf4c4f805655265fc35ae3';
var num_photos = 15;
var instagram
 
$.ajax({
    url: 'https://api.instagram.com/v1/users/self/media/recent',
    dataType: 'jsonp',
    type: 'GET',
    data: {access_token: token, count: num_photos},
    success: function(response){
        var length = response.data.length 
        // console.log(response.data.length);

        console.log(response.data[0]);
        
        for( i = 0; i < length; i++){
            var id = "#instaImg" + i;
            var url = response.data[i].images.low_resolution.url;
            var caption = response.data[i].caption;
            if( caption != null){
                caption = caption.text
            }
            console.log(caption)
            $(id).attr("src", url);
            $(id).attr("alt", caption);
            
        }
        
    },
    error: function(data){
        console.log(data);
    }
});