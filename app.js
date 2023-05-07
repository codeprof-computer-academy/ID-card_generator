// upload logic 

let file = document.querySelector('#file');
let photo = document.querySelector('.photo');
let upload_btn = document.querySelector('.upload-lbl')

let chosenImage = "";


file.addEventListener('change', (event)=>{
    event.preventDefault();

    let chosenFile = file.files[0];

    if(chosenFile){
          let reader = new FileReader();
          reader.addEventListener('load', ()=>{
                 photo.setAttribute('src', reader.result)
                 chosenImage = reader.result
          })

          reader.readAsDataURL(chosenFile)
    }
    

})

// target the id cards section
let card_section = document.querySelector('#cards-display')


// target the form and add event listener submit to it

document.querySelector('.id-form').addEventListener('submit', (event)=>{
         event.preventDefault();
        
        //   target all the input field values
        let school_name = document.querySelector('.school-input').value;
        let holde_name = document.querySelector('.holder-input').value;
        let course_name = document.querySelector('.course-input').value;
        let id_no = document.querySelector('.id-input').value


        // creating the dom elements using javascript

        // card
        let card = document.createElement('div');
        card.classList.add('card');
        card_section.appendChild(card);

        // create  h1 for school name
        let school = document.createElement('h1');
        school.classList.add('school-name');
        school.textContent = school_name

        card.appendChild(school)


        // create holder-pix
        let holder_image = document.createElement('img');
        holder_image.classList.add('holder-pix');
         holder_image.setAttribute('src', chosenImage)
        card.appendChild(holder_image)


        // holder name
        let holder  = document.createElement('h2');
        holder.classList.add('holder-name');
        holder.textContent = holde_name;

        card.appendChild(holder)

        //course title
        let course = document.createElement('h3');
        course.classList.add('course-name');
        course.textContent = course_name;
        card.appendChild(course)

        // id 
        let id = document.createElement('h4');
        id.classList.add('id-no');
        id.textContent = id_no;
        card.appendChild(id)




})