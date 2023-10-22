  document.getElementById("book-form").addEventListener("submit", function(event) {
        	event.preventDefault();
	    
	       const title = document.getElementById("title").value;
		   const author = document.getElementById("author").value;
		   const isbn = document.getElementById("isbn").value;

	    let newRow = document.createElement("tr");
    	newRow.innerHTML = `
			<td>${title}</td>
            <td>${author}</td>
            <td>${isbn}</td>
			 <td><span class="delete">X</span></td>
			`;
	        // Append the new row to the table
           document.getElementById("book-list").appendChild(newRow)
            // Clear the input fields
            document.getElementById("title").value = "";
            document.getElementById("author").value = "";
            document.getElementById("isbn").value = "";
        });

        // Event delegation for delete buttons
        document.getElementById("book-list").addEventListener("click", function (e) {
            if (e.target.className === "delete") {
                e.target.parentElement.parentElement.remove();
            }
        });