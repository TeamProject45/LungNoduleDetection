function FilterTable() {
    // Declare variables 
    var input, filter, table, tr, td, i;
    input = document.getElementById("Filter_input");
    filter = input.value.toLowerCase();
    table = document.getElementById("data_table");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            if (td.innerHTML.toLowerCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}