$(document).ready(function(){

    var list_radio_button=["ebp", "printer_student", "mode_s","windows_update","depot"];

    $('#scene').on('mousewheel', function expand(e) {
        $("#scene").off("mousewheel, touchmove");
        e.preventDefault();
        e.stopPropagation();
        $('#scene').attr('disabled', true);
        console.log("elem 1 :",e.originalEvent.detail);
        console.log("elem 2 :",e.originalEvent.wheelDelta);
        if(e.originalEvent.wheelDelta <= -30){
            //console.log('down');
            for(i=0; i<list_radio_button.length; i++){
                if($('input[id='+list_radio_button[i]+']:checked', '#scene').val() == "on"){
                    $("#"+list_radio_button[i+1]+"").prop("checked", true);
                    break;
                }
            }
            $('#scene').attr('disabled', false);
            e.preventDefault();
            e.stopPropagation();

        } else if(e.originalEvent.wheelDelta >= 30) {
            //console.log('up');
            
            for(i=0; i<list_radio_button.length; i++){
                if($('input[id='+list_radio_button[i]+']:checked', '#scene').val() == "on"){
                    $("#"+list_radio_button[i-1]+"").prop("checked", true);
                    break;
                }
            }
            $('#scene').attr('disabled', false);
            e.preventDefault();
            e.stopPropagation();

        }
    });

});
