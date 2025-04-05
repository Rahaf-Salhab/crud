 
 
 
 const name = document.querySelector("#courseName");
 const category = document.querySelector("#courseCategory");
 const price = document.querySelector("#coursePrice");
 const description = document.querySelector("#courseDescription");
 const capacity = document.querySelector("#courseCapacity");
 const addBtn = document.querySelector("#click");
 //عرض البيانات الموجودة ب arrayOfObject "courses"      
 // ولكن لو في عناصر داخل localStorage يضعها داخل ..arrayOfObject
 let courses = [];
 if(localStorage.getItem("courses") != null){
    //لتحويله على شكل arrayOfObject
    courses = JSON.parse(localStorage.getItem("courses")); 
    displayCourses(); 
 }

 addBtn.addEventListener("click" , (e)=>{
    //لمنع التحديث التلقائي 
     e.preventDefault();
     //arrayOfObject لجمع بيانات الكورس معا
     const course = {
    name : name.value,
    category : category.value,
    price : price.value,
    description : description.value,
    capacity : capacity.value,
     }
     //لاضافة كل كورس تتم اضافته وعدم فقدان الكورس السابق
     courses.push(course);
//تحويل arrayOfObject الى string
     localStorage.setItem("courses" ,JSON.stringify(courses));
     Swal.fire({
        title: "Course Added",
        text: "New Course Is Added !",
        icon: "success"
      });
     displayCourses();
  });

//فنكشين لعرض courses
  function displayCourses (){
    //احضار الداتا من arrayOfObject وارجاعها في result
const result = courses.map((course , index)=>{
    return `
    <tr>
    <td>${index}</td>
    <td>${course.name}</td>
    <td>${course.category}</td>
    <td>${course.price}</td>
    <td>${course.description}</td>
    <td>${course.capacity}</td>
    </tr>
    `;
  }).join(' ');
  document.querySelector("#data").innerHTML = result;
  }



   