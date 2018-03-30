$(function(){

    $('#btn1').on('click', function(){
        let $town = $('#town').val();


        $.ajax({
            url:"http://localhost:3000/posta/obec/"+ $town,
            data: { format: 'json'},
            dataType: "json",
            error: function(){
                $('#pscRes').html('Not found');
            },
            success : function(docs){
                $('#pscRes').html(docs.PSC);
            },
            type: 'GET'

        });

    });

    $('#btn2').on('click', function(){
        let $psc = $('#psc').val();
        $psc = $psc.replace(/\s/g,'');
        $psc = $psc.substring(0,3) + " " +  $psc.substring(3,5);


        $.ajax({
            url:"http://localhost:3000/posta/psc/"+ $psc,
            data: { format: 'json'},
            dataType: "json",
            error: function(){
                $('#townRes').html('Not found');
            },
            success : function(docs){
                $('#townRes').html(docs.OBEC + ', okres '+ docs.OKRES);
            },
            type: 'GET'

         });

    });



});