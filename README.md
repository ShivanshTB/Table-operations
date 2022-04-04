# Table-operations
1: When user entered name age and mobile number. First the input is get validated when user jumpes to another field. If input is not valid user will see an alert box with an error message.

2: If input is valid and user click on submit button. Function name onFormSubmit gets activated with the form getting reset using resetForm function and reads the data in input field using readFormData function which helps to store data in array name formData.
3: then, if user have not clicked on edit button then rowSelected will be null which call insertNewRecord function which helps to insert data in new row.
4: In insertNewRecord function we insert a new row using insertRow method and in row we add cells using insertCell method and text in inserted in cell using innerText and two buttons are added in cell 4/action column name edit and delete which helps to perform edit and delete functionality by call there respectively functions.
5: If user clicked on delete button onDelete function get called and an confirmation box appear saying "Do you want to delete the record?". If we click on ok button the row gets deleted and if click on cancel button then row will not get deleted.
6: If user click on edit button onEdit function runs and the data present on that row will gets displayed on input fields respectively then user can edit the data and when user click on submit button to update the data onFormSubmit function runs but this time rowSelected is not null so else part get executed and runs updateRecord function.
7: UpdateRecord function updates the record in there respective cell using innerText.


#search-box
 In search box when user type any letter of name it gets converted into uppercase and get stored in searchStr then using for loop we display the row .

 #sorting
 In sorting , when the user clicks on table head the the data rearrange in ascending order as the first arrangement in set to be ascending. The data is sorted using for loop which compares two rows and if the first row is greater then second row then it get rearrange ,this loop end when all rows get rearranged.