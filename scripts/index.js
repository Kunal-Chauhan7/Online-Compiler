let editor;
window.onload = function(){
    editor = ace.edit("Editor");
    editor.setTheme("ace/theme/dracula");
    editor.session.setMode("ace/mode/c_cpp");
}

function changelanguage(){
    let Language = $(languages).val();
    if(Language === "C" || Language === "C++"){
        editor.session.setMode("ace/mode/c_cpp");
    }
    else if(Language === "Python"){
        editor.session.setMode("ace/mode/python");
    }
    else if(Language === "Java"){
        editor.session.setMode("ace/mode/java");
    }
}

function runCode(){
    $.ajax({
        url: "Online-Compiler/serve/complier.php",
        method: "POST",
        data:{
            language: $("#languages").val(),
            code: editor.getSession().getValue()
        },
        success: function(response) {
            $(".output").text(response)
        }
    })
}
