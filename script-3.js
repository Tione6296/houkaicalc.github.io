$("#selectItem input[type=checkbox]").click(function(){
    const $count = $("input[type=checkbox]:checked").length;
    const $not = $('input[type=checkbox]').not(':checked');

        //チェックが3つ付いたら、チェックされてないチェックボックスにdisabledを加える
    if($count >= 3) {
        $not.attr("disabled",true);
    }else{
        //3つ以下ならisabledを外す
        $not.attr("disabled",false);
    }
});