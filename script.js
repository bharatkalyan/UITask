$(document).ready(function () {
    $("#showCreate").click(function () {
        $('#roleContent').removeClass('offset-sm-6 col-sm-2 offset-md-6  col-md-2 offset-lg-6 col-lg-2 offset-xl-6  col-xl-2')
        $('#roleContent').addClass('offset-sm-2 col-sm-2 offset-md-2  col-md-2 offset-lg-2 col-lg-2 offset-xl-2  col-xl-2')
        $('#tblContent').removeClass('col-sm-12 col-md-12 col-lg-12 col-xl-12');
        $('#tblContent').addClass('col-sm-8 col-md-8 col-lg-8 col-xl-8');
        $('#showCreate').hide();
        $("#formtesting").toggle();
    });
});

$(document).ready(function () {
    $("#closeCreate").click(function () {
        $('#roleContent').removeClass('offset-sm-2 col-sm-2 offset-md-2  col-md-2 offset-lg-2 col-lg-2 offset-xl-2  col-xl-2')
        $('#roleContent').addClass('offset-sm-6 col-sm-2 offset-md-6  col-md-2 offset-lg-6 col-lg-2 offset-xl-6  col-xl-2')
        $('#tblContent').removeClass('col-sm-8 col-md-8 col-lg-8 col-xl-8');
        $('#tblContent').addClass('col-sm-12 col-md-12 col-lg-12 col-xl-12');
        $('#showCreate').show();
        $("#formtesting").toggle();
    });
});

$(document).ready(function () {
    $("#addBtnIcon1").click(function () {
        $('#roleContent').removeClass('offset-sm-6 col-sm-2 offset-md-6  col-md-2 offset-lg-6 col-lg-2 offset-xl-6  col-xl-2')
        $('#roleContent').addClass('offset-sm-2 col-sm-2 offset-md-2  col-md-2 offset-lg-2 col-lg-2 offset-xl-2  col-xl-2')
        $('#tblContent').removeClass('col-sm-12 col-md-12 col-lg-12 col-xl-12');
        $('#tblContent').addClass('col-sm-8 col-md-8 col-lg-8 col-xl-8');
        $('#showCreate').hide();
        $("#formtesting").show();
    });
});

$(document).ready(function () {
    $("#filterBtn").click(function () {
        $("#formtesting").hide();
        $('#filterRoles').show();
        $(".descSearch").css("width", "119px");
        $('#roleContent').removeClass('offset-sm-6 col-sm-2 offset-md-6  col-md-2 offset-lg-6 col-lg-2 offset-xl-6  col-xl-2')
        $('#roleContent').addClass('offset-sm-1 col-sm-2 offset-md-1  col-md-2 offset-lg-1 col-lg-2 offset-xl-1 col-xl-2')
        $('#tblContent').removeClass('col-sm-12 col-md-12 col-lg-12 col-xl-12');
        $('#tblContent').addClass('col-sm-6 col-md-6 col-lg-6 col-xl-6');
        $('#showCreate').hide();
        $('#viewRole').toggle();
    });
});
$(document).ready(function () {
    $("#hideViewRole").click(function () {
        $('#roleContent').removeClass('offset-sm-2 col-sm-2 offset-md-2  col-md-2 offset-lg-2 col-lg-2 offset-xl-2  col-xl-2')
        $('#roleContent').addClass('offset-sm-6 col-sm-2 offset-md-6  col-md-2 offset-lg-6 col-lg-2 offset-xl-6  col-xl-2')
        $('#tblContent').removeClass('col-sm-6 col-md-6 col-lg-6 col-xl-6');
        $('#tblContent').addClass('col-sm-12 col-md-12 col-lg-12 col-xl-12');
        $('#showCreate').show();
        $('#viewRole').hide();
        $('#filterRoles').hide();
    });
});
$(document).ready(function () {
    $("#closeFilter").click(function () {
        $('#filterRoles').hide();
    });
});


