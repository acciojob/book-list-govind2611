//your JS code here. If required.
 document.addEventListener('DOMContentLoaded', function() {
      const submitButton = document.getElementById('submit');
      const bookList = document.getElementById('book-list');

      submitButton.addEventListener('click', function() {
        const titleInput = document.getElementById('title');
        const authorInput = document.getElementById('author');
        const isbnInput = document.getElementById('isbn');

        const title = titleInput.value;
        const author = authorInput.value;
        const isbn = isbnInput.value;

        if (title !== '' && author !== '' && isbn !== '') {
          const newRow = document.createElement('tr');
          newRow.innerHTML = `
            <td>${title}</td>
            <td>${author}</td>
            <td>${isbn}</td>
            <td><button class="btn btn-danger delete">Clear</button></td>
          `;

          bookList.appendChild(newRow);

          titleInput.value = '';
          authorInput.value = '';
          isbnInput.value = '';

          const deleteButtons = newRow.getElementsByClassName('delete');
          deleteButtons[0].addEventListener('click', function() {
            newRow.remove();
          });
        }
      });
    });