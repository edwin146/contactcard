function description_handler(){
    $(".show_description").click(function(){
        $(this).siblings(".name").hide()
        $(this).siblings(".description").show()
        $(this).hide()

    })
}


$(document).ready(function(){
    $(document).on("click", ".btn", function(){
        var firstName = $("input[name=first_name]").val()
        var lastName = $("input[name=last_name]").val()
        var description = $("textarea[name=description]").val()
        var html="<tr><td>"+ "<div class='name'>"+ "<h3>"+ firstName +" "+ lastName + "</h3>"+"</div>" + "<a href='#' class='show_description'>Click for description!</a>" +"<div class='description'>"+ description +"</div>"+"</td></tr>"
        if (firstName && lastName && description){
            $("tbody").append(html)
            description_handler()
        }
    })
})
