$(document).ready(function(){
    $('.btn').on('click',function(){
// 1.簡單測試抓到資料功能
        // $.ajax({
        // url:'https://ruienyuski.github.io/git_test/data222.json',
        // 	success:function(response){
        // 		$('.info').html('抓到資料囉!');
        // 	},
        // 	error:function(xhr){
        // 		  alert("發生錯誤: " + xhr.status + " " + xhr.statusText);
        // 	}
        // });

//2.顯示json 在網頁上
$.ajax({ 
type: 'GET', 
url: 'https://ruienyuski.github.io/git_test/data.json', 
dataType: 'json',
success: function (response) { 
$.each(response, function(index, element) {
    $('.info').append(
        $('<li>', 
        {text: [index+1]+'.'+'名稱：'+element.place}),
        $('<li>',
        {text: [index+1]+'.'+'地址：'+element.address}),
        $('<p>')
        );
});
},
error:function(xhr){
alert("發生錯誤: " + xhr.status + " " + xhr.statusText);
}
});

    });
});