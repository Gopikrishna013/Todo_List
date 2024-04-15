var list = document.querySelector(".section ul")
var formm = document.forms['addform']
formm.addEventListener(
    "submit",function(e){
        e.preventDefault()
        var value1 = document.querySelector('#addform input[type=text]').value;
        var li = document.createElement('li');
        var hobbyname = document.createElement('span');
        var dltbtn = document.createElement('span');

        li.appendChild(hobbyname);
        li.appendChild(dltbtn);

        list.appendChild(li)
        hobbyname.innerHTML = value1;
        dltbtn.innerHTML = "delete";
        hobbyname.classList.add("name")
        dltbtn.classList.add("delete")

    savedata()

    })


list.addEventListener(
    "click",function(e){
        if(e.target.className == "delete")
        
        {
            var li = e.target.parentElement
            list.removeChild(li)
        }else{
            var li= e.target.parentElement.remove();
            savedata()


        }
        
    }
)

var hideform = document.querySelector('#addform input[type=checkbox]')
hideform.addEventListener(
    'click',function(){
        if (list.style.display == "none"){
            list.style.display = "block"
        }else{
            list.style.display = "none"

        }
        
    }
)
function savedata(){
        localStorage.setItem('data',list.innerHTML)
    }
    function showtask(){
        list.innerHTML=localStorage.getItem("data")
    }
    


showtask()

function searchTask(query) 
    {
        let tasks = document.querySelectorAll('.section ul li');

        tasks.forEach(task =>
             {
            let tasktext = task.querySelector('span').textContent.toLowerCase();
             
            if (tasktext.includes(query)) {
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        });
    }



// Search bar>>>>>>>>>>>>>>

// const suggestionsData = ['Go for a walk','cook lunch', 'Read a book', 'Workout', 'Write code', 'Do laundry', 'Cook dinner'];

//         const searchInput = document.getElementById('searchInput');
//         const suggestions = document.getElementById('suggestions');

//         searchInput.addEventListener('input', function() {
//             const inputValue = this.value.toLowerCase();
//             const filteredSuggestions = suggestionsData.filter(suggestion =>
//                 suggestion.toLowerCase().includes(inputValue)
//             );

//             if (inputValue.length > 0 && filteredSuggestions.length > 0) {
//                 suggestions.innerHTML = ''; // Clear previous suggestions
//                 filteredSuggestions.forEach(suggestion => {
//                     const suggestionElement = document.createElement('a');
//                     suggestionElement.href = '#';
//                     suggestionElement.textContent = suggestion;
//                     suggestionElement.addEventListener('click', function(e) {
//                         e.preventDefault();
//                         searchInput.value = this.textContent;
//                         suggestions.innerHTML = ''; // Clear suggestions after selecting one
//                     });
//                     suggestions.appendChild(suggestionElement);
//                 });
//                 suggestions.style.display = 'bmlock'; // Show suggestions
//             } else {
//                 suggestions.style.display = 'none'; // Hide suggestions if no input or no matches
//             }
//         });

//     // Hide suggestions when clicking outside the input field
//         document.addEventListener('click', function(e) {
//             if (!searchInput.contains(e.target) && !suggestions.contains(e.target)) {
//                 suggestions.style.display = 'none';
//             }
//         });









// document.addEventListener("DOMContentLoaded", function() {
//     const addForm = document.getElementById("addform");
//     const newTaskInput = document.getElementById("newTaskInput");
//     const taList = document.querySelector(".mylists");

//     // Function to add a new task
//     function addTask(taskName) {
//         const li = document.createElement("li");
//         li.innerHTML = `
//             <span class="name">${taskName}</span>
//             <span class="delete">Delete</span>
//         `;
//         taskList.appendChild(li);
//     }

//     // Function to handle adding a new task
//     function handleAddTask(event) {
//         event.preventDefault();
//         const taskName = newTaskInput.value.trim();
//         if (taskName !== "") {
//             addTask(taskName);
//             newTaskInput.value = "";
//         }
//     }

//     // Event listener for the add task button
//     document.getElementById("addTaskBtn").addEventListener("click", handleAddTask);

//     // Event listener for dynamically added delete buttons
//     taskList.addEventListener("click", function(event) {
//         if (event.target.classList.contains("delete")) {
//             event.target.parentElement.remove();
//         }
//     });

//     // Event listener for hiding the list
//     document.getElementById("hide").addEventListener("change", function(event) {
//         const checked = event.target.checked;
//         taskList.style.display = checked ? "none" : "block";
//     });
// });