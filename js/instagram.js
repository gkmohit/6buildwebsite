var token = '7494369411.34df56b.dcae2e20ebf54d9081fb1eceb5e14411';
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
            var url = response.data[i].images.standard_resolution.url;
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